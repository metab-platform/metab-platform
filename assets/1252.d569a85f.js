const a=[.21,-.18,-.08,.11,-.17,.03,-.26,.18,.01,.1,-.06,-.15,.04,.12,-.08,.02,-.13,-.2,-.09,0,0,.01,.14,-.2,-.09,-.15,-.08,.05,-.17,-.15,-.12,-.11,-.11,.02,-.08,.01,-.13,-.08,-.25,-.07,-.3,-.19,-.05,.15,-.05,.01,-.01,-.04,-.2,.02,-.02,.07,.01,-.15,.08,-.09,.04,.1,-.1,-.24,-.01,-.19,-.14,0,-.2,-.01,-.17,-.12,.01,0,.16,-.14,.07,-.13,-.18,-.27,-.09,.01,.02,-.05,.1,-.32,.04,-.21,-.11,-.07,-.16,-.04,.19,.04,.04,.22,.08,.22,-.03,-.09,.1,.04,-.03,.02,-.25,-.13,-.12,-.32,-.02,-.02,.06,-.02,-.1,-.08,.11,.03,-.04,.09,0,-.22,-.15,-.06,0,-.08,-.01,-.03,-.06,-.09,.14,.03,-.09,.08,.03,-.17,.21,.2,0,.1,-.03,.14,.11,-.01,-.05,.12,-.16,.11,-.13,-.14,.11,.09,.01,-.05,-.08,.07,-.13,.23,.01,-.13,.19,.07,-.09,.05,.09,-.08,.24,-.06,-.07,-.06,.12,.07,-.31,-.04,.07,-.16,.14,.07,.22,.24,-.01,-.02,.06,-.12,.08,-.16,.07,-.25,.18,-.12,-.04,.07,.01,-.03,.01,-.02,-.06,.13,-.05,.02,-.05,-.12,-.1,.05,.07,-.11,-.12,-.06,-.16,.18,-.07,0,.1,.05,.08,-.04,.18,-.16,-.04,-.19,.09,-.18,-.07,.15,-.07,-.14,.01,-.09,-.11,-.22,-.05,-.2,.18,-.07,.02,.16,.05,-.18,-.23,-.06,-.05,.15,-.05,-.01,.03,.02,-.03,-.18,.12,.09,.13,.15,-.12,.18,-.03,-.06,.07,-.03,.07,-.16,-.12,-.11,-.12,.01,-.12,-.1,0,-.03,.14,-.12,-.12,-.05,-.18,-.13,.1,-.09,-.05,.17,-.12,-.08,-.07,-.17,-.14,.1,-.16,-.17,.16,-.1,0,.07,.09,-.04,-.19,-.12,.03,-.13,.27,.11,-.15,.08,.14,-.04,.02,.22,.26,.03,.11,-.14,-.08,.07,-.11,-.16,-.08,-.1,-.06,-.02,-.19,-.14,-.05,.15,-.05,0,.12,-.04,-.08,-.07,-.19,-.03,-.08,-.2,.06,.03,-.12,-.01,.17,.03,-.01,-.06,-.13,-.17,-.05,-.04,-.05,-.06,.11,-.06,-.02,-.11,-.03,-.02,-.19,-.13,.09,.14,-.11,.03,-.1,.2,-.04,.05,.04,0,.09,-.19,-.12,-.15,-.09,.14,.01,-.11,-.11,.17,.07,-.14,.01,.06,-.1,.07,.06,-.03,.03,-.06,-.16,-.11,.01,.04,.02,-.1,0,.02,-.02,-.07,.01,-.1,-.16,-.18,-.11,-.22,-.08,.1,.16,-.13,-.04,-.01,.05,.12,-.17,-.02,-.07,-.08,0,-.04,-.13,-.11,-.08,-.1,-.08,.16,.04,-.09,.08,.12,-.15,-.14,.17,-.02,.08,-.17,-.07,-.12,-.07,-.17,-.11,-.05,-.03,.07,.14,.01,-.09,-.1,.23,-.16,.18,-.15,-.17,0,-.06,-.16,-.14,.1,.05,-.04,-.17,-.1,.08,0,.09,-.07,.13,-.08,.02,.05,-.17,-.16,.09,-.09,-.1,-.07,.16,.05,.13,.07,-.08,-.06,.13,-.17,-.02,-.18,-.05,.13,.06,-.09,-.06,.12,-.1,-.1,-.06,-.19,-.09,.09,.12,-.07,.17,.08,-.11,-.01,-.05,-.14,.07,.03,-.07,-.22,.14,-.1,-.13,.03,.01,.08,-.11,0,-.19,-.1,-.07,-.09,-.14,.05,-.09,-.05,-.13,-.09,.02,-.17,.19,.18,.08,-.08,-.2,-.12,-.07,-.02,-.27,.13,-.11,-.06,-.01,-.05,.19,.17,-.01,.13,.16,.07,.03,-.14,.07,-.15,.04,.01,.02,-.15,-.01,0,.03,-.16,-.11,-.13,-.2,-.18,-.14,-.08,-.16,.19,-.09,.07,.04,-.03,-.1,-.05,-.04,.15,.05,-.03,-.14,-.05,.15,-.18,-.02,-.08,.15,.15,-.14,-.15,-.19,.15,-.01,-.26,0,.12,-.07,.02,.01,-.2,-.14,-.23,0,-.16,.08,-.12,.07,-.1,.12,.15,-.03,-.12,.04,.02,-.12,-.17,-.09,0,-.05,-.07,.13,-.11,-.04,-.16,-.06,-.09,.02,.18,-.09,.54,-.16,.17,.2,.1,.09,.01,-.03,-.09,.02,0,.01,-.05,-.12,.18,.1,.15,.02,.04,-.04,-.05,-.09,.14,.23,-.02,.11,-.2,-.02,.09,-.08,-.13,.07,-.13,-.23,.03,.19,.12,.23,-.17,-.08,-.05,-.07,.05,-.1,.06,-.16,-.09,-.15,.04,-.03,-.01,-.06,-.01,-.15,-.15,-.04,0,.03,-.11,-.06,.16,-.16,-.18,.13,.02,.43,.05,-.18,-.02,.04,-.07,.09,-.19,-.11,.2,-.07,-.05,-.04,-.1,.12,.1,.07,-.04,-.08,.1,-.2,.19,.08,-.14,.09,-.08,-.26,-.07,.03,-.08,-.15,.08,-.05,.17,-.21,-.01,.03,-.15,.07,.1,.21,-.08,-.12,.05,-.24,-.21,.14,-.04,.23,-.03,.04,-.01,-.17,.11,-.02,.13,-.16,-.01,.06,-.15,-.1,.03,-.06,-.18,.03,.17,.03,-.13,.02,.01,.18,-.11,-.09,-.03,-.1,-.14,-.12,-.17,-.07,-.02,-.16,-.05,-.08,.04,-.26,-.1,-.09,-.05,.04,0,.04,-.04,-.24,.15,.03,.12,.11,.21,-.23,-.02,-.04,0,-.13,-.18,-.03,-.02,.01,.09,.11,-.09,-.04,-.06,.03,-.1,-.17,-.08,-.19,-.13,-.05,-.04,.09,-.16,-.07,-.12,-.06,-.16,.04,.07,.04,-.12,-.08,-.05,-.16,.07,-.2,.04,.01,-.21,-.05,-.19,.03,.01,.14,-.24,.04,-.18,.02,.18,-.11,-.06,-.09,-.17,.09,-.02,-.11,-.2,.06,.06,.08,.08,-.01,-.21,.01,.07,-.12,-.09,-.04,-.02,-.01,-.06,-.16,-.08,.01,-.11,-.12,-.03,.05,.05,.17,-.03,.01,-.14,-.17,-.03,0,.1,-.08,.04,.04,.19,.02,.1,-.08,.04,-.03,.1,-.18,-.09,-.13,.06,-.13,-.02,-.09,-.23,-.19,.11,.09,-.05,-.11,.12,-.18,.05,-.03,.02,-.16,.01,.06,-.05,-.09,-.14,.04,-.15,.03,-.1,.11,-.12,.06,.16,.02,.17,.1,-.17,-.12,.24,-.08,-.08,.2,.05,.13,-.2,-.01,-.07,.14,-.18,-.09,-.11,.15,-.21,-.09,-.03,.17,-.05,-.11,-.18,-.25,.13,.08,-.02,-.06,-.18,.09,-.09,-.11,-.21,-.07,.03,.19,-.11,-.02,.15,.18,.01,-.05,-.13,.11,-.14,-.2,-.01,-.16,.14,-.11,-.12,.11,-.15,-.07,.04,.13,.15,.06,.37,-.21,.08,-.09,.15,-.13,.04,.11,.09,.08,-.07,-.18,.23,-.02,.14,.14,.12,.13,.06,.07,.14,-.11,.18,.14,.16,.07,.04,-.19,.5,.04,-.08,.03,-.06,-.13,-.06,.16,-.12,.18,-.09,-.12,.09,.08,0,-.02,-.22,.05,.05,.06,.09,.01,-.16,-.13,.02,-.02,.06,.14,.05,-.16,-.09,0,0,.08,-.25,-.04,.03,.08,-.03,-.15,.08,-.17,.01,.02,-.17,-.14,-.02,.01,.05,.11,-.03,.13,-.12,.02,.03,-.24,.25,-.11,.03,.07,-.05,-.04,-.12,-.11,.16,.12,-.21,.07,.03,-.01,.01,-.09,-.16,.15,.06,.02,-.14,.07,.01,-.13,.08,-.1,-.19,.04,-.05,-.09,-.01,.06,-.14,-.06,.03,-.02,-.18,0,0,-.07,-.07,-.03,-.1,.14,-.06,-.14,-.15,.24,-.08,.17,-.14,-.09,.05,-.08,-.04,-.08,-.14,-.13,.11,.09,-.08,-.17,-.13,-.06,-.19,.1,-.19,-.04,-.2,.07,-.1,-.03,.02,.07,-.11,.02,-.12,.01,-.15,-.19,-.02,.09,-.14,-.12,.1,.15,.05,-.15,-.03,-.12,-.21,-.12,.12,-.14,-.08,-.03,.09,-.06,.11,.08,0,-.08,.07,.12,.12,.07,.08,-.05,-.13,.07,.09,-.09,-.23,-.18,-.03,-.04,-.09,.17,.05,.1,.01,-.01,.09,-.16,-.02,-.21,-.04,.1,.04,-.16,.21,-.06,.04,-.21,-.15,-.16,-.09,-.17,.21,.15,-.2,-.14,-.07,.15,-.07,-.08,-.13,0,.04,.21,-.19,-.03,-.08,-.01,-.1,-.01,.21,-.1,.02,-.22,.16,-.08,-.05,.07,-.18,-.12,.01,0,-.16,0,.13,.08,.05,-.1,-.16,-.07,-.01,-.03,.23,-.08,-.19,-.11,.03,-.1,.06,.08,.13,-.19,-.14,-.1,.01,.15,.08,.17,-.04,-.08,.16,-.13,1,.1,0,-.16,.07,-.05,-.1,.18,-.03,.15,-.13,.08,.12,-.09,.11,-.11,-.04,.05,.08,-.16,.07,-.08,-.14,.07,.16,-.16,.14,.11,-.07,-.01,.07,.01,.08,.12,.06,-.13,.07,.17,.1,.01,-.11,-.16,0,.26,.04,-.12,-.03,-.19,.02,-.12,.11,.09,.11,-.19,-.09,.05,.11,-.19,-.09,.06,-.15,.16,.09,.01,.03,.22,.01,-.17,.07,-.1,-.02,.02,.22,0,-.06,-.1,-.18,-.02,-.17,-.1,-.22,.17,-.2,-.13,-.19,.24,-.05,0,-.1,.04,-.14,.02,-.17,.14,-.07,-.1,-.03,.1,-.12,.05,.15,.04,-.01,-.1,.16,.05,.07,.17,.17,.05,-.05,-.07,.16,.32,.2,-.08,.07,-.1,-.05,.06,.19,.16,-.04,.04,.23,.22,.26,.07,.23,-.05,.21,.17,0,.21,.07,-.02,.01,.06,-.05,.27,.05,.06,.01,-.16,-.07,.09,.11,-.16,-.18,.12,-.17,.02,-.12,.03,-.1,.1,.03,-.1,-.05,-.13,-.18,.14,.06,-.15,-.11,.24,.06,.12,-.07,-.03,.11,-.01,.18,.03,-.14,-.04,-.07,-.02,-.18,.1,.05,-.13,.03,-.18,-.14,-.05,.16,.19,-.18,-.03,-.1,.18,-.15,.02,.2,-.1,.13,-.18,.11,.12,.11,-.13,-.07,-.17,-.17,-.1,.09,.01,-.22,-.13,.06,-.06,.04,.13,-.05,-.04,-.02,.02,.05,.04,.06,.28,0,-.06,.34,-.04,.05,.01,-.1,.08,.01,-.12,-.01,.25,-.04,.05,.23,.03,-.07,.23,-.03,.02,-.05,.1,-.15,-.01,.03,-.05,.05,.18,.06,-.13,.1,.07,.06,-.14,-.01,-.12,-.08,-.08,-.24,-.24,-.03,-.16,-.09,-.21,.07,.03,-.02,0,.04,-.02,.01,-.09,-.15,-.19,.11,.08,-.08,-.04,-.03,.07,-.09,-.08,.01,.02,-.1,.01,-.14,-.18,.01,-.08,-.11,-.12,-.09,.02,.05,-.17,-.06,-.21,-.1,-.15,-.08,.14,.01,-.13,-.13,-.1,-.17,-.06,.1,-.08,-.2,.09,.15,-.24,-.06,-.16,-.23,-.17,-.07,-.05,-.12,.13,-.02,.13,.02,.01,-.1,.11,.07,-.09,.03,-.04,.11,.03,-.19,-.15,-.13,-.18,-.07,.04,.07,-.07,.07,-.13,.12,-.06,-.15,-.08,-.14,.01,-.04,-.16,-.12,-.02,-.04,-.08,.11,.04,-.14,-.11,.04,-.11,.07,.07,-.14,.06,-.16,.07,-.13,.13,.06,-.05,.14,-.15,0,.04,-.1,-.12,.17,.01,.09,0,-.06,.1,-.14,-.07,-.14,-.06,-.14,-.04,.07,.16,.05,-.08,-.2,-.32,-.12,-.11,-.2,-.09,-.14,-.03,.06,.11,.17,-.01,.15,.02,-.18,-.17,-.13,-.15,.03,-.09,.04,-.04,-.05,.08,-.05,-.11,.14,-.12,.09,0,.19,-.09,0,.07,-.2,-.02,.14,-.11,-.05,-.05,-.17,.07,.12,-.09,.03,.12,-.04,-.1,-.18,-.16,-.14,.21,-.11,-.1,-.14,-.12,-.1,-.18,-.18,.12,-.01,-.18,.09,-.13,-.02,.01,-.05,0,-.18,-.08,-.1,.07,-.17,.03,-.18,0,-.21,-.13,.03,.04,.08,-.07,-.25,-.19,.17,-.11,-.06,-.14,-.01,.17,-.02,.06,-.14,.17,-.15,-.17,-.23,-.09,.03,-.07,-.32,-.21,-.16,-.05,0,-.06,-.12,-.05,-.04,.01,-.11,.17,-.11,.16,.13,-.19,0,-.06,-.01,.07,.06,.04,.05,-.1,-.18,-.13,.12,-.12,.2,-.03,.15,-.07,-.16,-.2,-.21,-.28,0,.06,-.2,.04,.03,-.2,-.04,-.13,-.15,.05,-.09,.05,.06,.06,.1,-.17,-.1,.01,-.07,-.01,.03,-.14,.03,.08,.17,.01,-.15,-.2,-.09,-.1,-.22,-.07,-.06,.03,.07,.16,-.08,.1,-.32,.1,-.14,-.16,-.03,.02,-.01,-.07,-.02,-.04,.04,.12,-.15,-.34,.12,.12,-.04,.25,.1,.24,-.13,-.15,-.23,.24,.2,-.03,-.01,.05,-.1,-.14,.15,.08,-.05,-.02,-.03,-.18,.25,.2,.22,.15,-.08,-.03,.22,-.03,.02,.07,.22,-.16,-.05,-.1,-.14,-.18,.17,.09,.07,.04,-.03,.03,-.17,-.11,.16,-.03,0,-.02,-.07,-.13,-.03,-.06,-.08,-.2,.12,-.11,.14,.05,.22,-.15,-.12,-.07,-.05,-.2,-.05,-.03,.09,-.12,-.19,-.09,.15,-.03,0,.02,-.07,.03,.07,-.18,-.32,-.04,-.19,.24,-.03,-.14,.1,-.01,.02,.1,.12,-.22,-.12,.01,-.13,.01,-.1,0,-.1,.01,-.04,.16,.2,.01,.03,-.16,-.19,-.04,-.02,-.09,-.15,-.22,-.13,-.12,-.14,.15,.05,-.24,.06,-.13,-.14,-.12,-.02,-.16,-.12,.17,-.1,-.02,.09,-.14,.02,.05,.09,.17,.04,.08,.02,-.1,-.25,-.16,-.17,-.08,.04,.07,-.03,.1,-.14,.13,-.11,-.1,-.05,-.22,.07,.1,.13,.04,-.1,.11,-.11,.07,-.16,-.05,.01,-.07,.11,-.19,-.13,-.2,.07,-.12,.05,-.11,-.08,.14,-.21,-.09,-.14,.05,-.18,-.19,-.11,-.02,-.18,-.2,-.08,-.04,-.16,-.2,-.15,-.18,-.19,.15,-.14,-.05,-.01,.11,-.23,.13,-.15,.23,.07,-.09,-.04,-.19,-.12,-.16,.16,-.12,.2,-.11,.05,-.22,-.06,-.06,-.01,-.09,.13,-.07,-.09,.15,-.1,.03,.16,-.15,.16,-.07,-.05];export{a as rvalData};
