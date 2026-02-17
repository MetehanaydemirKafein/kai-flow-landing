"use client";

import { Check } from "lucide-react";

const pricingPlans = [
    {
        name: "Free",
        price: "$0",
        period: "forever",
        description: "Perfect for trying out KAI Flow",
        features: [
            "Up to 3 AI agents",
            "1,000 API calls/month",
            "Basic integrations",
            "Community support",
            "Low-code workflow builder",
            "Single user",
        ],
        cta: "Get Started",
        popular: false,
    },
    {
        name: "Pro",
        price: "$29",
        period: "per month",
        description: "For professionals and small teams",
        features: [
            "Unlimited AI agents",
            "50,000 API calls/month",
            "All integrations",
            "Priority email support",
            "Advanced workflow builder",
            "Up to 5 team members",
            "RAG capabilities",
            "Custom branding",
            "Analytics dashboard",
        ],
        cta: "Start Free Trial",
        popular: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "contact us",
        description: "For large organizations",
        features: [
            "Unlimited everything",
            "Dedicated support",
            "Custom integrations",
            "SLA guarantee",
            "Advanced security",
            "Unlimited team members",
            "On-premise deployment",
            "Custom training",
            "API access",
            "White-label solution",
        ],
        cta: "Contact Sales",
        popular: false,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-20 px-4 bg-slate-950">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Choose the plan that's right for you. All plans include 14-day
                            free trial.
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Choose the plan that's right for you. All plans include 14-day
                            free trial.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={plan.name}
                            className={`relative rounded-2xl p-8 ${plan.popular
                                    ? "bg-gradient-to-b from-blue-600/20 to-purple-600/20 border-2 border-blue-500/50 shadow-2xl shadow-blue-500/20 scale-105"
                                    : "bg-white/5 border border-white/10"
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    {plan.name}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-bold text-white">
                                        {plan.price}
                                    </span>
                                    <span className="text-gray-400">/{plan.period}</span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${plan.popular
                                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg"
                                        : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                                    }`}
                            >
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-400 mb-4">
                        All plans include access to our API and documentation
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                        <span className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-400" />
                            No credit card required
                        </span>
                        <span className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-400" />
                            Cancel anytime
                        </span>
                        <span className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-400" />
                            24/7 support
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
