const a=[.15,-.16,-.16,.17,-.23,.05,-.13,-.05,-.29,-.13,-.19,-.03,-.06,.11,-.3,.27,-.11,-.02,-.04,.14,-.06,-.15,.04,-.23,-.39,-.23,-.1,.19,.19,-.06,.12,-.03,-.11,.08,-.05,-.03,-.17,-.31,-.1,-.02,.06,-.2,0,.17,.05,-.26,-.09,.06,.04,-.14,-.36,.06,-.12,-.24,.04,-.24,-.29,.07,0,-.13,.08,-.08,-.17,.21,.03,.02,-.19,-.31,-.13,.03,.12,-.06,.05,.16,-.19,-.04,.07,.06,-.35,.1,.1,-.1,-.09,-.1,-.2,-.08,-.2,-.18,.17,-.34,.07,-.09,-.19,.22,-.09,.04,.2,.16,.09,.02,.04,-.23,-.16,.11,-.15,-.02,.07,-.08,-.14,-.17,.05,-.07,-.09,.29,-.06,-.16,-.15,.03,.06,-.31,.01,-.14,-.19,-.05,.13,-.25,-.09,-.03,.12,-.19,.03,.07,-.04,0,.04,-.01,.22,-.01,.03,.08,-.08,.02,-.09,-.23,.07,-.11,.09,.19,-.14,-.05,-.21,-.19,-.04,.01,-.02,.09,.14,.06,-.07,-.33,.11,-.16,.09,.03,-.26,.01,.09,.06,-.01,-.19,.05,.08,.1,.04,-.04,.05,-.12,-.01,.04,-.16,-.02,-.05,.19,-.17,.07,.08,-.01,.22,.02,.04,.07,-.08,-.13,-.2,-.09,-.16,-.05,-.3,-.03,-.03,-.34,-.14,-.22,-.03,.11,.03,.09,-.04,.07,-.01,.03,-.27,.03,-.25,.08,.2,-.11,0,.04,-.13,-.02,-.09,-.02,-.17,-.1,-.18,.04,.06,0,-.03,-.15,.16,-.2,-.16,-.24,.04,-.19,-.19,.01,-.18,.07,-.3,.05,.31,-.14,-.02,-.06,.03,-.01,.06,-.01,-.03,.02,.05,-.11,-.15,.05,-.27,-.12,-.22,.09,.08,-.29,-.09,.3,-.18,.09,-.21,-.17,-.24,.02,-.04,-.21,-.2,-.29,-.15,-.03,.01,-.19,.06,.09,.08,-.38,.24,.06,-.17,-.08,-.23,-.07,-.03,-.09,.05,-.08,-.07,-.12,0,-.12,.03,.09,.07,-.16,-.19,-.06,-.06,-.02,.03,.03,.02,.12,-.18,-.15,.18,-.11,.09,-.11,.1,-.09,.02,-.18,.07,-.12,-.06,-.35,-.22,-.14,.05,-.06,.22,-.06,.01,.18,-.03,.2,.05,.04,.1,.06,.19,-.06,-.05,-.03,-.02,-.01,-.12,-.2,-.07,-.11,.18,-.06,.13,-.12,.26,.09,.03,.1,-.42,.06,.13,-.21,-.22,-.32,.1,.08,-.1,-.03,.15,.05,-.22,.11,.15,-.06,.11,-.3,.04,.14,-.04,-.18,-.2,-.1,.13,-.04,-.01,-.14,0,.08,-.08,.28,-.08,-.07,-.07,-.19,-.04,-.19,.01,-.05,-.16,-.04,.17,.12,.03,-.14,.04,-.19,-.25,.13,.01,-.37,-.15,-.2,-.03,-.16,.15,.22,-.23,-.01,-.02,-.14,-.2,.1,.11,.05,-.3,.01,-.05,-.43,-.19,-.15,.03,.06,.23,.03,.04,-.35,-.09,.03,-.26,-.11,-.12,-.17,-.11,-.1,-.16,-.06,-.24,-.17,.04,-.09,-.07,-.27,.07,-.16,-.05,.21,.14,-.05,.25,.02,-.15,.06,-.27,-.21,-.06,.16,.07,.13,-.1,.31,-.19,.18,-.23,-.07,-.19,.02,0,.11,-.2,-.09,-.3,-.12,-.02,-.11,-.27,-.14,-.29,-.06,.18,-.2,.17,.12,-.14,-.14,-.06,-.21,.25,-.16,-.22,-.18,0,-.22,.23,.17,.08,-.2,-.26,-.18,.19,.25,-.13,-.07,.12,-.15,.12,-.1,.2,-.08,.21,.06,.01,.08,-.27,.14,-.18,.01,.08,.17,.05,.12,-.04,-.18,0,.02,-.16,.04,.23,.05,.1,.02,0,.2,-.07,-.22,.02,-.01,-.02,.11,-.05,.36,-.01,-.2,.18,.09,-.19,-.17,-.13,-.14,.04,.18,.2,.21,.04,-.23,.02,-.02,-.04,-.04,.05,-.01,.06,.04,-.2,-.16,-.2,-.37,.14,-.21,-.16,.06,.07,.05,.06,.13,.01,-.15,.24,-.16,-.28,-.16,.02,.01,-.15,-.11,.12,-.19,-.04,-.03,.25,-.18,-.27,0,0,-.21,-.24,-.22,.01,-.21,-.07,.18,.05,.15,.18,.09,-.18,-.04,-.08,-.02,-.15,-.17,-.04,.02,.12,-.02,.09,.06,.16,.06,.03,-.09,.13,-.15,0,0,-.04,-.03,.11,-.1,-.26,-.19,.2,.08,-.02,.22,-.07,-.01,.17,-.32,-.2,.22,-.18,-.09,-.17,.09,.26,.12,-.15,-.18,.02,-.41,.05,.04,-.13,-.19,-.04,-.18,.15,-.06,-.02,-.05,.12,-.24,-.13,-.29,.08,-.03,0,-.09,.19,-.14,-.25,.22,.13,-.01,.18,.12,-.13,.05,.13,.12,-.19,-.23,-.13,.16,.08,.19,-.01,.03,-.19,-.01,0,-.24,.28,-.09,-.17,-.3,-.08,.22,.03,-.05,-.16,.11,-.12,-.22,.21,.02,-.18,-.12,.04,-.17,.01,-.01,.13,-.15,-.05,-.18,-.05,-.04,0,-.03,.05,.12,-.24,.28,-.07,-.03,-.04,.01,.17,-.2,0,.11,.1,-.19,.01,.05,-.02,-.12,.08,-.24,-.2,-.02,-.08,.09,.04,-.21,.06,-.25,-.08,.08,-.09,.01,-.11,.04,.07,-.23,-.45,-.12,-.33,-.15,-.01,-.14,.01,.32,.28,-.15,-.03,.1,.14,-.13,-.12,-.11,.09,-.12,-.06,.07,-.12,-.19,-.1,.13,.1,.05,-.06,-.03,.01,-.16,-.31,-.15,.13,-.16,-.09,.35,-.04,-.18,-.02,.08,-.17,-.06,-.2,-.2,.23,.14,.04,.04,1,-.07,-.07,-.17,.17,.19,.09,.18,-.16,.08,-.27,-.01,-.28,-.18,-.15,.09,-.09,.12,.11,.17,-.22,.11,-.09,.02,-.18,-.07,-.14,.01,.01,.1,-.1,-.03,.2,.06,-.2,-.08,-.07,-.07,.07,.06,.07,-.25,-.2,0,.06,.15,.04,-.19,.03,-.19,-.21,.09,.11,.18,.15,.16,.07,.12,.07,.1,.06,-.14,.12,.17,.13,.16,-.04,-.08,.05,-.04,-.12,-.02,-.11,-.27,.05,.17,-.19,-.08,-.01,-.1,.09,.04,.01,.08,.14,.13,.07,-.14,-.26,.03,-.1,.15,.07,.05,-.16,-.14,.13,.07,.11,.08,-.02,.2,.07,-.12,.07,.02,.23,.2,-.1,.14,-.16,.1,-.15,-.1,-.26,.02,-.18,-.25,.09,-.07,-.15,-.24,-.23,-.21,.22,-.01,.04,-.12,-.23,.04,.08,-.01,-.11,.28,.18,-.11,-.13,-.28,.01,-.03,-.14,.11,0,.1,-.1,-.16,.14,-.26,0,-.15,-.14,-.02,-.07,-.05,-.07,-.05,-.05,.19,-.02,.06,.15,-.31,.11,-.17,-.11,-.07,-.02,.01,-.07,-.23,.09,-.03,-.03,-.1,.03,.23,.07,.06,-.18,-.02,.09,-.01,.03,-.09,.14,-.02,-.04,.08,-.09,-.09,-.03,.04,.19,.1,-.11,.07,.1,.17,.06,-.23,-.18,-.01,-.02,.04,-.12,-.18,.03,.2,.16,-.27,.08,-.04,-.02,.08,0,-.07,-.19,.09,.13,.19,.07,-.18,0,-.15,-.1,-.27,-.18,-.01,.05,.22,-.15,-.08,.14,.12,.12,-.22,.09,.17,-.09,.01,-.1,-.16,-.05,-.22,-.12,0,-.03,.19,-.14,-.05,0,-.05,-.25,-.06,-.03,.07,-.26,-.15,.02,.08,.01,-.04,-.09,.02,.1,-.2,.08,-.07,-.22,.08,-.02,.04,.05,.1,.05,-.13,0,-.12,-.18,.04,.41,-.12,-.04,-.17,-.11,-.01,.06,-.15,-.11,-.12,-.01,.26,-.34,-.13,-.17,-.06,-.21,.02,.12,0,-.03,.04,.08,.18,-.05,-.13,-.27,.08,-.17,.02,-.28,.11,.16,-.03,.15,-.06,-.36,.15,-.04,.24,-.04,-.15,-.01,-.14,-.25,-.18,.18,.03,-.01,-.17,.05,-.31,-.13,-.14,.08,-.19,-.04,-.16,.04,.11,-.01,.06,-.14,-.23,.13,.08,.18,.05,.05,-.38,-.21,.1,0,-.16,.08,-.18,-.19,-.16,.05,-.03,.06,.06,.02,-.22,.13,-.23,.02,-.18,-.12,.25,.02,-.06,.12,.08,.05,-.15,-.22,.05,-.15,.17,-.12,.01,0,-.18,.1,-.23,-.18,-.05,.27,.13,-.2,.13,-.15,.07,-.12,.13,-.21,-.23,.03,-.12,.09,-.02,.16,-.26,.11,-.23,-.12,-.35,.26,.14,-.18,-.15,.08,.07,.12,-.11,.02,.12,.16,0,-.08,-.08,.01,-.23,-.19,-.44,.11,.16,.08,-.22,-.16,-.13,.14,.09,-.08,.11,-.08,0,.1,-.18,-.05,.13,.14,.03,-.31,-.05,0,.05,-.12,.18,-.17,-.29,.12,-.05,-.19,-.07,.08,-.14,.07,-.21,.02,-.18,-.16,-.02,.03,.13,.03,.08,.13,-.07,.1,-.3,-.17,-.3,.06,-.2,.01,.13,.05,-.17,-.22,-.11,-.08,.15,-.02,.09,-.2,-.23,-.17,-.15,-.24,-.23,-.07,.12,-.34,.03,.16,-.21,-.21,-.13,-.1,.18,-.16,.08,.16,-.03,-.21,-.21,.01,-.07,.08,-.04,.16,.14,.06,-.19,-.08,-.1,-.03,.04,-.07,.06,.09,.19,.03,.11,-.02,0,-.01,-.18,.03,-.3,-.12,-.27,0,.01,-.08,.28,.33,.07,-.06,-.16,-.26,-.03,.04,.14,.01,.13,.06,-.05,-.13,-.05,0,.16,.09,-.13,-.03,.06,-.07,.09,-.16,-.05,-.4,-.03,-.04,.1,.16,-.02,-.02,-.02,0,.02,0,-.03,-.24,-.18,.01,-.07,-.22,.12,-.13,.1,-.02,-.21,-.07,.23,-.17,-.13,.11,.22,.18,.07,-.05,-.27,-.33,-.06,.04,.02,.1,0,-.01,-.08,-.06,.15,-.25,.13,.02,.04,.14,-.15,.01,.04,-.03,0,.01,-.06,-.09,.04,-.29,-.08,.11,-.24,.05,-.27,-.2,-.03,.14,.01,-.1,.02,-.18,.15,-.23,.1,.07,-.06,-.01,-.02,-.06,.2,.2,-.06,-.34,-.24,-.16,-.03,.05,.02,-.1,.09,-.03,-.06,.05,.03,-.22,.15,.09,-.18,-.2,.07,.11,.06,-.18,-.25,.05,-.14,-.14,-.09,.09,-.01,-.19,.02,.02,.05,-.32,-.03,-.11,.17,.02,.06,-.26,-.2,.01,.05,-.06,.15,-.06,-.07,-.29,-.04,.06,-.21,.13,.19,-.03,-.23,.02,-.01,-.31,-.34,-.17,-.03,-.06,.07,.05,-.24,.09,-.07,-.3,.06,.07,-.1,-.1,-.17,.08,-.12,-.01,-.05,-.02,.18,-.21,-.08,-.08,-.22,.1,.08,.01,-.04,-.16,-.04,.06,-.16,-.13,-.02,-.05,.03,-.02,-.11,-.05,-.06,0,-.13,-.15,0,.04,-.1,-.04,-.02,-.05,-.02,.1,-.11,-.28,-.11,0,-.08,-.12,-.34,.15,-.03,-.2,-.34,-.18,.07,-.08,-.12,-.02,-.14,-.34,.16,-.07,-.22,-.08,-.16,-.15,-.03,-.2,-.11,-.22,-.14,.01,.1,.08,-.33,.15,-.2,-.04,-.1,-.27,.16,.09,-.12,-.09,-.2,-.07,-.1,0,-.14,-.26,-.13,-.08,.03,-.24,-.18,.01,0,-.07,-.15,-.12,.03,-.15,.05,-.05,-.29,-.16,.16,-.1,-.09,0,-.22,-.11,-.25,.03,-.1,.2,.02,-.17,-.21,-.02,-.18,-.16,.17,-.28,-.2,-.04,-.21,.13,.18,-.08,-.11,-.22,.23,-.17,.18,.1,-.12,-.08,.02,-.01,-.12,-.15,-.12,-.01,-.03,-.01,-.28,0,-.13,-.09,.31,-.03,-.2,.21,-.11,-.11,-.24,-.17,-.14,-.09,.04,-.12,.04,-.19,.03,.08,.12,-.16,.1,-.02,0,-.1,-.06,-.03,-.19,-.13,-.1,-.31,.12,-.14,-.29,-.26,-.23,-.2,-.15,.09,.2,.18,-.12,-.08,.13,.06,-.13,-.18,-.02,-.12,-.17,-.28,.03,-.29,-.17,.08,-.25,-.11,-.18,-.19,-.23,.12,-.1,.07,.19,.07,.02,-.2,.03,-.17,.11,-.21,-.02,-.07,.06,-.07,.18,.13,-.16,.3,-.15,.07,-.06,-.02,-.11,-.23,-.15,-.15,-.08,-.02,-.06,-.07,.1,.18,-.07,0,.01,.33,-.1,-.22,.13,.01,-.11,-.16,.05,-.26,-.16,.04,-.14,-.06,-.02,-.01,-.16,-.12,-.1,-.19,.08,-.17,-.29,.05,-.04,-.11,.06,.06,-.24,-.1,-.29,-.04,-.02,-.18,-.12,-.17,-.14,-.14,.15,.02,-.06,.07,-.21,.04,-.05,.14,-.3,-.13,-.12,-.15,-.23,-.16,-.17,-.11,-.18,0,.05,-.16,.16,.12,.09,-.12,-.16,-.14,-.07,.03,-.07,0,-.23,-.1,.26,.03,.16,.09,.03,-.24,.22,-.18,-.12,-.1,-.01,-.12,-.09,.12,-.06,.11,-.03,.18,-.19,-.22,.19,-.37,.06,.16,-.12,-.01,.11,.08,-.19,-.23,.02,.1,-.21,.01,-.25,-.15,-.25,.16,-.21,.13,-.16,-.13,.05,.01,-.22,-.34,-.13,.25,.06,.22,-.09,.01,-.09,-.17,-.1,-.09,.23,.08,-.08,-.01,-.04,-.01,-.04,.12,-.17,-.14,.05,-.25,-.1,-.1,.03,.15,-.21,-.21,-.1,.2,-.14,.01,-.07,-.05,-.09,-.32,-.25,.13,-.09,-.13,-.06,-.1,-.2,.15,.06,-.23,.14,.05,.25,-.2,.2,-.2,.14,.02,-.11,-.06,-.25,-.15,.01,.01,.1,.08,-.17,-.16,-.19,.06,-.09,-.16,-.17,-.15,-.09,-.08,.06,.04,-.15,.07,-.04,-.06,.03,-.04,-.26,-.14,.13,-.4,-.07,-.21,-.19,.04,0,.03,-.22,.08,.16,.06,.1,-.01,-.17,-.17,-.14,-.02,.02,-.1,-.07,-.23,-.32,-.08,-.05,-.22,-.25,.04,-.04,.18,-.04,-.07,-.07,-.19,.03,-.21,.08,-.03,-.19,.24,-.24,-.08,-.16,.1,-.17,.09,-.13,-.21,-.07,-.08,-.15,-.2,-.37,-.16,-.18,-.23,.09,-.15,0,.02,.13,-.25,-.23,-.3,-.2,-.3,.12,-.12,-.21,.17,.16,-.22,.04,-.14,.1,-.21,-.12,-.06,-.27,-.21,0,-.05,-.02,.16,-.25,.28,0,-.12,-.17,.2,-.08,.08,.02,.02,.01,-.28,-.1,.16,-.16,.03,-.09,-.12];export{a as rvalData};
