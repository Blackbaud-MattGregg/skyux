/* global angular */
(function () {
    'use strict';

    function Controller() {
        var ctrl = this,
            listbuilderSelectedItems;

        function toggleOnlySelected(isSelected) {
            ctrl.bbListbuilderOnShowOnlySelected({showOnlySelected: isSelected});
        }

        function addSelectedItem(id, selectedItems) {
            if (selectedItems.indexOf(id) === -1) {
                selectedItems.push(id);
            }
        }

        function removeSelectedItem(id, selectedItems) {
            var itemIndex = selectedItems.indexOf(id);
            if (itemIndex !== -1) {
                selectedItems.splice(itemIndex, 1);
            }
        }

        function multiselectItemToggled(isSelected, id) {
            if (isSelected) {
                addSelectedItem(id, listbuilderSelectedItems);
            } else {
                removeSelectedItem(id, listbuilderSelectedItems);
            }
            ctrl.bbListbuilderMultiselectItemsChanged({selectedItems: listbuilderSelectedItems, allSelected: false});
        }

        function multiselectItemsToggled(isSelected, selectedItems) {
            var length = selectedItems.length,
                i;

            for (i = 0; i < length; i++) {
                if (isSelected) {
                    addSelectedItem(selectedItems[i], listbuilderSelectedItems);
                } else {
                    removeSelectedItem(selectedItems[i], listbuilderSelectedItems);
                }
            }
            ctrl.bbListbuilderMultiselectItemsChanged({selectedItems: listbuilderSelectedItems, allSelected: isSelected});
        }

        function setListbuilderSelectedItems() {
            if (angular.isUndefined(ctrl.bbListbuilderMultiselectSelectedItems)) {
                listbuilderSelectedItems = [];
            } else {
                listbuilderSelectedItems = ctrl.bbListbuilderMultiselectSelectedItems;
            }
        }

        function onInit() {
            if (angular.isFunction(ctrl.bbListbuilderOnShowOnlySelected)) {
                ctrl.hasOnlySelected = true;
            }

            setListbuilderSelectedItems();

            ctrl.listbuilderCtrl.multiselectItemToggled = multiselectItemToggled;
        }

        function bindingChanges(changesObj) {
            /* istanbul ignore else */
            /* sanity check */
            if (changesObj.bbListbuilderMultiselectSelectedItems) {
                setListbuilderSelectedItems();
            }
        }

        ctrl.toggleOnlySelected = toggleOnlySelected;
        ctrl.multiselectItemToggled = multiselectItemToggled;
        ctrl.multiselectItemsToggled = multiselectItemsToggled;

        ctrl.$onInit = onInit;
        ctrl.$onChanges = bindingChanges;
    }

    angular.module('sky.listbuilder.multiselect.component', 
      [
          'sky.resources',
          'sky.listbuilder.multiselect.selectall.component',
          'sky.listbuilder.multiselect.clearall.component'
      ])
        .component('bbListbuilderMultiselect', {
            templateUrl: 'sky/templates/listbuilder/listbuilder.multiselect.component.html',
            bindings: {
                bbListbuilderOnShowOnlySelected: '&?',
                bbListbuilderShowOnlySelected: '<?',
                bbListbuilderMultiselectSelectedItems: '<?',
                bbListbuilderMultiselectItemsChanged: '&?'
            },
            require: {
                listbuilderCtrl: '^^bbListbuilder'
            },
            transclude: true,
            controller: Controller
        });
})();