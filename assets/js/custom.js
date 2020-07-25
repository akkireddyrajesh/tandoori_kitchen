$('document').ready(function () {
    const current_path = window.location.pathname.split('/').pop();
    const getBranchID = window.location.hash;
    /**
     * To Active current page button
     */
    activeMenuLi(current_path);

    /**
     * To Active Selected Branch
     */
    activaTab(getBranchID);
    $('.dropdown-item').click(function(e){
        var addressValue = '#'+$(this).attr("href").split('#').pop();
        console.log(`$(this).value()`, addressValue);
        activaTab(addressValue);
    });
});

function activaTab(branchId) {
    console.log(`getBranch from url is ${branchId}`);
    $('.nav-tabs a[href="' + branchId + '"]').tab('show');
}
function activeMenuLi(current_path) {
    console.log(`current file name from URL is :: ${current_path}`);
    $('.menu_ul > li').each(function (i, obj) {
        let dataUrl = $(this).attr('data-url');
        if (dataUrl == current_path) {
            $(this).addClass("btn_active");
        }
    });
}