window.admin.removeSubmitButtonOffsetOn("#permissions");$(".permission-parent-actions > .allow-all, .permission-parent-actions > .deny-all, .permission-parent-actions > .inherit-all").on("click",i=>{let e=i.currentTarget.className.split(/\s+/)[2].split(/-/)[0];$(`.permission-${e}`).prop("checked",!0)});$(".permission-group-actions > .allow-all, .permission-group-actions > .deny-all, .permission-group-actions > .inherit-all").on("click",i=>{let e=i.currentTarget.className.split(/\s+/)[2].split(/-/)[0];$(i.currentTarget).closest(".permission-group").find(`.permission-${e}`).each((t,n)=>{$(n).prop("checked",!0)})});$(".delete-api-key").on("click",i=>{$("#confirmation-form").attr("action",i.currentTarget.dataset.action)});
//# sourceMappingURL=main-6ccdec36-v4.0.0.js.map