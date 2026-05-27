// @/sections/products/slug/trust-badges.tsx

const badges = [
  { icon: "🚚", label: "Fast Delivery" },
  { icon: "↩️", label: "Easy Returns" },
  { icon: "🔒", label: "Secure Payment" },
];

export const TrustBadges = () => {
  return (
    <div className="grid grid-cols-3 gap-3 pt-2">
      {badges.map((item) => (
        <div
          key={item.label}
          className="flex flex-col items-center gap-1.5 rounded-xl bg-muted py-3 px-2 text-center"
        >
          <span className="text-xl">{item.icon}</span>
          <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};
