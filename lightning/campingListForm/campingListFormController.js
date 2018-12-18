({

    submitForm: function(component, event, helper) {
        if(helper.validateItemForm(component)){
            // Create the new item
            var createItem  = component.get("v.createItem ");
            helper.createItem(component, createItem );
        }

    }

})
