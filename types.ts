import Stripe from "stripe";

export interface UserDetails {
    id:string;
    first_name: string;
    last_name:string;
    full_name?:string;
    avatar_url?:string;
    billing_adress?:Stripe.Address;
    payment_method?:Stripe.PaymentMethod[Stripe.PaymentMethod.Type];
};

export interface Price {
    id:string;
    product_id?:string;
    active?:boolean;
    description?:string;
    unit_amount?:number;
    currency?:string;
    type?:Stripe.Price.Type;
    

}

export interface Subscription {
    id:string;
    iser_id:string;
    status?:Stripe.Subscription.Status;
    metadata?:Stripe.Metadata;
    price_id?:string;
    quantity?:string;
    cancel_at_perriod_end?:boolean;
    created:string;
    current_period_start:string;
    current_period_end:string;
    ended_at?:string;
    cancel_at?:string;
    trial_start?:string;
    trial_end?:string;
    prices?:Price;
}