const a=[.14,.14,-.1,.02,-.02,.09,.15,.12,-.07,-.01,-.1,.18,-.04,0,-.21,-.06,.06,-.01,.06,.17,-.32,-.2,-.01,-.3,-.17,-.04,-.15,.19,.09,-.22,.05,-.22,.02,.21,-.08,-.06,-.12,-.29,.15,.08,-.07,-.02,.09,-.09,-.04,-.23,-.16,-.04,-.17,.18,-.1,.18,-.12,-.16,.27,-.21,-.22,.24,-.05,.01,.17,.09,-.04,.15,.02,-.17,-.01,-.28,.12,0,-.14,.05,.11,-.04,-.03,.04,-.06,.23,-.27,-.16,-.04,.06,-.08,.01,.15,-.19,-.08,-.09,.11,-.34,.17,-.15,.03,.3,.06,.07,-.02,.03,.21,.21,.03,-.06,.21,.02,.16,.1,.06,-.16,-.06,.08,.01,.14,.13,.16,-.02,.01,-.17,-.15,-.16,-.1,-.22,-.09,.07,.12,.12,.04,-.02,-.04,-.15,-.12,.1,-.05,-.05,.21,-.19,.02,.26,.03,-.19,.14,.09,.13,.13,-.1,.15,.07,-.05,.17,-.06,-.24,-.04,-.07,-.02,.11,.11,.14,-.02,.06,.03,-.25,.27,.1,-.18,.2,-.04,.23,.09,-.2,.03,-.03,.21,-.2,.13,.11,.17,-.22,-.07,-.23,.22,0,-.23,.17,.27,-.03,.18,-.02,.12,.16,.16,.02,-.04,.05,-.07,.04,.14,-.11,.14,-.1,.1,.01,-.24,-.08,-.08,-.12,.07,.19,.06,.14,.16,-.06,.06,-.2,.13,-.17,.2,.21,-.1,.04,-.18,-.1,0,.2,.02,-.07,.05,-.08,.14,-.18,.24,.31,.08,.09,-.16,-.11,-.18,.15,-.22,-.28,.15,.07,.26,-.27,.11,.33,-.02,-.08,-.11,.07,-.01,-.08,.15,.05,.31,.07,.04,-.05,.03,-.12,.16,-.06,-.08,.18,-.17,.05,.21,.16,.03,-.03,.05,.07,.06,.08,-.11,-.04,-.09,.25,-.23,.21,-.1,-.16,.28,-.17,-.28,.17,.18,-.05,-.12,-.11,.2,-.13,.01,.24,.01,-.04,-.05,.06,-.15,.07,-.16,-.07,.09,-.04,-.23,-.01,.18,.01,-.22,.12,.16,-.22,.06,-.14,.04,.11,.01,-.05,0,.19,-.02,-.05,.04,.13,-.13,-.01,.12,.12,.02,0,-.14,.14,.09,.06,.14,.3,-.06,.01,-.19,.04,-.06,-.19,.14,.07,.16,-.12,-.15,-.08,-.12,.24,.09,.22,.04,.32,.11,.17,-.07,-.3,.21,-.08,-.02,-.01,-.09,-.23,.17,-.13,.01,.19,.26,-.14,.24,.01,-.16,-.07,-.09,-.01,.25,.21,.06,-.03,.1,.13,.04,.09,.09,.01,.19,.18,-.06,.01,.02,.02,-.06,-.07,.04,-.07,-.05,-.06,-.11,-.2,0,.15,.15,.17,-.03,.01,.05,-.18,-.21,-.02,.04,-.04,-.07,-.02,.15,-.09,.37,.19,.04,-.02,.29,-.18,.12,-.21,-.03,-.1,-.08,-.08,-.07,.08,.1,.32,.05,.03,-.13,.03,.15,-.09,-.19,.01,-.03,.06,.09,.03,.1,.05,.06,.05,-.01,.02,-.04,0,-.18,.13,.04,.1,-.03,-.07,-.22,-.02,.19,-.09,-.07,.06,-.01,.26,.05,-.12,.17,.05,.05,-.15,-.1,-.06,.02,.01,.17,-.08,-.1,-.16,-.08,-.11,.11,-.18,.04,-.04,.07,.12,.09,.22,.1,-.07,-.01,.19,-.22,.25,.05,-.05,.13,-.07,-.14,.26,.18,.07,-.04,-.04,.03,.15,.22,-.13,.04,.21,.05,.08,.07,.18,.09,-.11,.19,.07,.26,.01,.05,-.04,0,-.04,.19,.19,.08,.14,-.19,0,.13,.13,.05,.17,.22,.22,.03,-.02,.14,.14,-.45,.15,-.02,-.2,-.01,.57,.24,-.21,.04,.14,-.18,-.08,-.01,-.02,.16,-.09,.03,.26,-.15,.13,-.07,-.14,.06,0,.11,.08,.15,.02,.26,-.03,.06,-.1,-.12,.16,0,-.05,-.01,-.06,.27,.16,-.04,.05,.13,.13,.1,-.25,-.05,.15,.01,-.14,-.09,-.17,-.18,.01,-.01,.13,-.15,-.1,.14,0,-.09,-.04,-.04,.16,.07,-.23,.28,-.11,.02,.18,0,-.09,.03,.06,.06,-.05,-.04,-.07,-.16,.11,.17,.24,.07,.1,.12,.12,.12,.06,.03,-.08,.05,-.11,.06,.23,.01,.09,-.05,.27,.02,-.17,0,.02,-.11,.19,-.14,.03,.15,.07,-.09,.08,.1,.09,.19,-.05,-.09,.11,-.28,-.09,.01,-.07,-.01,.08,-.01,.15,-.27,.11,.19,.12,-.04,0,-.11,.18,.06,-.24,.25,.26,.08,-.05,.13,-.15,-.1,.13,.17,.03,.16,.13,.03,-.01,-.03,-.05,-.07,.31,.12,-.04,.2,-.15,.02,-.03,.11,.05,.04,0,.05,.05,.03,.16,.15,-.03,.01,-.22,-.08,.3,.22,-.06,.36,-.23,-.1,.17,-.03,-.09,.01,-.07,-.17,-.09,-.04,-.05,.06,-.16,.08,-.05,.03,.12,-.01,-.01,.04,.24,-.12,-.15,.12,.08,-.19,-.03,-.19,-.19,-.04,-.14,.05,-.12,.17,.14,.09,-.19,.12,.28,-.1,-.03,-.15,-.17,.05,-.12,.05,-.22,-.1,-.11,-.19,-.19,.02,.07,-.08,.12,.25,.22,-.01,.14,.15,.06,.06,.03,.03,.15,-.06,.02,.09,.06,-.07,.08,.22,.26,-.1,-.15,-.13,.22,.04,-.26,-.02,-.22,-.09,.11,.06,.13,-.12,.07,-.04,-.01,-.08,-.04,-.13,.07,.17,.06,.14,.15,.05,-.17,.06,.19,0,-.19,.27,.02,.1,.09,0,-.19,-.15,-.07,-.04,.02,.41,-.19,.05,-.08,.18,.14,.06,.03,-.32,.09,.08,-.17,.15,0,-.06,.25,-.22,-.08,-.09,-.12,.07,-.17,.03,-.19,.1,-.12,-.02,.07,.16,.18,.01,-.13,.05,-.04,-.17,0,.19,.25,.02,.11,.29,.08,.15,-.02,.06,.18,.17,.2,.08,.13,-.05,.2,-.12,-.11,.16,0,-.14,.16,.2,-.17,.05,-.01,-.02,-.07,-.1,.15,.01,.06,.13,.13,.01,-.13,-.08,.03,.27,-.15,.18,.02,.14,.26,-.02,.27,.16,-.22,-.15,.14,.05,.17,.05,.25,.17,-.09,.19,-.13,.1,-.23,.01,-.02,.18,-.01,0,.2,.05,0,-.06,.01,.1,-.04,.14,-.02,.07,-.02,0,-.05,.2,-.02,.12,.2,0,-.1,.06,-.03,.07,-.21,.1,-.15,.23,-.05,.03,.28,0,-.08,-.08,-.41,0,.03,-.02,.02,.15,.08,.05,-.13,-.15,.13,-.33,.04,.05,-.23,-.12,.18,.17,-.11,-.05,.16,-.1,.03,-.06,.05,.27,.07,.1,.03,.06,-.01,.19,-.11,-.04,.22,-.1,-.07,-.02,-.15,.47,.34,.02,.23,.13,-.08,.01,.49,.28,.01,.11,.12,.15,-.09,0,.16,-.11,.25,.19,.04,.01,.17,.14,.3,-.15,.1,.02,-.01,.03,.09,.24,-.03,-.03,.19,-.01,.16,-.15,-.01,-.02,-.23,.04,-.04,-.2,.45,.01,.17,.01,-.07,-.03,0,.07,-.14,.19,-.04,.02,-.47,-.19,.23,.17,-.09,-.16,.02,-.06,-.16,.2,.14,-.17,-.32,-.04,.22,.27,.25,.13,-.05,-.1,.03,-.19,.2,.09,-.07,.07,-.2,.01,-.04,.2,-.05,.16,.04,-.19,-.04,-.07,.17,-.04,-.09,-.08,.02,.01,.07,-.04,0,.02,-.19,.35,-.08,.01,.03,-.02,.03,.03,-.01,-.08,.16,.24,.03,-.02,-.01,.52,-.13,.15,-.01,.04,-.22,.08,-.14,-.1,-.01,.01,-.27,.21,-.11,.27,.06,-.04,-.01,.02,-.01,-.05,.11,.13,-.03,-.08,-.01,-.05,-.02,.05,.15,-.14,.01,-.05,-.13,-.09,-.02,.29,.01,-.22,.07,.13,.12,.22,.13,-.17,-.11,.18,.04,-.07,.11,-.02,.01,-.03,.15,.08,.07,-.12,.1,.06,-.17,-.17,.19,.05,-.01,.19,-.05,-.04,.13,0,.11,-.05,-.15,-.04,-.04,.14,-.1,-.01,-.1,-.04,0,.07,-.08,.01,.12,-.03,.07,.03,-.07,.2,.04,.06,-.02,.02,.1,-.05,.17,-.14,.27,.11,.18,-.04,.05,-.03,.22,.2,.08,-.17,.15,.16,.17,.02,-.16,.16,.18,-.18,.03,-.03,-.07,-.06,-.16,-.07,-.01,.1,.16,-.1,.05,0,.09,.15,.17,.05,0,.06,.11,-.04,-.15,.26,.19,.12,-.03,-.16,.06,.11,-.03,-.02,-.01,-.01,.05,-.13,.02,-.19,-.23,.01,.11,-.16,.03,-.02,-.19,-.05,-.04,-.02,.02,.2,-.02,.2,.11,-.2,.12,-.13,.25,-.03,-.1,.02,.08,0,.01,.05,.14,.16,.08,-.17,-.08,-.15,.06,-.09,-.01,.03,-.18,.06,-.32,.25,.21,-.08,-.12,.08,.04,.05,.25,.11,.18,.24,-.21,.01,.14,.15,.02,-.06,.18,.14,.09,-.02,.04,0,-.13,-.05,.03,.3,.11,.17,.15,.1,-.06,-.19,.1,-.16,-.09,-.01,-.19,-.22,.01,.03,.11,-.02,.29,.18,0,-.08,-.07,.01,.03,.16,.17,.21,.13,-.04,0,-.1,-.13,0,-.03,.06,.13,.04,-.07,-.07,-.17,-.03,-.21,.07,-.21,-.07,.11,-.07,-.09,-.11,-.09,-.07,.11,.03,-.22,-.19,-.06,.15,-.02,.17,-.07,.21,.16,-.1,-.16,.27,.12,-.04,-.02,.23,.12,-.05,-.05,-.1,-.31,.12,.24,-.1,.62,.08,.04,.15,.15,1,-.17,-.06,-.02,.13,.12,-.28,.16,-.02,.19,-.13,.08,-.18,.1,.15,-.1,-.1,.29,-.08,.08,.02,-.08,.54,0,.15,.04,.14,-.3,.16,-.02,.07,.07,-.04,.03,-.08,-.15,.09,.14,-.01,-.13,-.06,-.06,.07,.22,-.15,-.11,0,.17,-.06,-.07,.13,-.06,.14,.37,-.15,-.05,.22,-.08,-.05,-.23,.01,0,.09,-.07,.2,.09,.09,-.18,0,.09,.1,-.08,.23,-.22,.12,.21,.15,-.09,.1,.15,.16,.15,.2,0,-.02,-.21,.02,-.03,-.04,.24,-.03,.04,-.07,0,.14,-.02,-.27,.02,-.03,.12,-.02,-.05,.07,-.05,.09,-.31,.19,.14,.04,.01,-.06,.15,.07,.08,.1,-.11,.17,-.11,.07,-.12,-.02,-.03,.15,0,.14,-.02,.05,.28,-.07,.04,.12,-.08,.14,.22,.25,-.07,.01,-.1,.02,-.03,.13,.14,.01,-.14,.04,.11,-.07,-.03,-.05,.15,.12,.23,.03,.11,-.28,.01,.03,-.06,-.13,.07,.18,-.12,.1,.02,.1,-.3,.21,-.06,-.05,.19,-.06,.1,.1,-.01,-.06,-.07,0,-.12,-.18,.12,-.02,.24,-.07,.16,.05,-.14,.06,-.05,.08,.01,-.16,-.01,.06,.09,-.2,-.05,.13,-.02,.08,-.07,-.06,-.03,.25,0,.04,0,.03,-.07,-.02,.18,-.11,.11,.08,.15,-.04,.08,-.15,-.24,-.05,-.01,.09,.05,.13,-.04,-.06,.06,-.07,.01,.15,.04,-.03,.18,-.05,-.1,.04,.07,.01,.07,.19,-.04,.19,-.14,.05,.06,.02,.14,-.08,-.02,-.01,.08,.09,.23,-.06,.11,.06,.08,.11,.11,-.03,.12,.01,-.1,.02,-.14,-.06,.05,-.19,.06,-.01,.01,-.16,.14,.13,-.13,.13,-.01,.08,.16,.1,.13,.03,.1,-.08,-.25,.23,.1,-.3,-.19,-.05,-.02,-.05,-.03,-.08,.28,-.03,.1,-.15,-.12,.12,.15,.11,-.01,-.08,-.07,.02,-.2,.04,-.02,-.02,-.26,.07,-.18,-.14,.15,-.18,.11,.12,-.01,.25,-.08,.16,-.11,.07,.03,.1,.01,.17,.15,.03,-.11,-.06,-.02,.02,.22,.05,.05,-.13,.01,-.11,-.07,-.21,.11,.08,-.15,-.05,-.05,.07,-.12,-.07,.17,.01,0,-.05,.02,.06,.04,.1,-.09,-.06,.21,-.05,-.12,-.19,-.02,-.04,0,-.02,0,.08,-.16,-.1,-.15,.05,.09,.17,.24,-.08,-.01,-.12,.18,.12,.09,-.18,-.06,.12,-.02,.21,-.19,-.1,.09,-.08,-.13,.18,-.07,-.11,-.09,.02,-.02,-.08,-.07,-.02,.1,.02,-.11,-.08,-.09,.2,.04,.18,-.07,-.14,.05,.12,.13,.06,.23,-.09,-.16,.11,0,.05,.14,.13,-.27,.34,-.08,-.07,0,.1,.07,-.15,.18,-.08,0,-.11,.11,-.04,-.17,.16,-.07,.12,.09,.07,-.07,.2,-.15,-.23,-.08,-.13,.24,.06,.14,-.1,-.06,-.08,-.04,-.02,-.01,-.06,.03,.1,.19,.04,-.03,.02,.21,.08,.12,-.13,.64,0,-.07,.1,.05,.09,-.09,.18,.11,.16,.15,.11,.02,0,-.08,.03,-.01,.09,-.02,.15,.05,0,-.03,-.11,.24,.03,.09,-.1,-.08,-.16,-.1,-.07,.02,.23,0,-.1,-.22,.01,.23,-.04,.01,.15,0,-.02,-.07,.02,-.14,.18,-.04,.31,-.33,-.36,.13,.12,-.13,.11,.01,-.11,-.03,-.05,-.11,-.07,-.13,.04,-.04,.01,.01,.04,.06,.01,.15,-.07,.05,.24,.04,-.09,.05,.11,-.14,-.21,-.1,-.05,0,.03,.13,-.11,0,.03,.03,.02,.01,-.03,-.03,-.05,.2,-.02,.15,-.14,-.32,-.11,-.09,-.09,-.02,-.08,.14,-.11,-.19,.15,-.01,-.16,-.04,.12,-.06,.16,.06,-.06,-.02,-.04,.06,-.01,.03,-.01,.14,0,.05,.04,.2,-.05,-.08,-.24,-.01,-.02,-.17,-.03,-.04,-.2,.08,.12,-.1,-.02,-.1,0,-.09,.08,.1,-.32,.02,.23,-.07,.16,-.03,-.05,-.13,.06,.15,-.07,-.02,-.09,-.31,-.17,.2,-.05,.27,.08,.05,.1,.07,-.24,-.16,-.08,-.11,.03,-.08,-.14,.25,.02,.15,-.17,.08];export{a as rvalData};
