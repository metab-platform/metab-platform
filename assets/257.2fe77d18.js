const a=[-.35,-.04,.17,-.2,.18,-.19,-.08,-.09,-.08,.19,.03,-.17,.26,-.24,.06,-.03,-.08,.02,.11,-.28,.06,.02,.21,-.1,-.06,.07,-.05,.01,.14,-.01,0,-.07,.16,-.23,-.12,.06,.06,-.07,0,.17,.05,.1,.13,-.09,.01,-.13,-.09,-.23,.02,.09,0,-.21,0,.07,.07,-.07,0,-.23,.19,.08,-.07,.11,.12,.04,.07,-.02,.04,-.04,-.09,-.26,.17,.07,.05,-.08,.05,-.01,-.16,-.09,.06,-.09,-.09,.01,-.2,.04,-.05,0,.03,.19,-.11,.08,.08,.17,-.03,-.08,-.29,.2,-.21,-.22,0,-.06,.13,.03,.03,.11,.11,.03,-.04,-.01,.08,.2,-.07,.1,-.2,-.11,-.11,.03,-.04,-.01,-.02,-.08,-.07,-.05,.01,.08,.22,.15,.14,-.12,-.05,.09,.01,-.04,-.14,.05,-.06,-.17,.09,.19,-.06,-.3,.15,-.29,.08,.02,-.31,-.01,-.02,-.02,.02,-.09,.03,-.13,-.03,-.15,-.03,.07,.17,-.28,-.07,-.01,.2,.16,.19,-.01,-.01,-.04,.07,-.08,.04,.06,-.3,-.04,.06,.08,.25,-.03,-.08,-.03,.04,.12,-.03,-.21,.17,.23,.2,.2,-.2,-.13,.12,-.19,-.05,-.1,0,-.01,.13,.13,.14,-.12,-.21,-.12,-.14,-.02,.08,-.01,-.1,.2,.29,.16,.06,.17,.04,-.06,-.27,-.03,-.22,.02,.07,.03,-.06,-.08,.15,.13,-.06,.08,.2,.09,.02,-.05,-.13,.15,.03,.17,-.1,.19,.33,-.31,.07,-.15,.12,0,0,-.04,-.04,.04,-.06,-.05,-.12,.07,.08,-.19,-.04,.11,.09,-.02,.16,.21,1,-.11,.17,.15,0,.01,-.05,.17,.05,.09,-.14,.03,-.06,-.16,-.21,-.36,.07,.19,.09,.07,-.03,-.04,.18,.01,.11,-.01,-.13,0,.07,.21,.13,.03,-.11,.01,.01,.14,.18,-.03,.08,.14,-.07,-.21,.13,.25,-.05,.19,-.16,-.17,-.28,.22,.13,.03,.06,-.06,.04,.19,.08,-.29,.08,.27,.1,.05,.18,.22,.04,-.21,-.08,.09,.03,.12,.17,.15,.09,.11,-.09,.19,0,.15,.04,-.11,0,.21,.04,.05,.02,.18,.04,-.25,.06,.17,.39,.02,.23,.06,.17,-.08,-.27,.08,-.17,-.09,.04,-.11,.07,.18,-.18,.17,.16,.02,.17,-.18,-.12,.13,-.04,.01,.07,-.15,-.15,-.03,-.08,-.07,.18,.15,-.01,.07,-.03,.09,-.02,.12,-.02,.11,-.1,.08,.19,.22,.15,.32,-.07,.26,.24,.2,-.09,.03,.12,.23,0,.01,.19,-.02,.12,.23,-.05,.12,.06,.12,.17,-.02,.08,.1,-.04,-.1,.12,.17,.08,.04,-.19,.15,-.1,.19,-.15,.14,.22,.06,.19,.05,0,-.07,-.09,-.15,.09,.08,-.01,.24,.14,.02,.14,-.06,.05,-.29,.08,-.01,.22,.25,-.23,-.18,-.01,.12,-.16,.05,.08,.13,.01,.08,-.13,.12,.14,.22,-.23,-.07,.26,-.04,0,.12,-.05,.09,.04,.09,-.06,-.18,.12,.15,.13,-.15,.14,-.03,.13,-.04,.15,-.05,.04,.08,.22,.05,.09,.19,-.11,-.18,-.06,.2,.16,.1,.08,-.12,.12,-.06,.09,.09,.18,.09,-.03,.21,-.01,.12,.18,-.02,.07,-.07,.05,.08,0,.01,-.04,-.03,-.11,.07,-.21,.23,.02,-.03,-.04,-.35,.17,-.02,.07,.1,.01,.1,.22,.07,-.29,-.27,.06,.15,.04,-.13,.19,.12,.19,.06,-.13,-.04,-.04,.05,0,-.02,.03,.11,.18,.13,.09,.12,-.12,.07,.03,-.02,.16,-.13,.15,-.06,-.14,0,.07,-.04,.02,.27,.16,.16,-.26,-.01,.1,.2,.03,.05,.14,-.04,-.17,-.12,.16,.01,.07,-.07,.18,-.03,-.07,.08,-.11,0,.18,.11,.06,-.2,.19,.22,-.12,.13,.14,.04,.19,-.2,.3,.02,-.01,-.06,-.18,-.01,.19,.05,.19,-.1,.19,-.18,.23,-.09,-.14,-.2,.06,.17,.15,-.02,.08,-.17,-.03,.06,.1,-.03,-.02,-.05,.04,.01,.1,-.03,.14,.01,-.01,.01,.11,.04,-.04,-.03,-.01,.08,.06,.07,.26,.12,-.14,-.21,.08,.18,.14,-.03,-.09,-.18,.02,-.06,.21,.19,.09,.02,-.01,-.26,-.03,.05,-.04,0,-.02,-.05,-.05,-.01,-.01,.07,.08,.06,-.11,.05,-.07,-.01,.16,.14,-.12,-.09,-.18,.07,.11,-.14,.12,0,.05,.07,-.27,-.05,-.11,-.16,.01,-.22,.05,-.06,.04,.22,-.08,-.04,-.03,.1,-.03,0,.07,.06,.05,-.01,-.08,-.09,-.13,.04,-.17,-.16,-.11,.14,.06,.09,.03,.32,-.04,-.04,-.31,.16,-.22,-.12,.2,.12,.1,.11,.08,.03,.02,.16,-.06,.15,.01,.02,-.02,-.18,-.07,.11,-.07,.03,-.29,.09,.02,0,.05,.14,.13,-.03,.07,-.08,0,-.05,.12,.03,.05,.07,.11,.22,-.08,-.27,.08,.1,.05,-.27,.12,-.44,-.03,-.11,.15,.06,.24,.01,-.17,.09,.17,.16,.19,-.09,.11,-.06,.01,.08,.15,-.11,.16,-.08,.16,.03,-.13,.13,-.07,-.33,.06,.09,.01,.13,-.11,.06,.08,-.03,-.02,.05,.21,-.02,.09,.04,.01,-.03,-.14,.15,-.21,-.25,0,.13,.11,.08,-.1,.07,-.04,.1,.09,.11,-.01,-.08,-.04,-.17,-.18,.16,-.15,-.05,.15,.04,.2,.04,.02,.1,.02,-.02,.08,.05,.03,-.01,-.02,.13,-.06,.17,-.01,.12,-.06,-.04,-.03,.14,.06,-.08,-.02,.06,-.04,-.22,-.01,-.03,-.05,-.2,-.04,.1,-.02,.03,.06,.09,-.1,-.29,.06,.05,.15,.08,.1,-.17,-.02,.06,.21,-.02,.08,.03,-.05,.02,.12,.22,-.15,.13,.18,.07,.12,-.21,.22,-.17,-.31,.13,-.26,.13,-.27,.11,-.33,0,-.06,.1,.06,.12,-.06,0,.01,.09,-.04,.07,-.04,-.1,.21,.18,-.21,.17,.15,0,-.07,.2,.13,.07,.07,-.11,-.06,-.01,-.11,.1,-.28,.17,.13,-.01,.08,.03,-.07,.08,-.07,-.16,-.03,-.08,.03,.15,.13,-.14,.11,.12,.09,.12,.1,.12,-.08,.01,.09,-.1,.02,.15,-.06,-.15,.19,-.16,-.01,-.09,.12,-.14,.06,.18,.09,.12,.1,.07,-.05,-.03,.11,.01,-.04,-.18,-.29,-.05,.1,.01,.09,-.03,-.18,.14,-.09,-.03,.06,.14,-.15,.04,.05,-.02,-.07,-.28,-.29,-.12,.02,-.27,-.12,-.04,.03,.02,-.06,.06,-.04,-.19,-.01,-.03,-.01,.12,.03,.09,.13,.18,.18,.14,-.12,.01,.14,.08,-.03,.08,.3,-.03,.04,-.09,-.18,-.17,.16,.18,-.01,-.15,-.23,.1,-.16,-.05,-.12,-.03,.09,.12,-.06,.15,.13,-.08,-.02,-.01,.01,.12,.06,-.29,.23,-.01,-.01,.07,-.1,-.19,.08,.05,.07,-.22,-.12,.21,-.02,.21,.09,.02,0,.06,-.37,.07,.05,.04,-.06,-.04,-.01,-.02,.06,-.01,.09,-.08,.15,.13,.17,.15,.02,.06,.16,.19,-.13,.02,-.09,-.16,.25,-.15,.17,-.03,.17,-.02,.15,.12,.04,.05,.01,.03,-.02,-.03,.17,.16,-.2,.01,-.26,-.06,-.02,-.21,-.01,-.08,-.02,-.03,.09,.1,.16,-.03,-.38,.17,.15,.15,-.3,-.02,.18,-.19,.12,-.07,.09,-.29,.11,.12,.2,-.03,-.09,-.14,-.15,.26,-.05,.14,-.29,-.07,-.12,-.32,-.06,.1,-.2,-.02,.14,.15,.09,.12,.16,.04,.15,-.03,-.14,.17,.06,.2,.1,0,-.11,-.08,-.04,-.07,-.08,.08,.05,-.34,.15,.1,.02,.16,-.04,.03,-.03,.07,.17,-.31,.02,.12,.15,-.13,-.15,-.09,-.09,.12,.14,.14,-.01,.11,.1,.03,.17,-.21,.03,0,.05,.08,-.29,.07,.13,.08,-.13,-.02,-.08,-.3,-.33,.05,-.02,-.01,.02,-.05,-.03,.09,.21,.19,.18,.03,.01,-.07,-.13,-.32,.09,.11,.17,-.16,-.32,-.22,-.28,.29,.18,-.27,.13,-.12,-.15,.03,-.09,-.25,.16,-.04,-.12,.21,-.26,.22,-.23,.02,.23,-.06,.01,-.04,-.06,-.26,.11,-.01,.07,-.17,.2,-.01,.27,-.25,-.1,.21,.1,-.22,-.04,-.05,-.24,-.31,.21,-.1,.01,-.27,.11,-.03,.1,.05,.21,.18,.1,.19,.08,.11,.12,-.05,-.26,-.04,-.16,.08,-.09,.14,.08,-.04,.08,.2,-.14,.18,.06,.06,0,0,.1,-.33,-.1,-.01,-.04,-.05,.05,.21,.16,.09,.16,.03,-.16,.14,.23,.14,-.06,-.04,.01,-.1,-.09,.11,-.06,.19,-.26,-.06,.09,.03,-.04,.17,-.09,-.03,.05,.08,.07,-.07,.2,.04,0,.09,.19,.05,.08,.11,.26,.04,.06,.02,.04,.16,.06,-.07,.01,.04,.09,.05,.3,.09,.03,.2,.02,0,-.19,.04,.1,.01,.14,.03,.34,-.13,.07,.03,.06,.14,.03,.13,.07,-.1,-.06,-.22,.23,.11,.15,-.03,-.02,.17,0,-.05,.04,.09,-.11,-.11,.2,.21,-.19,.09,.03,.05,0,.02,-.02,.12,.04,-.04,-.09,.05,-.16,-.21,.24,-.05,-.15,.06,-.18,.12,.07,.08,.04,.01,0,-.3,-.02,.17,.11,.07,.05,.04,-.4,.02,.01,-.02,-.07,.16,-.28,.05,-.14,-.09,.07,.05,.28,0,.01,.14,-.11,.2,-.17,-.1,0,.04,.09,-.14,0,.08,.04,-.12,-.04,.07,.1,0,.15,.16,.07,.16,.14,.09,.03,.13,.04,0,.13,.05,.21,.04,.07,.13,.16,.1,.08,.09,-.19,.04,.04,-.07,.11,0,.08,.08,-.14,.19,.14,.18,.14,-.15,-.13,-.02,-.1,.11,.22,.07,.06,.13,.11,-.06,.04,.07,.18,-.04,.02,.06,.2,-.37,-.02,-.03,-.02,0,.07,.12,.06,-.19,.01,.2,.08,.19,.22,.07,.2,.12,.13,.06,.17,-.09,.03,-.05,.13,-.02,.14,.13,-.25,.05,.15,.12,.18,.17,-.09,-.04,.22,-.06,.11,0,.13,-.01,-.04,.04,.15,.19,-.04,.14,-.28,.17,.01,-.12,.11,-.02,.04,.01,.11,.06,.08,0,.16,-.06,.19,.17,.06,0,.04,.05,-.16,.07,.17,.08,-.18,-.01,.11,-.05,.12,.02,.07,.14,-.3,.06,.17,-.01,.12,.13,.07,-.15,.04,.12,.03,.2,.07,.14,-.11,.1,-.18,0,-.15,.13,.08,.08,-.11,.11,.14,.19,-.09,-.01,.15,.08,.1,.11,.06,.21,.05,.09,.04,-.24,-.05,.12,-.08,-.03,-.03,.08,.12,.05,-.02,.18,.03,.23,.12,-.09,.17,.12,.45,.18,.21,.2,.14,-.12,.08,.21,.08,.08,-.01,.08,.03,-.01,.15,-.1,.1,.09,.13,.11,-.04,.13,.24,-.07,-.03,.03,-.07,-.14,-.02,.01,.31,.03,.08,-.03,-.01,.09,.18,-.04,.09,.1,-.03,-.05,.02,.06,.17,.02,.04,.07,.07,.12,-.04,-.1,0,.04,.11,.2,.16,.16,-.05,-.02,.1,-.08,0,-.03,.12,.01,-.08,-.35,.08,-.02,-.12,-.05,.08,.1,0,.1,.05,-.03,.12,.23,-.3,.15,.23,.07,.17,-.16,.14,-.03,.14,.13,.06,.1,.05,.12,-.04,.14,-.15,.06,-.09,.13,0,-.11,-.12,-.17,.21,.04,-.04,-.32,.1,.14,.14,0,.21,-.18,.15,-.02,.02,-.1,-.11,.2,.18,.1,-.02,-.03,-.06,.12,.05,.14,.14,-.14,.06,.17,-.08,-.04,.08,.11,.07,.13,.12,.11,-.09,-.05,.03,-.02,.02,.05,.05,-.05,-.03,.12,.04,.22,.19,.17,.12,-.11,.12,-.04,.07,.14,.18,.11,0,.16,.08,.15,.06,.12,.22,.05,.2,.32,-.04,0,.07,-.3,-.34,.01,.01,-.05,-.01,.23,.14,-.01,-.03,.18,-.02,-.04,0,-.16,.12,-.05,.15,-.04,.13,.07,.07,-.01,.01,-.17,-.08,.01,.26,.09,.11,.1,.1,.09,.06,-.02,.09,.03,.09,.06,.1,.13,.03,.03,-.11,-.03,-.1,.03,.06,-.12,.08,.13,.14,.04,.09,0,.07,.17,.04,-.28,-.17,-.01,.1,.21,.12,-.12,.05,.02,.03,.11,.14,.05,-.08,.07,.02,.04,.09,.09,-.04,0,-.07,-.05,-.05,.21,.03,-.14,.04,.12,.32,.04,.18,-.24,.01,.06,-.26,.1,0,.17,-.06,.01,.12,.18,-.36,-.01,.07,-.12,.08,.14,.19,-.14,.16,.19,.15,.09,.18,.19,-.02,.21,.1,.08,-.1,-.1,.04,-.23,.08,.04,.06,-.1,-.07,-.02,.2,.01,.02,-.17,.15,-.03,-.27,-.03,.16,.05,.15,-.04,.17,-.03,.01,.07,.12,-.05,-.01,0,.1,.12,.05,-.16,-.06,-.17,.16,.19,-.07,.16,.07,.11,-.13,.09,.07,-.18,.03,.19,.15,-.18,.04,.15,.19,-.08,.02,.04,.2,0,.04,.1,.09,.04,-.16,.09,-.07,.06,-.03,.08,.05,.01,.13,.08,.06,.11,.11,.21,-.12,.09,-.32,.24,-.03,.09,.1,-.02,.07,0,-.05,-.1,.01,-.02,.12,-.01,.12,.01,.15,.1,-.08,-.07,-.07,.09,-.26,.09,0,.28,.16,-.28,.06,0];export{a as rvalData};
