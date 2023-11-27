export default {
    methods: {
        productUrl(product) {
            return route("products.show", {
                slug: product.slug,
                ...(this.hasAnyVariant(product) && {
                    variant: product.variant.uid,
                }),
            });
        },

        hasAnyVariant(product) {
            return product.variant !== null;
        },

        hasBaseImage(product) {
            return this.hasAnyVariant(product)
                ? product.variant.base_image.length !== 0
                : product.base_image.length !== 0;
        },

        baseImage(product) {
            if (this.hasBaseImage(product)) {
                return this.hasAnyVariant(product)
                    ? product.variant.base_image.path
                    : product.base_image.path;
            }

            return `${window.FleetCart.baseUrl}/build/assets/image-placeholder.png`;
        },

        productPrice(product) {
            return this.hasAnyVariant(product)
                ? product.variant.formatted_price
                : product.formatted_price;
        },

        productIsInStock(product) {
            return this.hasAnyVariant(product)
                ? product.variant.is_in_stock
                : product.is_in_stock;
        },
    },
};
