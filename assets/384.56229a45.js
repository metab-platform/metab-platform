const a=[-.07,-.08,.14,-.16,.14,-.09,-.15,.03,0,.21,.04,-.22,0,-.12,.1,.19,-.04,-.02,-.04,-.1,.11,-.16,.07,.06,.03,.12,-.16,-.02,.18,-.14,0,-.16,.12,.15,-.25,.07,.17,.11,.02,.11,-.03,.17,.14,-.03,.03,.03,-.13,-.19,-.03,.08,-.06,-.03,.27,.17,-.01,.08,-.04,.05,.18,.09,.06,.11,.22,0,-.04,-.09,.14,.11,-.06,.12,.27,.25,.02,.02,.16,-.05,0,.05,.07,-.04,-.14,-.01,.04,.1,-.28,-.16,.14,-.11,-.1,.26,0,-.18,.07,-.06,-.17,-.08,-.08,-.12,-.15,.04,-.09,.12,-.12,-.03,.03,-.07,.07,.01,.11,0,.07,.03,-.11,.09,-.28,.02,-.08,-.11,-.21,.03,.1,.06,.11,.09,.23,.05,.03,-.2,.02,.16,0,-.07,.06,.08,.09,-.1,.07,.06,-.09,.13,.14,.11,.18,.14,.07,.02,-.11,-.14,.08,-.14,.11,.06,.1,.05,.08,-.07,.12,-.02,-.14,.1,.06,.06,.2,-.04,.07,.05,.15,-.08,-.08,.1,-.08,-.11,.03,.02,.14,-.09,-.14,-.07,.07,.04,-.05,-.07,-.06,.12,.1,.05,.02,.08,.16,-.17,.07,.03,-.01,.09,.13,.09,-.01,0,.17,-.2,.16,.04,.17,.11,-.21,-.01,.2,.08,.02,-.03,.08,.03,.07,.1,.05,.12,-.19,.12,-.07,0,.09,-.14,-.14,.1,-.04,.17,.07,-.09,-.06,-.01,.21,-.06,.06,.11,.13,-.01,.13,.02,-.1,-.07,.1,.06,-.02,.02,.15,.11,.02,.13,.27,.05,-.09,-.07,.01,-.19,.14,-.06,.12,.01,.03,.13,.27,-.04,.03,.16,-.11,-.02,-.03,.14,-.08,.14,-.1,-.29,.16,.18,.01,-.03,-.03,.07,.11,-.02,.06,-.06,.13,-.1,0,.22,-.08,.14,-.09,-.2,-.01,.17,.12,.11,.02,.14,.14,-.19,.21,.16,0,.12,-.15,.11,-.1,.16,-.1,.09,-.09,.1,.14,-.06,-.12,.04,-.17,.15,.09,-.01,.17,.09,.11,-.25,.01,.1,.05,.01,.14,.12,-.04,.02,-.07,.03,-.01,-.04,-.13,.03,-.02,.16,.13,-.19,.14,.1,-.08,.09,.16,.15,-.15,.02,.19,.06,.15,.09,-.09,-.06,.03,.11,-.08,.09,.05,.07,.14,.47,-.01,-.01,-.19,-.19,.03,.19,.01,.08,-.05,.09,.02,-.08,.05,-.1,.12,.15,-.1,.04,-.05,-.11,-.18,1,.03,.07,.04,-.22,.03,.1,.12,.02,.08,.2,.15,.16,-.2,.06,.02,.22,-.27,-.06,.09,.06,.17,-.11,.08,.1,.06,.04,.13,-.26,-.26,.09,-.18,.08,.13,.03,.07,-.07,.1,.09,-.07,.07,.04,.16,.13,-.09,.05,-.07,0,-.13,.03,.03,.12,.16,.14,.15,.16,.08,.08,.11,.15,.06,.19,-.05,.14,.17,.04,-.18,.09,.18,-.11,-.11,-.16,-.03,-.16,.16,-.05,.11,.18,.15,-.07,.05,.15,-.26,.01,-.16,-.04,.18,.07,.14,.17,.08,.02,.11,.22,.12,.09,-.12,.11,.1,.06,.08,.21,0,.07,.03,.01,.1,.02,-.23,.04,.07,.19,.17,.01,.11,0,-.12,.12,.05,.01,.1,.11,-.05,-.09,.06,.08,.1,.12,-.16,.22,.15,.2,-.13,.08,.04,.07,.13,-.14,.08,-.23,.06,-.06,-.07,.08,.14,.22,.15,.01,.02,-.04,.11,-.05,.04,-.09,0,-.08,-.1,.11,0,-.1,-.06,-.13,-.08,.08,-.09,.06,.14,-.02,.17,.22,.09,.19,.09,-.02,.13,.07,.19,.12,-.12,.09,.07,.03,.09,0,-.05,.11,-.12,.13,.13,.04,.02,.03,.17,-.04,-.2,.11,0,-.12,-.02,.12,-.07,.03,.02,.16,.06,-.05,.17,.11,-.08,-.13,.11,.06,-.1,.17,.12,.06,.2,.02,.15,.12,.02,.19,-.09,-.03,-.19,.13,.1,-.07,.15,-.22,.02,-.03,-.09,.13,.08,.24,.09,.02,.19,.06,-.08,-.12,-.22,.27,-.07,.12,.1,.09,.03,-.09,.03,-.07,-.03,.08,.06,.16,-.15,.18,.1,-.18,-.04,.05,.08,-.07,.15,-.07,.05,-.12,-.11,.13,.15,.12,-.18,.02,-.03,-.14,.03,.11,.11,.13,-.02,-.02,-.08,.12,-.06,.13,.18,.11,-.02,-.06,-.06,-.17,-.07,.09,.13,-.22,.1,.07,-.08,.06,.22,-.08,.1,-.01,.13,.1,-.13,-.03,-.02,-.11,-.04,.07,-.06,.11,-.05,.06,-.17,.1,.07,.09,.16,0,.23,.03,0,.02,-.12,.15,0,.03,.02,-.04,.04,.14,.01,.19,-.11,.06,.14,.18,-.1,.09,.14,-.15,-.15,-.15,.09,-.05,.05,.12,.08,.15,.07,.16,-.1,-.05,.03,-.06,.13,-.13,-.07,.1,-.04,.1,.12,-.23,.16,-.04,-.16,-.24,.09,.05,-.09,-.16,.06,.11,-.29,-.07,-.07,.13,.04,.05,.21,.1,-.05,.06,.1,-.11,-.05,.13,.03,.04,-.11,.03,.07,.12,.04,.14,-.16,.02,.19,.11,.08,.08,.06,-.22,-.2,-.17,-.09,.03,.08,.15,-.07,.16,.2,-.06,0,.14,-.15,-.13,.13,.19,0,.11,-.14,-.01,-.01,.14,0,.09,-.27,.03,-.02,.02,-.03,-.06,.14,-.02,.03,.08,-.01,-.02,.13,.09,-.03,-.02,-.12,-.17,.16,-.05,-.3,-.07,-.14,.08,-.03,.02,-.1,.01,.11,.05,.01,-.11,.13,.06,-.12,.2,.07,.08,-.12,.1,.02,-.14,.09,0,.01,.02,-.17,.07,.18,-.12,.06,-.08,.03,.01,-.03,.04,.07,-.15,.03,.15,.04,-.08,-.01,.17,-.05,-.02,-.03,-.08,.2,-.03,.12,.09,.13,-.02,.06,.11,.14,.13,-.16,-.08,.04,.15,.02,.05,.06,-.03,.17,.03,-.05,-.02,.08,.02,.13,.09,.05,-.03,.09,.1,-.08,-.14,-.07,.12,-.09,-.07,-.07,.07,.03,-.11,.01,.14,.01,.13,.14,.03,.18,.04,.04,.03,.11,.04,.19,.14,-.05,.14,-.05,.01,.13,-.12,-.13,.11,.14,-.04,-.04,.07,.1,-.15,.2,.03,-.09,-.12,-.15,.16,.11,.14,-.15,.12,-.16,.11,-.01,.13,-.25,.02,.09,.03,-.08,-.09,-.04,.14,-.24,.04,-.2,.1,.05,-.02,-.06,.04,.09,.16,.08,-.19,.12,.07,.01,-.04,.1,-.01,.04,.18,.06,.04,.12,.12,.02,.1,.16,.07,-.19,-.13,-.04,-.15,-.08,-.16,.02,.04,-.09,-.07,.07,.07,.16,.01,-.04,-.1,.08,.14,-.17,-.12,.02,.12,-.09,.06,-.03,.32,-.01,.17,.08,.09,-.07,.08,-.13,-.09,-.01,.07,.12,.13,-.04,.03,.03,.08,.15,-.14,-.1,-.05,.02,-.02,-.06,-.01,.11,.03,.27,-.07,-.04,0,-.03,-.21,-.09,-.05,.12,-.02,.02,.19,.09,.14,-.07,-.08,.09,.16,.01,-.02,.06,.01,.13,-.19,.16,.16,-.13,.09,.15,.03,-.21,.13,-.04,.05,.01,.07,.07,-.17,.13,.24,-.06,.14,-.24,.13,.19,.09,-.11,.17,.17,-.11,-.03,.04,.13,.1,0,.19,-.11,.15,-.2,-.04,.19,.1,.1,-.16,-.24,.01,.06,-.07,.15,-.17,.08,-.13,.22,-.15,.12,.07,-.01,-.02,-.15,-.12,.18,.19,.04,-.13,.11,.13,.04,.09,-.16,.18,-.28,0,-.03,.11,.07,.15,.04,.08,.18,.12,-.22,.04,.11,-.13,.05,.07,-.05,-.02,.07,.03,.05,-.06,.03,.09,.03,.16,.16,.11,.16,.04,-.09,-.13,-.01,.13,.16,.17,-.03,.05,.15,.01,0,.09,.11,.02,-.04,.16,.15,.18,.1,.06,0,-.07,-.07,.15,-.02,-.16,.14,.11,-.19,-.11,-.06,.06,.11,-.04,.11,-.26,.1,.04,.1,.13,-.13,-.01,.03,0,-.12,-.02,.11,.12,.01,-.12,.15,-.07,.06,.05,.07,-.16,-.1,-.06,-.07,-.05,.06,.2,.08,.12,.14,.05,.14,.09,.06,.13,.12,.13,.2,.07,-.14,-.08,.04,.19,.1,.09,.02,-.06,.07,-.21,.01,.18,0,-.01,.1,-.08,.14,.04,-.06,.03,.02,-.14,-.08,.09,.02,.14,.08,.05,-.06,.11,.13,.21,-.17,.03,.05,.14,-.16,.1,.17,.07,.02,.14,-.12,.09,.06,-.03,.11,.17,.12,.01,-.01,-.13,.09,.05,.1,.14,.02,.08,-.05,-.09,.14,.05,.04,.16,-.12,.05,.13,-.16,.06,-.15,-.05,.01,-.03,.12,.08,.05,-.15,.01,.09,-.11,-.21,.11,.15,.09,-.03,.09,.12,.02,.12,.08,-.22,-.02,-.06,.05,.15,.1,.03,-.1,.03,-.02,.11,.06,.14,.07,-.08,.07,-.01,.02,.02,.01,.01,.05,.07,-.05,0,0,.13,-.06,-.01,.18,.01,.14,.01,-.12,-.17,-.11,-.07,0,.22,.08,-.05,-.07,.02,.1,-.07,.01,-.08,-.02,.08,.05,.11,.07,.03,.07,.08,.04,0,.06,.11,.14,-.21,-.04,.09,.2,-.02,.11,.03,.24,.17,-.01,.1,.13,.09,.06,-.16,.1,.14,.06,-.09,.01,.14,-.11,.13,-.01,.19,.04,-.02,-.04,-.03,.08,.06,.2,.04,-.08,.11,.12,.04,.11,.03,.12,.16,-.05,-.11,.09,.05,.11,.1,.04,.17,.02,-.02,-.03,-.16,.01,-.01,.03,.08,.15,.05,.2,.05,.1,.11,-.12,.01,-.25,-.01,-.09,0,0,.08,.22,-.01,-.09,-.07,-.06,-.09,-.01,-.14,.05,-.12,.09,.01,.04,-.03,-.02,-.03,.06,.11,-.06,-.02,.09,0,-.02,-.01,-.02,.06,.07,-.03,-.03,.13,.18,-.11,.08,-.01,.08,.2,.21,.04,-.07,.1,.19,.09,-.02,.05,.09,.14,.1,.1,-.05,.02,.1,.12,.03,-.03,.03,.1,.15,.21,.07,.05,.14,0,.07,-.11,-.1,.12,.11,.05,.08,.18,.01,.09,.13,.1,.13,0,.16,.11,.01,.11,-.04,.07,.23,.06,.16,.01,.1,.13,.08,.09,.11,.23,.06,.19,.01,-.06,.07,.16,.03,.11,.19,.16,.06,.06,.09,.16,0,.09,.05,.22,.03,-.09,.09,.08,.04,-.11,.08,-.04,.12,.15,.1,.19,.1,.22,.16,-.2,.03,0,.14,.08,.1,.1,.21,.06,-.02,.06,-.01,-.13,.12,.21,.13,-.16,.11,.08,.13,.09,-.02,.19,.16,.11,.05,.18,-.03,.11,.13,.12,.12,.03,.1,-.01,.08,.07,.13,.09,.13,-.03,-.05,.04,.12,.03,.08,.09,.09,.1,.1,.16,-.08,.12,.05,.09,-.13,.05,-.1,.13,.15,.16,-.08,.18,-.11,-.08,.14,.02,.14,-.01,-.05,.13,.12,.11,.08,-.02,.11,.08,.12,.02,.03,.15,.16,.01,.06,.11,.09,.03,.15,.12,-.02,.13,.11,.12,-.02,.05,.17,.06,.16,.04,.14,.08,-.18,-.06,-.01,.1,.14,.11,.02,.03,.02,.06,.11,.06,.16,.11,-.05,.03,.1,-.12,-.06,-.15,.12,.07,.09,.14,.1,.11,-.17,.08,.09,-.02,.08,-.05,.09,.22,.11,-.13,-.28,.02,.05,-.02,0,.08,.2,.1,.03,.05,.16,.15,-.02,-.14,.05,.14,.18,-.07,.09,.06,.07,.03,-.17,.18,.02,.14,-.01,.21,.09,.1,-.02,.02,.15,-.05,.02,-.02,-.09,-.14,-.07,-.08,-.01,.13,-.04,.13,.16,-.05,.17,.03,-.06,-.01,.17,.15,.14,.17,.03,.18,-.09,.11,0,.07,.1,.06,.13,.11,-.01,.09,.03,.23,-.1,.17,.16,.15,-.03,-.1,.07,.03,.18,-.12,.02,.05,.06,.16,.16,.12,.18,.21,.09,-.24,.01,-.02,-.07,.09,-.01,0,.08,.07,.16,.08,-.04,.02,.02,-.03,.09,-.05,.01,-.13,0,.09,-.03,.1,.05,.08,-.02,.16,-.04,.13,-.09,.11,-.06,.15,-.13,-.04,.18,-.03,.04,.07,.01,.26,.18,-.06,-.04,-.11,.18,.12,-.17,.06,0,.14,-.16,-.11,.18,-.06,.14,.12,.16,-.04,.15,.12,-.09,-.07,0,0,0,-.07,-.07,-.05,.08,.09,.11,-.16,.07,-.16,.13,.12,.11,.02,.06,-.09,.14,.16,.23,-.06,.15,.15,.15,.09,.19,.17,-.04,.02,-.11,.1,.01,.13,-.11,.19,-.01,.02,.01,.13,-.01,-.08,.1,-.04,-.1,.1,.05,-.09,-.05,.15,-.05,.01,.01,.1,.06,-.03,.03,.02,.02,.13,.06,.04,.17,.18,.08,-.14,.11,.16,.19,.11,.14,.02,.13,.08,.15,.03,-.2,-.12,.02,.02,.18,.12,.03,.07,-.08,-.09,.15,.13,.11,.1,.02,0,-.03,.12,.11,.07,.15,.19,.17,.11,.16,.09,.04,.13,-.11,-.15,-.1,.23,.15,.08,.1,-.07,.08,.14,-.03,.14,.06,.15,-.17,0,.09,-.08,.12,.14,.17,-.03,.14,-.09,.1,.06,.13,.12,.09,.16,.05,.16,.17,.18,-.06,.16,.05,.03,.03,.15,.13,.16,.11,.16,-.02,.12,.1,.1,-.15,.14,-.01,.11,-.04,-.21,.06,0,.15,.1,-.11,.04,-.15,.08,.15,0,.08,.14,.13,-.15,-.12,.11,-.15,-.12,.03,.09,-.06,0,.11,-.04,.12,-.04];export{a as rvalData};
