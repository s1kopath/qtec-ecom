window.admin.removeSubmitButtonOffsetOn(["#logo","#courier"]);let o=$("#currency_rate_exchange_service");$(`#${o.val()}-service`).removeClass("hide");o.on("change",e=>{$(".currency-rate-exchange-service").addClass("hide"),$(`#${e.currentTarget.value}-service`).removeClass("hide")});$("#auto_refresh_currency_rates").on("change",()=>{$("#auto-refresh-frequency-field").toggleClass("hide")});let t=$("#sms_service");$(`#${t.val()}-service`).removeClass("hide");t.on("change",e=>{$(".sms-service").addClass("hide"),$(`#${e.currentTarget.value}-service`).removeClass("hide")});$("#facebook_login_enabled").on("change",()=>{$("#facebook-login-fields").toggleClass("hide")});$("#google_login_enabled").on("change",()=>{$("#google-login-fields").toggleClass("hide")});$("#paypal_enabled").on("change",()=>{$("#paypal-fields").toggleClass("hide")});$("#stripe_enabled").on("change",()=>{$("#stripe-fields").toggleClass("hide")});$("#paytm_enabled").on("change",()=>{$("#paytm-fields").toggleClass("hide")});$("#razorpay_enabled").on("change",()=>{$("#razorpay-fields").toggleClass("hide")});$("#instamojo_enabled").on("change",()=>{$("#instamojo-fields").toggleClass("hide")});$("#paystack_enabled").on("change",()=>{$("#paystack-fields").toggleClass("hide")});$("#authorizenet_enabled").on("change",()=>{$("#authorizenet-fields").toggleClass("hide")});$("#mercadopago_enabled").on("change",()=>{$("#mercadopago-fields").toggleClass("hide")});$("#flutterwave_enabled").on("change",()=>{$("#flutterwave-fields").toggleClass("hide")});$("#bank_transfer_enabled").on("change",()=>{$("#bank-transfer-fields").toggleClass("hide")});$("#check_payment_enabled").on("change",()=>{$("#check-payment-fields").toggleClass("hide")});$("#store_country").on("change",e=>{let s=$("#store_state").val();$.ajax({type:"GET",url:route("countries.states.index",e.currentTarget.value),success(a){if($(".store-state").addClass("hide"),_.isEmpty(a))return $(".store-state.input").removeClass("hide").find("input").val(s);let l="";for(let n in a)l+=`<option value="${n}">${a[n]}</option>`;$(".store-state.select").removeClass("hide").find("select").html(l).val(s)}})});$(function(){$("#store_country").trigger("change")});
//# sourceMappingURL=main-d39fce98-v4.0.0.js.map