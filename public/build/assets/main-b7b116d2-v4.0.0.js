window.admin.removeSubmitButtonOffsetOn(["#logo","#footer","#newsletter","#product_page","#slider_banners","#three_column_full_width_banners","#brands","#two_column_banners","#three_column_banners","#one_column_banner"]);$("#storefront_theme_color").on("change",e=>{e.currentTarget.value==="custom_color"?$("#custom-theme-color").removeClass("hide"):$("#custom-theme-color").addClass("hide")});$("#storefront_mail_theme_color").on("change",e=>{e.currentTarget.value==="custom_color"?$("#custom-mail-theme-color").removeClass("hide"):$("#custom-mail-theme-color").addClass("hide")});$("#storefront-settings-edit-form").on("click",".panel-image",e=>{new MediaPicker({type:"image"}).on("select",r=>{$(e.currentTarget).find("i").remove(),$(e.currentTarget).find("img").attr("src",r.path).removeClass("hide"),$(e.currentTarget).find(".banner-file-id").val(r.id)})});$(".product-type").on("change",e=>{let t=$(e.currentTarget).parents(".form-group").siblings(".category-products"),r=$(e.currentTarget).parents(".form-group").siblings(".products-limit"),o=$(e.currentTarget).parents(".form-group").siblings(".custom-products");t.addClass("hide"),r.addClass("hide"),o.addClass("hide"),e.currentTarget.value==="category_products"&&t.removeClass("hide"),(e.currentTarget.value==="latest_products"||e.currentTarget.value==="recently_viewed_products"||e.currentTarget.value==="category_products")&&r.removeClass("hide"),e.currentTarget.value==="custom_products"&&o.removeClass("hide")});
//# sourceMappingURL=main-b7b116d2-v4.0.0.js.map