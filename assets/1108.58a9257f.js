const a=[-.19,.07,.02,-.15,.04,.13,.19,.05,.09,0,.03,.07,.06,-.13,.01,-.05,.01,.13,.04,0,0,.07,.05,-.05,.13,.09,.01,.08,.01,-.01,.02,.05,.06,-.16,.14,.1,-.02,-.02,.12,-.12,-.19,0,.05,-.19,.11,-.01,.05,.1,-.01,.13,.11,-.13,-.13,.08,.07,.01,.04,-.13,.01,.04,.04,.02,.09,-.18,-.08,-.06,.11,-.02,-.09,.18,-.08,-.12,.12,.09,-.03,.02,-.03,.03,.17,-.05,0,.05,.28,.02,.01,.08,.05,.19,.04,.07,.06,-.01,.22,-.08,.05,.14,.01,-.06,.04,.04,-.06,.11,.09,-.16,.12,.2,-.13,-.03,.08,.08,-.11,.09,.14,-.13,.15,.11,.09,-.02,.05,.11,.02,.07,.03,.09,-.05,.16,-.01,.08,-.24,.03,.14,.04,.23,.09,.02,-.03,.01,-.02,-.01,-.13,.02,-.16,.06,.02,-.16,.21,-.04,.05,.11,-.04,.1,.09,-.04,-.05,.1,.09,-.13,-.08,.07,.01,.09,.18,.06,.09,.2,.01,-.04,-.05,.05,.06,-.13,-.05,.12,-.13,.15,.05,.17,-.04,.04,0,.02,.02,.01,-.06,.07,.18,-.11,.03,.12,0,-.06,.17,.21,.12,.12,.1,.17,.21,-.07,.03,-.01,.08,.04,-.13,-.02,.14,-.05,.19,.11,.02,.05,0,.02,.02,-.14,.07,.08,.12,.04,-.13,.11,.03,.16,.07,.16,.03,.15,.02,.02,0,.1,.06,-.02,0,.1,-.17,-.06,-.08,-.02,.31,.02,.02,.11,0,.13,.07,.08,-.05,.01,-.22,.23,.01,.11,.27,.06,.01,-.03,.01,.15,-.02,-.01,.02,.14,.04,.06,.11,.04,.05,-.08,-.15,.04,-.06,.06,.05,.13,.04,-.05,.1,.09,.01,.06,-.1,.03,-.04,.19,.16,.03,-.02,.18,.15,.19,.06,.13,.13,.25,.07,-.12,-.16,0,.09,-.01,.05,.04,.14,.05,.11,.26,.06,.14,-.05,-.03,-.02,.24,-.16,.16,.09,.17,.11,.06,.01,.05,.08,.09,.15,.03,.09,.05,-.19,.08,.16,.02,.04,.03,.18,-.02,0,-.12,.04,.11,.23,.12,.08,.07,.1,.05,-.01,-.12,.07,.07,0,.13,-.11,-.05,.16,-.27,.05,.06,.11,.13,.01,-.07,0,.12,.05,.03,-.08,-.1,-.01,.05,.03,.03,-.1,.03,.19,.01,.13,-.01,.08,-.02,.05,.03,.21,.3,-.11,.19,.12,-.06,.15,.15,.06,.11,.08,-.05,.05,.1,.04,.07,-.02,-.14,-.02,.01,.01,.08,.03,.07,-.02,.05,.11,.2,.12,.06,.11,-.03,.11,.07,-.05,.09,.11,.04,.12,-.1,.12,.03,.11,.16,.01,.02,.16,.18,-.03,.16,.23,.09,-.05,.09,-.03,-.03,.13,.07,.13,.1,.01,.01,-.14,-.01,.09,-.01,.09,-.11,-.09,.11,.15,-.08,.09,.04,0,.07,-.01,.05,.14,.03,.1,-.15,-.03,.01,.2,.06,.08,-.21,.09,-.03,-.02,-.03,-.16,.08,.14,.08,.12,.1,-.06,.17,.03,.11,.2,-.09,.01,.28,.16,.03,.02,.05,.15,.19,.07,.02,.08,.17,.17,.11,.1,.14,-.1,.09,-.07,-.01,.03,.02,.18,.07,.04,.1,.07,-.02,.13,.03,-.04,-.07,.18,-.01,.11,.04,.06,.2,.16,.07,-.16,.1,-.08,-.14,.02,.17,.15,-.33,-.03,-.07,-.01,.05,.24,.16,.16,-.07,.03,.06,.02,.07,-.07,-.13,.01,.05,-.04,-.15,.04,.05,0,0,.07,.01,.1,-.08,-.17,.1,.08,-.05,.14,.14,.08,-.15,.11,.02,.1,.08,.05,.12,-.05,.09,-.02,.12,.19,.02,.04,.03,-.11,.14,.06,.22,.03,.06,.04,.1,-.01,.17,.04,-.01,-.04,.15,-.14,.17,.01,-.01,.25,.14,-.03,.03,.04,.04,-.01,.01,.14,-.08,-.06,.11,-.04,.13,.16,.02,-.01,.05,.05,-.11,-.12,.2,.14,.17,.06,.21,-.07,-.17,.07,.15,.01,.02,-.04,.22,-.02,.29,.14,.13,-.04,-.06,.17,-.02,.01,.05,.08,.02,.1,.14,.09,.34,.18,-.26,-.17,.12,.07,.16,.13,.01,-.05,.04,.25,.03,.1,.07,-.02,-.01,.04,.23,.12,.1,-.03,.09,.03,-.04,-.01,.1,.02,.1,.03,-.12,-.13,0,.18,-.11,0,.12,0,-.08,.02,.13,.23,-.27,.13,.16,.21,-.17,.15,-.03,-.09,.15,-.03,.07,.17,.13,.1,.1,-.07,-.12,.14,-.15,.03,.16,-.01,-.01,.24,.11,-.12,.09,.19,.03,-.07,.17,.11,-.03,.1,0,.13,.14,.03,-.17,.14,-.19,.09,.06,.21,.03,.04,-.02,-.12,.09,-.01,.09,.17,.15,-.01,.11,-.16,.06,.02,.08,.05,-.15,.24,-.04,-.04,.07,.18,.1,-.03,.08,.12,.11,.01,.15,.2,.05,.07,.07,.08,.04,-.06,.11,.08,.1,-.14,.1,-.11,.28,.08,.04,0,-.01,.16,.01,.08,.07,.14,.03,.01,.09,.08,.03,.07,.12,-.03,.08,-.08,.08,-.01,-.12,.17,.08,.05,.06,.13,-.03,.13,.14,-.03,-.08,.15,.1,-.21,.06,.06,.07,.02,-.09,-.1,.13,.05,-.14,-.08,.17,.15,-.02,.05,.09,-.06,.08,-.23,.12,.05,.09,.02,.2,.09,.02,.21,-.05,.06,.13,.06,.21,.06,-.13,.11,-.02,.05,.13,-.28,.19,0,.02,.16,-.01,.15,-.02,.03,.2,.13,.1,-.02,.15,-.01,.15,.04,.08,0,-.02,.06,.03,.16,.09,.1,.16,-.03,.04,.15,-.05,-.1,.04,.08,.3,.02,.07,.23,.15,.12,.06,.09,.02,.13,.08,.14,.02,0,-.02,.08,.03,.1,.18,.02,.06,.02,-.16,.12,-.16,.1,-.11,.04,-.15,-.02,.01,-.05,-.03,.2,0,.01,.08,.06,.14,.06,-.08,-.08,.08,.02,-.06,-.01,.12,.08,.17,0,.08,.04,.01,-.09,.12,.07,0,.07,-.07,.23,.27,.05,.06,.13,.08,.09,.25,-.14,.13,-.01,.13,.3,.09,.08,.08,.1,.03,.31,.07,.09,.01,.14,.14,.08,.02,.2,.08,.11,.04,.09,-.03,-.06,.11,.05,.21,.24,.09,.13,.09,.09,.09,.11,.23,.18,-.1,-.04,-.13,.12,.13,.1,.15,.05,.12,.1,-.01,-.05,-.08,-.03,.05,.19,.04,-.12,-.19,-.03,-.18,.07,-.01,-.05,-.23,.14,.22,-.02,.2,.1,.12,-.12,.16,-.01,.03,.14,-.22,.1,-.09,.01,.08,.11,-.18,-.01,.07,.13,.11,.2,.13,.12,.06,.13,.22,.02,-.02,.01,.04,-.02,-.05,.11,.12,-.28,-.11,.14,-.01,.07,.17,.2,.2,-.05,-.07,.12,.12,.11,-.07,-.11,.07,.09,-.04,.15,-.05,.06,-.03,-.13,.09,-.08,.06,-.02,.23,.02,-.01,.08,-.03,-.01,-.13,.14,-.07,.02,-.02,0,.13,-.01,.04,.06,-.05,-.15,.07,.14,.02,.1,.15,.13,.06,.08,.17,.11,-.13,-.04,.02,-.01,.06,1,.04,.23,.05,.15,.02,.12,-.03,.06,-.06,.08,.05,.12,.03,-.02,-.13,-.19,-.05,-.21,-.16,.13,0,-.17,.12,.12,.02,.05,.17,.01,.13,.11,-.07,.13,.07,.06,.08,.13,.08,-.16,.07,-.02,-.05,-.14,-.17,.04,-.08,.19,.18,.08,-.16,.1,.02,-.17,.13,.2,-.12,.06,.14,.25,.14,.02,.09,-.03,.09,-.03,.02,.11,.22,-.07,.02,.01,.02,.1,.09,.03,.14,-.02,0,-.04,.01,.01,-.14,.02,0,.13,.25,.29,.12,-.02,-.09,.1,.07,.01,.04,.17,-.12,.13,.18,.15,.25,.06,-.03,.13,.08,-.09,.05,-.06,.06,.18,-.12,.03,-.04,.03,.07,-.05,.12,-.16,-.16,-.04,.12,-.06,.1,-.01,-.1,-.02,.11,.01,.01,.12,.17,-.11,-.09,-.16,.01,.11,.01,0,-.15,-.1,-.14,-.06,.05,-.08,.18,-.04,-.1,-.03,-.01,-.07,.04,.12,.09,.12,-.1,.06,-.11,.02,.08,.14,-.02,-.02,.14,-.12,.11,.11,.17,.01,.06,.06,.07,-.06,0,.08,.17,.14,.12,.13,.13,-.25,.02,.1,-.01,-.12,.2,0,.03,.08,-.09,.1,.18,.12,.05,.15,.1,.15,-.25,.12,-.08,.03,.01,.08,.02,.01,.22,-.01,0,.09,.09,.12,.04,.11,0,-.15,.04,.23,.05,-.05,.2,.23,-.01,.01,.05,-.06,.18,.05,.09,-.09,-.03,-.04,.08,-.13,.11,.03,.15,.11,-.04,.04,.28,.02,.04,.13,-.16,-.1,.07,.27,.19,.2,.16,.16,.04,.17,.09,.18,.2,.21,.15,.23,-.09,.17,.14,.16,.19,.16,.17,.24,.16,.16,.13,.16,.12,.04,-.04,.15,.31,.21,.24,.13,.23,.19,.14,.27,.12,.22,0,.24,.05,.18,.01,.17,.06,-.2,.04,-.18,.03,.09,-.15,-.02,.18,.01,-.04,.07,.01,-.12,.06,-.05,-.1,.27,.03,0,.02,-.04,.11,.02,.08,0,.11,.07,-.11,.2,-.02,.02,.21,.09,.11,.06,.13,0,.01,.04,-.13,-.13,.08,.36,-.05,.02,.04,.03,-.03,.16,-.13,-.04,-.2,.21,0,-.11,.04,.11,0,.07,.06,.02,.09,-.16,.05,.1,.18,-.08,.07,.19,-.12,-.06,.13,.2,.1,-.14,.07,.09,.16,.02,.17,.23,.17,-.02,.3,.23,0,.1,.16,.28,.17,.16,-.02,.05,.1,.13,.21,.07,-.07,-.06,.09,.05,.2,.13,-.09,.04,-.01,.1,-.01,.22,-.05,.02,.02,.02,.12,.08,-.07,.22,.16,.15,.06,-.1,.11,.11,-.07,-.01,.21,.01,.1,.12,.04,-.2,0,-.01,.14,.12,.14,.15,.16,.05,0,.06,.15,.07,.06,.07,.06,.16,.09,.1,.03,-.1,.21,.07,.07,.08,.13,.05,-.17,-.03,.08,-.12,0,-.03,.02,-.21,.06,-.04,.09,.16,.1,.01,.01,.07,.01,.07,.14,.14,-.13,.09,.22,.04,.19,0,0,-.06,.15,.11,.16,.17,.18,-.16,.02,.07,-.01,.03,-.11,.22,-.07,.03,.05,.17,.1,.02,.06,.15,.05,.25,.1,-.03,.17,.09,.01,.19,.2,-.05,-.02,-.15,.1,.22,0,.12,.26,.12,-.02,.15,.08,.12,-.11,.18,.11,-.1,.15,-.04,.03,-.08,.16,-.15,.21,0,.11,.13,.16,.03,.15,.03,.15,-.16,.06,.01,.15,-.18,-.22,.05,.09,.09,.01,.07,.12,.06,.08,.17,.09,.15,-.14,.07,.01,.04,-.02,-.06,.09,.2,.2,.15,.07,.08,.05,-.01,.13,.08,.05,.04,-.01,.25,.07,.04,-.04,.12,.01,.09,0,-.17,.16,.19,-.03,.09,.09,-.07,.1,.02,.06,-.01,.08,.07,-.01,-.04,.19,.09,.01,.09,-.08,.03,.06,.08,-.08,0,.01,0,.11,.03,-.01,-.06,-.07,.02,.06,-.1,.13,.01,.13,.12,.15,.04,.13,.15,.05,.28,.11,.11,.05,.18,0,.16,.11,.09,-.17,.23,-.21,.29,.09,-.05,.02,-.08,.01,-.06,-.04,.15,.03,.12,-.07,-.13,.05,.05,.01,-.21,.07,-.04,.12,.03,.08,-.07,0,.05,.15,.14,-.03,.13,.01,-.17,.04,.08,-.07,-.05,.14,.14,.03,.07,.06,-.14,.21,.08,.22,.14,-.1,-.14,.15,.05,.19,.08,.19,.09,.05,.13,.11,.01,0,.08,-.03,.12,-.03,.22,.13,-.01,.16,.03,.07,0,.01,0,.14,.19,.13,-.03,-.17,.08,.11,-.23,-.06,.18,0,.14,.14,.07,.11,.11,.01,-.03,-.06,.22,-.08,-.17,-.19,.03,-.15,.18,.21,.09,-.02,.02,.23,-.13,.02,.02,-.05,.02,.04,.02,.07,.22,.04,-.01,-.06,.16,-.11,-.06,-.14,.13,0,-.05,.13,.09,.29,.31,-.02,.09,.1,.03,.01,.22,.03,.14,.26,.29,.07,-.03,-.23,0,.08,-.07,.1,.18,.13,.18,-.14,-.02,-.04,.11,-.12,-.13,.15,0,.08,.01,.01,.16,.04,-.05,-.01,.11,.09,.02,-.04,-.01,.3,.08,.11,.18,.22,.01,.04,-.27,.09,.02,.17,.12,-.02,.12,.06,.14,-.04,-.08,.01,.1,-.14,-.02,.03,.01,-.03,.11,.15,.23,-.21,-.05,0,.22,-.02,.05,.05,.05,-.03,-.03,.06,.14,.07,.24,-.13,-.16,.04,.16,.1,-.22,-.18,-.01,.01,.04,-.01,.05,.12,.12,0,-.13,.17,-.15,.35,-.18,-.01,-.15,-.08,.03,.06,-.09,.04,.08,-.01,.16,0,.02,.27,.24,.23,.05,.05,-.08,-.12,.02,.15,.01,-.13,.07,.01,.05,.15,.16,.15,-.12,.09,.07,.04,-.14,.11,.21,.06,.01,.14,-.03,.07,.03,.22,.02,0,-.04,.01,-.01,-.18,.07,-.09,0,.02,.06,.04,.01,.04,.09,.12,.14,-.05,.07,-.11,.02,.02,-.05,.09,.17,.03,.1,-.04,-.03,.05,-.07,.06,-.13,.11,.16,.12,.08,.02,-.12,-.08,.12,-.12,.16,-.03,-.03,.05,-.12,.07,.14];export{a as rvalData};
