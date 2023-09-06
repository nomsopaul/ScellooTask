const { Coupon} = require('../models/coupon');
const { rule} = require('../models/rule');
const { discountType } = require('../models/discountType');

exports.applyCoupon = async (req, res) => {
    try {
        const { code } = req.body;
        const coupon = await Coupon.findOne({
            where: { code },
            include: [rule, discountType],
        });

        if (!coupon) {
            return res.status(404).json({ error: 'Coupon not found' });
        }

        
        const totalPrice = calculateTotalPriceFromCart();

        for (const rule of coupon.rules) {
            if (totalPrice < rule.minCartTotalPrice) {
                return res.json({ error: 'Coupon rule not met' });
            }
        }

        
        let maxDiscount = 0;
        for (const discountType of coupon.DiscountTypes) {
            if (discountType.type === 'fixed') {
                maxDiscount = Math.max(maxDiscount, discountType.value);
            } else if (discountType.type === 'percent') {
                maxDiscount = Math.max(maxDiscount, totalPrice * (discountType.value / 100));
            }
        }

        const adjustedTotalPrice = totalPrice - maxDiscount;

        res.json({ adjustedTotalPrice, discountAmount: maxDiscount });


        res.json({ message: 'Coupon applied successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};