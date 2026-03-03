# Razorpay Payment Gateway Integration Guide

## Overview
This website is now integrated with Razorpay, India's leading payment gateway. Customers can make secure payments directly from the quote page.

## Setup Instructions

### Step 1: Get Your Razorpay Keys

1. Go to [Razorpay Dashboard](https://dashboard.razorpay.com)
2. Sign up or log in to your account
3. Go to **Settings → API Keys**
4. You'll see two keys:
   - **Key ID** (Public key - safe to expose)
   - **Key Secret** (Private key - NEVER share or expose)

### Step 2: Update Environment Variables

1. Open `.env.local` file in your project root
2. Replace the values:
   ```
   NEXT_PUBLIC_RAZORPAY_KEY_ID=your_actual_key_id_from_dashboard
   RAZORPAY_KEY_SECRET=your_actual_key_secret_from_dashboard
   ```

3. **IMPORTANT**: 
   - `NEXT_PUBLIC_RAZORPAY_KEY_ID` is publicly visible (used by frontend)
   - `RAZORPAY_KEY_SECRET` is server-side only (for payment verification)
   - Never commit `.env.local` to version control

### Step 3: Test the Integration

#### Test Mode (Recommended for development)
1. In Razorpay Dashboard, keep **Test Mode** enabled
2. Use test card numbers to process payments:
   - **Card Number**: 4111111111111111
   - **Expiry**: Any future date (e.g., 12/25)
   - **CVV**: Any 3 digits (e.g., 123)

#### Live Mode
1. When ready for production, switch to **Live Mode** in Razorpay Dashboard
2. Make sure to update your payment processing infrastructure

### Step 4: How It Works

#### Customer Journey:
1. Customer fills the quote calculator
2. Clicks "Pay Now with Razorpay"
3. Enters their details (name, email, phone)
4. Clicks "Proceed to Pay"
5. Razorpay payment modal opens
6. Customer selects payment method:
   - Credit/Debit Card
   - UPI (Google Pay, PhonePe, etc.)
   - Net Banking
   - Wallet
   - EMI (for amounts > ₹10,000)
7. Payment is processed securely
8. System verifies payment signature
9. Customer redirected to success page

#### Payment Flow:
```
Quote Calculator → Customer Details → Razorpay Modal → Payment Processing → Verification → Success Page
```

### Step 5: Payment Verification

The system includes payment verification to prevent fraud:

1. **Client-Side**: Razorpay generates a payment signature
2. **Server-Side** (`/api/verify-payment`): 
   - Verifies the signature using your secret key
   - Ensures payment was successful
   - Saves booking details

### Step 6: Handle Payments in Your Backend

After successful verification, you can:

1. **Save Booking** - Store customer and service details in database
2. **Send Email** - Confirmation email with booking details
3. **Create Service Ticket** - Generate service request in your system
4. **Trigger Workflows** - Schedule appointment reminders, etc.

Update `/src/app/api/verify-payment/route.ts` to add your custom logic.

## Files Modified/Created

### New Files:
- `/src/lib/razorpay.ts` - Razorpay integration utility
- `/src/app/api/verify-payment/route.ts` - Payment verification API
- `/src/app/payment-success/page.tsx` - Success page
- `.env.local` - Environment configuration

### Modified Files:
- `/src/components/QuoteCalculator.tsx` - Added Razorpay payment handler
- `/src/app/quote/page.tsx` - Updated payment gateway UI

## Security Best Practices

1. ✅ **Never expose Key Secret in Frontend**
   - Only use Key ID in frontend
   - Keep Key Secret server-side only

2. ✅ **Always Verify Payments**
   - Verify signature on backend
   - Don't trust frontend payment validation alone

3. ✅ **Use HTTPS**
   - Deploy with SSL certificate
   - Never use HTTP in production

4. ✅ **Secure Environment Variables**
   - Add `.env.local` to `.gitignore`
   - Don't commit sensitive keys to version control

5. ✅ **Validate Input**
   - Validate customer details on both frontend and backend
   - Sanitize all inputs

## Testing Checklist

- [ ] Razorpay account created
- [ ] API keys added to `.env.local`
- [ ] Test payment with test card
- [ ] Verify payment signature on backend
- [ ] Check success page displays correctly
- [ ] Test with different payment methods
- [ ] Verify email notifications work
- [ ] Test error handling and failure scenarios
- [ ] Cross-browser compatibility tested
- [ ] Mobile payment tested

## Troubleshooting

### Issue: "Failed to load Razorpay"
- Check internet connection
- Verify Razorpay script loads from CDN
- Check browser console for errors

### Issue: "Payment verification failed"
- Verify Key Secret is correct in `.env.local`
- Ensure `.env.local` is in project root
- Check API route file permissions

### Issue: Modal not opening
- Verify NEXT_PUBLIC_RAZORPAY_KEY_ID is set correctly
- Check browser console for JavaScript errors
- Clear browser cache and reload

### Issue: Test card not working
- Use exact test card: 4111111111111111
- Any future expiry date and CVV work
- Make sure in Test Mode in dashboard

## Support

For issues:
1. Check [Razorpay Documentation](https://razorpay.com/docs/api/)
2. Contact Razorpay Support: support@razorpay.com
3. Review server logs in `/src/app/api/verify-payment/route.ts`

## Additional Features to Implement

Consider adding:
1. **Order Management Dashboard** - Track all payments
2. **Email Confirmations** - Auto-send receipts
3. **SMS Notifications** - Payment status via SMS
4. **Subscription Support** - For AMC (Annual Maintenance Contract)
5. **Refund Processing** - Handle refund requests
6. **Analytics** - Track payment metrics and conversion rates
7. **Invoice Generation** - Auto-generate GST invoices
8. **Webhook Integration** - Real-time payment updates

---

**Last Updated**: March 3, 2026
**Integration Status**: ✅ Complete and Ready for Testing
