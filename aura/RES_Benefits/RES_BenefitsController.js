({
    // click on 'Link to Benefit Overview Video' callback
    handleBenefitsLinkClick : function (component, event, helper) {
        // get involved components
        var videoModal = component.find('videoModal')
        var resourceVideo = component.find('resourceVideo')

        // set video src based on the div data videokey:  benefitsVideoURL
        var benefitsVideoURL = component.get('v.employeeSettings.benefitsVideoURL')
        console.log(benefitsVideoURL)
        resourceVideo.set('v.src', benefitsVideoURL)
        // set the modal title according to the video
        videoModal.set('v.title', 'My Benefits')
        // show modal
        videoModal.show()

    },
    // close modal callback
    handleModalHide : function (component, event, helper) {
        // when the modal is closed
        // pause the video
        component.find('resourceVideo').pause();
    },
    // video ended callback
    handleVideoEnded : function (component, event, helper) {
        // close video Modal
        component.find('videoModal').hide();
    }, })