const a=[-.08,.09,-.04,-.13,-.06,-.23,.13,-.31,-.09,.01,-.07,.09,.23,.19,0,.08,-.04,-.04,.14,-.04,.1,.16,-.02,.18,-.07,-.07,.28,-.06,.17,.29,-.14,.23,-.09,-.2,-.03,-.03,-.07,.01,.11,-.05,.11,-.05,-.05,-.15,.05,-.05,.09,-.1,.14,-.14,-.11,-.12,.02,0,-.23,.04,-.13,-.23,-.04,-.06,-.21,-.06,-.08,-.1,.13,.17,-.1,.09,-.01,.26,-.11,-.05,-.26,.3,-.01,.1,.07,-.23,-.07,.15,0,-.01,.05,-.04,.17,.27,-.04,.01,.12,-.02,-.2,-.05,-.18,-.08,.16,.07,.06,-.17,.07,-.23,.09,-.07,-.09,-.06,-.19,.02,.1,.2,-.1,-.13,.01,-.2,.01,-.02,.08,-.01,.06,.1,.04,-.14,.07,.1,-.1,-.04,-.07,-.09,0,-.11,.05,-.05,-.21,-.08,.01,-.23,-.1,-.08,-.29,-.04,.17,.01,-.14,-.1,-.12,-.06,-.2,-.05,0,-.02,-.12,-.16,-.07,-.21,.1,-.15,-.23,-.25,.06,-.13,.04,.02,-.25,-.17,.19,-.12,-.2,-.26,-.13,.16,-.13,-.06,-.19,.07,-.17,-.21,-.03,.15,-.01,.34,-.29,-.13,-.08,.05,.03,0,-.14,.15,-.17,-.07,-.24,.02,.15,-.26,.21,-.21,-.21,-.05,-.11,-.08,-.19,.24,.02,-.15,-.06,-.26,-.08,-.17,.05,-.25,-.26,.24,-.24,-.01,.13,-.04,-.2,-.05,.23,-.16,.2,.18,-.08,-.14,-.06,.02,.09,-.04,-.24,.14,-.1,-.18,.01,-.1,.06,.04,.12,-.24,-.01,.11,-.07,.08,-.29,.06,-.21,-.24,-.18,-.17,.24,-.32,.01,.13,-.2,.14,-.16,-.06,-.14,.25,-.12,-.14,-.14,.03,-.08,-.11,-.2,-.13,-.07,-.12,.19,-.06,-.15,-.08,.14,-.23,-.13,.01,-.12,.23,.26,-.33,-.04,.17,-.33,.21,.04,.04,-.11,-.11,.24,-.09,-.06,.2,-.2,-.22,-.11,-.06,-.12,-.06,-.03,-.01,-.33,-.02,-.09,-.06,.24,.05,.12,.01,.03,-.21,-.15,-.01,-.12,.01,.2,-.17,-.07,.01,-.07,-.11,.02,-.09,-.04,.11,-.01,-.06,-.07,-.09,-.09,0,-.1,-.13,.03,-.04,.08,.02,.18,-.06,.16,-.12,-.14,.15,-.22,-.02,.09,.04,0,-.06,-.15,-.27,-.01,-.2,-.16,-.21,-.22,-.08,.1,.02,-.18,.34,-.02,-.03,-.03,-.3,-.1,.28,-.06,0,-.19,-.06,-.23,-.02,.16,.02,.02,-.16,-.24,.01,-.1,-.05,0,-.25,.06,.09,.14,.02,-.08,-.12,.2,.26,-.06,-.06,-.05,.24,.05,-.11,-.08,-.02,.12,.1,.01,.07,.27,-.13,-.04,-.1,-.2,.2,.06,-.06,-.08,-.05,.05,-.03,-.2,-.02,-.2,-.04,-.11,.01,-.32,.06,-.28,.04,0,.25,-.02,-.03,-.09,.03,-.15,-.14,-.15,-.1,-.18,-.03,-.2,.04,0,-.07,-.05,-.22,-.17,-.07,-.1,-.05,-.12,-.24,-.07,-.06,-.08,.11,-.17,-.26,.09,-.02,.04,-.14,.28,-.07,-.24,-.21,-.01,-.09,.05,-.29,-.02,-.06,.1,.04,-.04,.01,.17,-.05,-.16,-.22,-.24,-.08,-.07,-.16,-.08,.25,-.13,.06,-.12,-.18,-.21,-.11,-.14,-.19,.12,.02,.21,.11,.11,-.08,-.14,-.03,-.14,.02,-.1,-.16,-.2,.07,-.09,-.03,-.04,-.09,-.06,-.1,-.02,-.25,-.17,-.03,-.08,-.05,-.16,.22,-.32,-.18,-.25,-.05,.3,-.07,.06,.08,-.03,-.11,-.12,-.12,.05,-.2,-.24,-.12,-.04,-.19,-.14,-.18,-.08,.04,-.09,.13,-.01,-.1,.21,.3,-.02,-.05,-.24,.28,.01,.1,.26,-.06,-.01,.02,-.19,.13,.19,-.11,.14,.03,-.05,.17,-.11,-.19,.11,-.05,-.06,.13,-.3,.07,.05,-.02,0,-.23,-.08,-.01,.21,.11,-.25,-.04,-.02,-.2,-.14,-.2,-.16,.05,0,-.06,-.04,-.06,-.02,.14,-.01,-.08,-.18,0,-.06,-.03,-.26,-.27,-.09,-.03,-.07,-.14,-.05,.31,-.18,0,-.09,.15,.08,-.04,.19,-.26,.08,-.17,-.05,-.19,0,-.17,-.11,-.05,-.04,-.05,-.02,-.03,-.18,-.19,-.11,-.12,.15,.03,-.09,-.26,-.01,-.1,-.07,-.24,-.18,.17,-.32,-.04,.03,-.09,.15,-.14,-.16,-.06,.16,-.15,-.19,.02,-.14,-.04,-.09,.09,.07,.17,.07,-.08,-.05,-.01,-.08,-.21,.01,-.01,.08,-.05,-.1,-.05,-.07,-.03,-.09,.32,-.15,-.2,-.14,.01,.1,-.1,-.21,-.06,-.03,-.1,-.23,-.2,.08,-.06,-.09,-.26,.03,-.12,-.08,.25,-.09,-.07,-.14,-.36,.06,-.04,-.03,-.21,-.21,.01,.06,.07,.06,-.01,-.11,.3,-.12,-.26,-.19,-.17,.21,.01,.02,-.1,.04,-.07,-.22,-.07,-.06,.16,-.07,.09,.04,.22,-.2,-.04,.16,-.05,-.09,.28,-.22,-.27,-.03,-.01,-.02,.07,-.02,.03,.16,.3,.03,-.12,-.08,-.04,.09,-.21,-.22,.11,.16,-.15,-.08,.04,.08,.16,-.12,.02,.13,.21,-.06,-.02,.16,.07,-.09,.09,.15,-.15,-.11,-.18,-.04,-.22,-.23,.03,-.01,-.25,-.09,-.18,-.07,.1,-.15,-.1,-.05,-.16,-.14,-.27,-.08,.2,.13,-.08,-.14,.11,-.03,.22,-.03,-.13,.09,-.15,0,.07,.04,-.05,-.14,-.01,-.18,-.1,-.29,-.04,.04,.01,-.05,.04,-.01,-.23,.15,.2,.04,-.04,-.11,-.08,-.18,.09,.23,-.04,-.07,-.36,.14,.02,0,-.07,-.19,.18,.18,.22,.33,-.19,-.19,.18,-.17,-.02,.17,-.22,.02,-.06,.18,.06,-.2,-.14,-.14,.16,-.14,.16,.11,-.1,-.25,-.15,-.22,.05,-.21,-.05,.15,.11,-.05,-.12,.14,-.27,-.13,-.2,-.04,-.05,.11,-.25,-.12,-.18,.19,-.06,.06,-.14,.28,-.06,-.19,-.06,.02,.01,-.19,.09,-.15,-.11,-.04,.18,.06,-.2,-.14,-.01,-.15,.11,.07,-.02,.01,.05,-.19,.08,-.16,-.08,-.03,-.23,-.09,-.22,-.07,.29,.11,-.06,-.08,-.23,-.21,-.22,-.19,.05,-.16,.14,.02,-.01,-.15,-.04,-.14,.01,-.11,-.09,-.27,-.06,.01,-.05,-.07,.03,-.24,.25,-.08,-.08,-.23,.02,-.09,-.08,-.13,-.01,-.23,-.11,.21,0,-.23,-.15,.01,.05,-.23,-.01,-.1,-.02,-.07,-.01,-.06,.05,-.08,-.19,-.11,-.22,.12,-.22,.09,-.13,.22,-.27,.05,.07,-.05,.03,-.08,-.1,-.25,-.1,-.03,-.21,.15,-.18,-.18,-.16,-.14,-.25,-.2,-.23,-.13,-.17,-.26,-.11,.06,-.25,-.11,-.3,-.15,.12,-.14,-.06,-.06,0,-.2,.13,-.22,-.05,.16,-.15,-.06,-.27,-.18,.3,-.13,-.03,-.18,-.05,-.06,-.01,-.07,.02,-.09,-.1,-.09,-.01,-.12,-.08,-.2,-.02,-.21,0,-.04,-.07,-.15,-.17,-.06,-.22,.05,.13,-.17,-.03,.31,.05,-.01,-.22,-.21,.05,.1,-.05,-.11,-.12,.23,-.21,-.03,-.03,-.08,-.07,-.15,-.06,.22,-.23,-.1,0,-.22,-.28,.19,-.04,.12,-.02,-.33,-.17,-.29,-.04,.04,-.09,0,-.18,-.22,-.01,-.06,.21,.06,-.3,-.27,.14,-.06,.04,.18,-.04,.2,.01,-.11,.12,0,-.06,-.16,.03,-.08,0,-.24,.2,-.19,-.07,-.06,-.09,-.03,.12,-.01,.06,.2,-.26,-.29,-.03,.17,.15,0,-.04,-.44,-.04,.16,.05,-.17,-.12,.08,-.21,.01,.05,-.17,-.01,-.04,-.06,-.01,.05,.09,-.08,-.1,-.12,-.19,-.14,-.03,-.11,.03,-.07,-.14,-.2,-.01,.02,-.08,-.09,-.08,-.16,-.3,-.06,-.06,-.12,-.16,-.16,-.09,-.09,-.15,-.2,-.09,-.19,0,-.06,-.03,0,-.1,-.21,-.21,-.17,.16,-.07,-.17,-.24,.01,-.02,-.07,.06,-.13,-.1,.05,-.13,-.06,-.01,-.03,-.02,.18,.04,.19,-.21,-.06,.16,-.08,-.06,-.06,-.07,-.11,.15,-.03,-.16,-.06,-.07,-.04,-.16,-.16,-.01,-.02,-.27,-.05,-.02,.12,-.25,-.07,-.11,0,-.06,-.02,-.19,-.18,-.12,-.13,-.19,-.11,-.21,.27,.22,-.2,-.2,.19,-.11,-.09,-.06,-.07,-.13,-.04,.06,-.05,-.16,-.03,-.11,-.02,-.07,-.19,-.04,-.28,.14,-.14,-.24,-.07,-.19,-.15,-.17,-.21,-.08,-.08,.13,-.25,-.1,-.02,-.03,-.1,-.23,.2,-.16,.26,.18,-.25,-.17,.04,.02,-.15,.17,0,-.12,.13,-.22,-.22,-.08,-.17,-.28,-.06,-.07,.06,-.22,-.06,-.04,-.02,-.28,.02,-.11,-.1,-.36,-.19,-.15,.06,-.12,-.17,-.19,-.06,-.19,-.11,.08,.12,.07,-.26,-.14,-.06,.11,-.17,-.06,.14,-.13,.01,-.04,-.23,-.16,-.03,-.04,.14,.01,.14,-.08,-.15,.02,.02,-.08,-.04,.28,.19,-.06,-.23,-.1,.17,-.23,-.2,-.28,.12,-.18,-.19,.09,.04,.08,-.06,0,.18,-.22,.07,-.07,-.32,-.19,-.15,-.15,.15,-.18,-.19,-.3,-.11,-.23,-.12,-.01,.21,-.1,-.07,-.12,-.2,-.24,-.06,.18,.01,-.11,-.25,.02,-.03,-.09,-.12,-.17,-.12,-.12,.04,-.19,-.14,-.01,-.24,-.08,.14,-.05,-.28,-.11,-.34,-.13,-.21,-.2,-.06,-.04,-.24,-.12,-.02,0,-.29,.1,-.02,-.03,-.08,.03,-.1,-.34,.26,-.14,-.14,-.15,-.23,.03,-.07,-.05,-.08,.05,-.21,.06,.02,-.12,-.12,-.26,-.07,0,-.02,.05,-.01,-.05,0,-.28,-.04,-.19,-.06,-.07,-.19,-.08,-.39,.08,-.22,.05,-.2,-.1,.03,-.19,-.11,-.01,.08,-.08,-.12,-.16,.39,-.14,-.04,-.04,-.09,-.32,.16,-.01,0,-.16,-.15,.11,-.23,-.12,-.13,-.02,-.02,-.05,-.25,-.04,-.12,.12,-.15,-.25,-.16,-.11,-.21,.03,-.03,-.07,.04,-.09,-.17,.04,-.12,-.08,-.06,-.25,-.21,-.16,-.2,-.12,-.03,-.09,.07,-.01,.17,-.16,-.06,-.08,-.03,-.29,.25,-.16,-.03,-.17,.02,-.04,-.07,.09,.01,-.22,0,.08,-.04,-.16,-.03,-.06,-.21,-.21,-.18,-.12,.28,-.07,-.11,-.11,-.06,.19,-.13,-.15,-.15,-.01,-.14,.07,-.17,-.03,-.22,-.06,-.08,-.27,-.05,-.19,-.13,-.06,-.15,-.18,-.1,.2,-.04,.02,-.12,-.07,-.12,-.14,-.01,-.1,-.13,-.12,.09,.07,-.11,-.12,-.09,-.23,-.01,-.15,.07,-.07,-.09,.01,-.13,-.11,-.21,-.07,-.18,.18,-.17,.04,-.28,-.04,-.06,-.12,-.14,-.21,-.16,.07,-.04,-.07,-.07,.07,.07,-.17,.01,-.24,-.02,-.21,-.1,-.04,-.01,-.11,-.09,-.15,.07,-.06,.02,.01,-.02,-.19,-.24,.02,.06,.04,-.17,-.17,-.31,-.11,-.22,-.13,-.21,-.1,.05,-.26,-.04,-.14,.17,-.13,.01,-.11,.01,-.22,-.08,-.21,-.21,.11,-.25,-.06,-.11,-.12,-.11,-.09,-.08,-.11,-.29,-.29,-.03,.07,.11,-.09,-.14,-.1,-.08,-.06,-.11,.08,-.18,-.26,-.12,-.24,-.13,-.04,-.02,-.15,-.1,-.1,.13,-.18,-.16,-.28,.01,-.16,.11,-.18,-.13,.18,-.15,.13,-.03,-.19,-.04,-.1,.28,-.27,.02,-.15,-.1,-.09,-.08,-.16,.41,-.09,-.14,.24,-.03,-.05,-.07,-.01,-.26,-.03,.06,-.02,-.13,-.03,-.03,.25,-.15,-.07,-.06,.17,.1,0,-.16,-.09,-.18,-.05,-.04,-.01,-.01,-.02,-.18,.16,-.18,.16,-.14,-.11,-.2,-.05,.03,-.02,.14,-.1,-.09,-.03,-.22,-.12,-.26,-.05,-.21,-.09,-.24,0,-.02,.12,-.09,.29,.01,.04,0,-.01,0,-.13,-.13,-.12,.26,.03,.02,-.01,.03,.01,-.18,.06,1,-.07,.22,-.29,-.02,-.16,-.12,-.12,.06,-.04,0,-.07,.05,-.14,.23,.15,.03,-.06,.02,-.01,-.01,-.01,-.08,0,-.17,-.24,-.16,-.05,-.14,-.08,-.03,-.25,-.27,-.14,.19,-.18,-.03,-.13,-.2,.18,.16,-.06,-.08,-.01,-.24,-.18,-.16,-.05,-.09,-.03,-.02,.02,-.1,.16,-.15,.09,-.2,-.12,-.22,-.08,-.18,-.07,-.03,-.19,-.25,-.09,-.1,-.17,-.03,-.13,-.17,-.1,.01,-.19,-.25,-.08,-.23,-.17,-.18,-.09,.14,-.07,-.13,-.24,.13,.08,.09,.11,-.06,-.13,-.2,.04,-.12,.07,-.11,-.18,-.18,-.13,.03,-.13,.15,-.29,-.15,-.2,-.01,-.04,-.04,.01,-.04,.26,-.07,-.16,-.27,-.22,-.01,.01,-.06,-.1,-.19,.06,.29,-.06,-.13,-.13,-.11,-.14,.01,.06,-.17,-.18,-.09,-.24,.14,-.27,-.03,-.07,-.08,-.05,-.08,-.05,-.15,.03,-.08,-.05,.17,-.23,-.13,-.28,-.08,-.14,.09,-.11,.1,-.02,.07,-.03,.08,-.05,-.08,-.18,.01,-.17,.02,-.27,.1,-.11,.03,.01,-.18,-.13,-.12,.32,.07,-.04,-.11,-.1,-.19,-.11,-.06,-.03,-.03,-.01,-.02,.01,-.09,-.01,-.09,.23,-.01,-.11,0,-.1,-.07,-.08,-.06,-.13,-.05,-.11,-.2,-.05,.17,-.01,-.04,.08,-.08,-.15,.09,.22,-.16,.11,-.01,-.08,-.03,.08,-.04,-.21,-.14,-.1,.02,.01,-.06,.16,.23,-.11,-.01,-.06,-.09,.14,.02,.02,.05,-.03,-.2,-.07,-.1,.03,-.12,.03,-.07,-.16,-.04,-.09,-.09,-.22,-.13,.06,-.18,-.1,-.03,-.08,-.08,-.07,-.06,-.02,-.03,-.08,.1,-.1,-.05,-.05,-.04,0,-.07,-.01,-.2,-.17,.01,-.06,.01,-.04,-.21,-.02,-.09,-.05,-.15,-.07,-.02,-.07,.19,-.22,.15,-.22,-.03,-.11,-.01,-.18,-.1,-.03,.2,.05,.08,.14,-.16,-.01,.02,-.17,-.07,-.23,-.01,-.2];export{a as rvalData};
