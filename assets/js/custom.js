$('document').ready(function () {
    const current_path = window.location.pathname.split('/').pop();
    const getBranchID = window.location.hash;
    activeMenuLi(current_path);
    activaTab(getBranchID);
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