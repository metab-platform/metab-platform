const a=[-.12,.01,.2,.08,.18,-.04,.1,-.13,.02,-.07,.1,0,.05,-.03,.09,-.11,.22,-.02,-.01,-.17,.06,-.15,-.11,.15,.16,.11,-.13,-.1,-.11,-.03,.09,-.08,.05,-.03,.14,-.1,.16,.19,.14,.01,-.1,.14,-.07,-.04,-.03,.12,.01,-.02,-.06,-.04,.1,-.12,-.03,.25,0,.11,-.04,-.03,-.04,.2,.11,.13,.17,-.02,-.01,-.02,.17,.17,.06,-.04,-.1,0,.12,.15,.21,-.05,-.05,.08,.26,0,-.18,.22,-.17,.15,.03,-.15,.16,.03,-.08,.2,.03,.05,0,-.18,.19,-.01,-.1,-.08,.01,.07,-.06,.22,.16,-.09,.13,-.03,-.13,.01,.08,.16,.1,.04,.31,-.21,-.04,.16,.28,-.13,-.13,.16,-.07,-.01,-.07,-.15,-.36,-.04,.18,-.02,-.08,.16,-.16,-.2,-.26,.01,.02,-.13,-.06,.07,-.06,-.06,.13,-.1,.08,.13,-.13,-.09,-.07,.04,.2,.1,.23,.05,.09,-.04,-.16,-.04,-.27,-.03,-.01,.12,-.21,.1,.03,.13,-.03,.07,.17,-.08,-.11,.19,-.06,-.05,-.09,-.12,-.08,-.06,-.12,-.04,.02,.18,.2,.21,.09,.08,.09,-.03,-.08,-.14,-.09,-.02,.08,.03,.2,.1,.16,.17,.19,.11,-.03,-.18,.17,.16,.16,.02,-.14,.04,-.33,-.02,.02,.03,-.13,.18,0,.2,-.04,.05,.01,-.09,-.06,-.14,.12,.1,.29,.28,.12,.16,-.1,-.08,.04,-.26,.08,-.18,.18,.19,.01,-.05,.19,.03,.13,.25,.05,.2,-.1,-.11,-.05,0,.52,-.06,-.17,.07,-.08,-.29,.03,.04,.12,-.15,-.09,.26,-.01,.1,-.14,.03,.22,.14,.02,.15,-.03,.12,.1,-.01,.06,.06,.18,.15,.22,-.09,-.03,.05,.19,-.09,-.08,.01,.26,-.04,.01,.01,-.1,.16,-.01,-.12,-.14,-.05,.06,-.03,-.06,-.04,.02,-.07,.03,.07,.05,.11,-.05,-.04,.07,.05,-.06,.2,.06,.02,.17,-.08,-.01,-.16,.01,.08,.05,.02,.16,-.03,.13,.06,.08,.2,-.1,.03,.03,-.06,-.28,.01,-.16,-.03,-.02,.04,-.19,-.03,-.02,.03,-.19,-.15,.07,-.01,.04,.02,.2,.14,-.11,.04,-.06,-.03,.12,-.17,-.16,.03,-.1,.2,.12,.16,.23,.18,.01,-.07,.04,-.05,-.13,-.05,-.13,.16,.09,.15,-.14,-.16,-.04,-.08,.12,.01,-.08,.07,.09,-.05,.06,.01,.16,.01,.07,0,.11,.02,.07,.1,.17,0,.04,-.16,-.15,.1,-.15,.02,-.02,-.37,.06,.07,.18,-.05,-.05,.15,.14,.11,.18,.22,.22,-.15,-.02,.21,-.03,.06,.13,-.06,-.1,-.04,-.25,.15,-.11,-.08,.03,.11,.07,-.1,.04,-.25,-.13,-.1,.14,.04,-.06,.23,-.21,.04,.1,.06,.11,.17,.09,-.18,.08,-.02,.12,.03,-.16,-.14,.09,.04,-.17,-.13,.06,-.03,-.01,.17,-.01,.14,.18,.05,-.13,.04,-.08,.19,.04,-.1,-.16,.24,-.07,.19,.02,0,.02,.04,.06,.08,.17,-.07,.16,.21,.15,-.02,.08,-.08,-.09,-.18,-.04,.14,.57,-.02,-.09,-.21,.13,.13,-.09,-.15,.17,-.03,-.02,-.01,.19,-.04,.2,-.16,-.05,.13,.04,.12,.19,.11,.11,-.06,.06,.01,-.08,-.06,.03,.11,.13,.14,.16,-.03,.26,-.08,-.2,-.02,-.2,.03,-.02,-.11,-.15,-.12,-.07,-.12,.03,-.11,-.13,0,-.1,.05,-.02,0,-.1,-.03,-.09,0,.14,-.17,-.05,.14,.14,.18,-.02,-.1,-.03,-.22,.06,.05,.2,-.04,-.17,-.1,-.23,-.06,-.27,.08,-.1,-.08,.14,.14,.11,-.28,.13,.14,.05,-.21,-.08,.1,-.09,-.04,.14,-.07,.11,.21,.1,.26,-.13,.15,-.11,-.04,-.08,.17,-.1,-.11,.09,.14,.07,-.14,.19,.21,.11,.04,-.14,-.06,-.02,-.04,.08,-.14,.06,.15,.19,.02,-.05,.03,.1,0,.03,-.01,-.12,-.28,-.08,.06,.05,.04,-.06,.08,.14,-.06,.18,-.16,-.09,.08,.15,.11,.04,-.06,.02,-.06,.09,.21,-.16,-.11,.09,.17,-.11,.13,.03,.09,.07,-.16,-.24,.1,.03,-.03,.22,.08,-.05,-.23,.1,-.01,.16,.03,.14,.09,-.03,.06,.11,.17,0,-.04,-.05,-.01,.07,-.13,.18,.23,-.13,-.02,-.09,-.06,.03,-.02,.01,-.03,-.22,.15,.08,-.03,-.23,-.07,-.05,.03,-.1,-.1,.03,.07,.1,-.02,.16,-.07,-.1,.1,.11,.04,0,-.04,-.24,-.11,.22,-.12,-.01,-.13,-.02,.14,-.13,.02,-.06,-.09,-.09,.11,.16,.05,.17,.01,-.14,-.08,-.01,.1,-.2,.1,.11,.07,.04,-.09,.16,.05,-.11,.01,.1,.21,-.13,-.04,-.32,-.04,-.04,.18,.02,.07,-.06,-.02,.03,-.18,.24,-.09,-.04,.02,.04,.02,.1,-.06,.04,.04,.03,.15,.17,.02,.03,-.16,-.03,.06,.17,-.09,.01,.01,.18,-.07,.11,.06,.13,-.06,-.07,.11,.15,.09,.03,.06,.06,-.14,-.13,-.06,.11,.15,.1,-.03,.19,.07,-.12,.11,-.12,-.01,-.04,.2,.12,.18,.08,-.06,.04,-.03,0,-.02,.1,-.04,.21,-.05,-.12,-.04,.04,.06,.02,-.15,-.11,.19,-.01,.22,.09,.01,-.03,-.16,.03,.17,0,.02,.1,-.07,-.03,.01,-.06,-.15,.07,.17,-.05,-.07,.07,.24,-.06,-.21,.03,-.15,-.18,-.09,-.03,-.04,.12,-.01,.02,.02,-.04,-.03,.11,.15,0,-.16,-.04,-.02,-.1,0,-.15,-.16,-.16,.04,-.15,.03,.03,-.01,-.13,-.01,-.01,-.08,-.12,.1,-.01,.2,.1,-.14,.07,.07,.09,-.11,.19,-.07,-.02,.08,.05,-.02,-.1,-.09,.06,.19,-.02,-.08,-.1,-.09,-.14,-.01,-.16,-.09,.04,-.23,-.07,-.04,.06,-.16,.18,-.01,-.07,-.07,-.14,.02,.04,-.08,-.28,.26,.12,.14,-.04,.12,.09,.07,.02,.15,.19,.1,.17,-.15,.05,-.08,.04,.14,.02,.05,.14,.15,-.01,-.08,-.08,.16,.28,.09,-.08,.18,.06,-.01,-.26,-.19,.16,-.11,.11,.01,.06,-.07,-.11,-.06,.13,-.01,.04,-.12,-.14,-.11,-.07,.02,.18,-.23,.08,.18,-.05,-.1,.06,.15,.14,-.22,-.12,-.11,-.11,-.1,-.14,.03,-.03,.08,-.04,-.05,-.06,-.04,-.06,-.01,-.11,.01,.18,-.07,.18,.1,.14,-.08,.13,.04,-.13,.08,.11,.09,.05,-.02,-.07,-.08,-.04,.09,.14,-.12,-.06,-.04,.14,-.08,-.05,.03,-.21,-.01,.12,-.17,-.05,-.05,-.11,.16,-.02,.05,-.06,.1,.15,.05,-.07,.13,-.1,.12,.05,.04,.11,.01,.04,-.2,-.01,-.04,.06,.06,.08,-.1,0,-.05,-.02,.08,.03,.05,-.11,-.07,-.16,.17,.1,.06,-.05,.18,.14,-.17,-.11,.06,.09,.13,.08,-.07,.22,-.1,.11,.22,0,-.19,-.13,.02,.01,.05,-.28,-.07,-.15,.15,-.14,-.05,.21,-.2,.21,.12,-.1,.06,.13,.02,-.12,-.19,-.18,0,.07,-.02,.01,.02,.14,-.09,.04,-.02,.08,-.06,0,.07,-.06,.13,-.04,.1,.02,.2,0,-.02,-.08,.08,.08,.27,.02,-.08,-.04,.08,.16,-.17,.14,.16,.07,-.17,-.08,0,.07,.04,-.07,.24,.16,-.14,.12,.06,.12,-.06,-.12,.01,.01,.06,-.2,.05,-.15,.2,-.01,-.1,.14,.09,-.15,.11,.13,-.11,.14,-.01,.23,.02,-.02,0,-.02,0,.09,-.1,.17,.06,.14,-.34,-.06,-.17,-.06,-.03,-.01,.04,.15,.17,-.02,.18,-.14,-.01,-.1,.02,.12,.13,-.09,.2,.15,.06,-.09,.04,-.01,.2,.02,.12,-.01,.13,.12,-.07,.13,.18,0,-.12,.06,.11,-.17,.15,.23,-.01,-.1,.12,.31,-.14,-.15,0,-.19,-.05,.05,.02,-.04,-.08,.14,.02,.16,.12,.07,-.13,.06,-.15,.17,.1,.12,-.15,-.15,-.08,-.01,-.03,-.02,-.12,.16,-.06,-.19,.01,.06,-.17,-.05,-.21,-.11,.14,-.14,.03,-.16,-.13,-.09,.04,-.13,-.07,-.01,-.05,.21,.09,.21,.15,.09,-.02,-.08,-.06,-.13,-.14,.05,-.02,.08,-.1,-.06,-.16,.11,.13,-.17,-.03,.02,.12,.17,.09,-.09,.03,-.07,.18,.04,.19,.07,.03,-.1,.09,.09,.12,.05,-.2,.15,-.03,.16,.06,-.14,-.15,0,-.07,.15,.19,.13,-.07,.08,-.01,-.1,-.09,-.07,.07,.11,.23,.07,-.1,-.1,.18,-.29,-.03,-.14,.01,-.13,-.02,.07,.12,.07,-.04,-.15,.12,.04,.05,.12,.05,-.04,-.16,.06,0,.14,.15,-.04,.09,.13,-.02,-.08,-.04,.1,.23,.04,-.09,-.16,-.07,.14,-.01,.11,.06,.09,-.08,-.08,.11,-.02,-.07,-.22,-.27,-.13,-.19,-.08,-.14,-.15,-.03,-.11,.1,-.03,-.18,.06,.16,-.17,.09,-.07,.06,.16,.16,-.04,-.18,.09,-.11,-.11,-.04,.09,.19,.08,.19,-.2,.03,-.2,.05,.13,.18,-.05,-.05,-.07,.18,.03,-.21,-.03,-.17,-.02,.02,-.01,.04,.04,-.16,.01,-.16,-.05,.16,-.04,-.15,.22,.04,.15,.12,.08,.02,.05,.02,0,.16,-.15,.15,.06,-.1,-.24,-.08,-.1,.09,.06,-.21,.15,.14,.19,.16,-.02,-.14,-.03,-.15,-.01,-.17,-.07,-.17,-.02,.17,-.11,.16,.23,.13,.03,-.06,-.18,-.15,.17,-.03,.08,.12,.14,-.07,-.05,.18,.07,.13,-.08,.14,0,-.04,.09,.05,-.2,.19,-.12,-.08,-.17,0,-.06,0,.09,.29,-.3,-.1,.23,0,-.03,.06,.11,-.09,.02,-.01,.28,-.04,-.13,.05,-.04,-.01,.14,-.07,.16,.21,.05,.01,.07,-.01,-.2,.18,.09,-.13,.12,-.11,-.05,.04,-.05,.07,.19,-.1,.06,.13,.1,.09,.1,0,.15,.16,.1,.03,-.18,-.15,.06,.06,.08,-.02,.17,.2,-.08,.05,.15,.08,.14,.11,1,.06,.08,-.03,.04,-.1,.06,.1,.19,.03,.11,.12,.12,.08,-.13,.05,0,-.02,.1,.23,-.11,.07,.17,.13,.17,-.01,.06,0,.21,.08,.2,-.01,-.08,.04,-.06,-.16,0,-.03,.09,.2,-.08,.12,-.03,.2,.25,.16,-.08,-.1,.25,-.02,.04,.16,-.03,-.11,.09,-.06,-.01,.11,.06,.17,.06,.22,-.06,.07,-.04,-.06,.14,-.03,-.02,-.06,.22,.09,.18,.03,.05,.12,-.02,.21,.07,.16,.08,.12,-.05,-.12,-.01,.04,.11,.13,.03,.07,.21,.09,-.02,.15,-.06,-.17,.15,.03,.09,-.06,-.16,.08,.09,.13,.05,.07,.13,.03,.13,.14,-.07,.07,-.03,-.13,.14,-.05,.19,-.03,.21,.11,.1,.16,-.06,-.06,.08,.1,-.24,.22,.02,-.09,.18,0,-.01,-.05,-.08,.07,.17,.16,-.21,.18,.16,.19,.16,.09,.07,.11,.39,-.21,.1,-.02,-.08,.64,.05,.03,-.03,.12,.2,.08,.05,.24,.25,-.08,-.08,-.11,.15,.13,.11,.06,.01,-.11,-.09,-.02,-.08,.17,.16,.1,-.11,.1,.09,.05,-.08,-.22,-.12,-.1,.16,.07,.13,-.04,.09,.14,-.1,.19,.08,.22,-.13,-.01,-.13,.03,-.11,-.01,-.19,-.04,.09,.04,-.24,-.01,.15,0,.16,.16,-.08,.16,.11,-.27,.13,-.13,-.15,-.09,-.3,.06,.12,.13,.22,.06,.14,.19,.05,.11,.1,.01,.21,.12,.18,.2,.13,-.13,.12,.19,.19,.19,-.01,-.02,-.06,.11,.16,-.04,.07,-.11,.05,.12,.22,.16,.18,.12,.14,.26,.14,.54,-.01,.14,-.01,-.07,-.17,.07,.13,.12,.05,.02,.08,0,.14,-.13,.19,.02,-.15,-.14,-.12,.15,-.11,-.02,-.12,.03,.06,.15,-.08,-.15,.02,.01,-.22,.05,.15,.14,-.03,.11,.06,-.2,.12,-.13,-.1,-.08,.07,.16,0,-.07,.15,.03,.26,.03,.2,-.07,.1,.16,.16,-.01,-.03,.01,.04,.29,.01,.13,-.18,-.22,-.04,-.03,.21,.19,.18,.11,-.06,.01,.14,.04,-.05,-.03,-.24,.06,.07,.1,.07,.23,.15,-.07,.03,-.05,.1,.17,-.08,-.13,.19,.12,.2,-.14,.02,0,.06,0,.12,.09,-.06,.16,.11,-.01,-.08,.14,-.13,-.03,-.11,.23,-.08,.13,.05,-.09,-.03,-.04,.13,-.07,-.1,-.2,.06,.15,.16,.13,.18,-.1,.17,.17,.09,.09,.04,.04,-.01,.14,.15,.03,.1,-.08,-.16,.04,.19,.14,-.17,.18,-.08,.16,.02,-.09,-.08,.05,-.13,-.08,-.01,-.07,-.15,.23,.13,.18,.15,.11,-.13,.07,.19,-.05,.02,-.22,.02,.03,.12,-.05,.07,-.17,-.2,.07,-.03,.23,.03,.11,.14,-.03,.08,-.15,.14,.11,.11,-.06,.23,.07,.16,.29,-.11,.11,.19,.13,.21,.15,.17,.18,-.08,.16,.08,.13,.04,.15,.16,.13,.11,.18,-.11,.13,.13,-.12,-.02,.11,-.1,.1,-.19,.05,.16,.13,.2,.25,.01,0,-.03,-.05,.14,-.06,.13,-.01,.05,0,-.03,-.02,.03,-.13,.15,-.05,.04,-.24,.02,-.12,-.12,.24];export{a as rvalData};
