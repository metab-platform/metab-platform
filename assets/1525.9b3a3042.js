const a=[-.09,.17,-.01,-.06,-.08,-.3,.03,-.22,.1,-.1,.11,.02,.08,.07,.14,-.15,-.1,-.01,.08,.03,-.01,.01,-.11,.24,-.01,-.06,.2,-.02,.01,.21,-.2,.1,-.04,-.18,.05,.38,.03,.17,.03,.16,.09,-.04,-.05,-.24,-.04,.16,.15,-.21,.03,.01,-.06,-.11,.05,.04,-.25,.14,.03,-.19,-.18,.03,-.11,-.1,-.02,-.18,-.11,0,-.1,.18,-.14,-.01,.27,.07,-.26,-.08,-.05,.17,-.02,-.15,0,-.06,.2,-.05,.01,-.09,-.13,.18,-.07,.13,.05,.06,-.33,.01,-.08,-.12,.05,-.17,.13,-.02,-.27,-.21,-.02,-.05,-.17,-.04,-.18,.1,.32,.29,-.04,0,.08,-.12,.05,.01,-.15,-.02,-.11,.01,-.13,-.05,.19,.09,-.05,.05,-.01,-.06,-.1,-.35,.05,.07,-.19,-.14,.04,-.12,.05,-.17,-.22,-.04,.06,-.12,-.18,-.13,-.16,-.07,-.13,-.04,.03,-.4,-.11,-.12,-.04,-.08,-.02,.08,-.15,-.37,-.02,-.13,.11,.21,-.24,-.16,.18,-.24,-.13,-.16,-.05,.06,-.18,.01,-.17,-.12,-.31,-.27,-.03,.06,-.08,.21,-.26,-.01,.02,.09,-.14,.15,-.12,-.02,.02,-.06,-.21,-.24,.04,-.2,.22,-.14,-.16,.01,-.14,-.1,.01,.1,.14,-.07,.01,0,.02,-.21,-.02,-.24,-.16,.09,-.18,.14,-.06,.05,-.14,-.04,.31,-.16,.14,.17,-.14,-.19,-.13,-.02,-.06,.05,-.2,.06,-.27,-.04,.24,-.1,.03,.08,.15,-.17,.12,.15,-.19,.15,-.21,.17,-.17,-.29,-.1,-.14,-.01,-.14,.12,-.25,-.2,.01,-.2,-.23,-.18,.52,.02,-.06,.13,.09,.18,-.36,-.05,-.19,-.39,-.16,.02,-.1,-.04,.06,-.01,-.14,-.03,.1,-.04,.4,.16,-.1,-.01,-.01,-.22,.24,.12,-.04,-.21,.06,.34,.01,-.15,.02,-.08,-.11,-.11,-.06,-.11,-.08,.15,-.01,-.05,-.09,-.08,-.02,.1,.26,.12,-.13,-.09,-.14,-.44,.19,-.15,-.02,.06,-.1,-.3,-.11,-.06,-.37,.06,.05,-.08,-.12,.1,-.05,-.1,-.23,-.07,-.29,-.02,-.17,.13,-.09,.08,.13,.01,.11,-.02,-.13,-.05,.18,-.18,-.11,-.02,.1,.09,.05,.12,-.31,-.02,-.16,-.11,-.16,-.16,-.18,.1,.17,-.15,-.03,.01,.04,.11,.03,-.26,.33,.08,.01,-.16,.05,-.33,.06,0,.14,.14,-.24,-.15,-.15,-.13,-.04,.02,-.38,-.02,.27,.13,.07,-.08,.2,-.09,.11,.06,-.04,.07,.17,.27,.08,.09,-.02,.03,.14,-.26,.06,-.08,-.31,.03,.07,-.11,-.02,.03,.02,-.04,-.24,.06,.05,-.28,.05,-.32,-.03,-.17,.02,-.25,.03,-.14,.12,-.04,.27,-.01,.05,-.02,.22,-.17,-.13,-.13,-.23,-.07,.04,-.24,.12,0,-.08,-.04,-.09,-.22,-.08,-.11,.07,.09,-.28,.04,-.04,.06,.08,-.02,-.1,.06,-.1,.03,-.41,.09,0,-.35,-.08,.02,-.08,.05,-.19,-.15,-.17,.05,.02,-.02,.07,.37,.04,-.14,-.14,-.4,-.01,.05,.03,-.01,.22,-.09,.14,-.17,-.15,.06,-.12,-.14,-.12,-.12,.08,.01,-.01,.12,-.11,-.13,.03,-.03,.18,-.07,-.29,-.22,-.13,-.03,.16,-.04,-.05,-.44,-.02,0,-.27,-.15,-.22,-.06,-.16,.06,-.04,-.27,-.1,-.18,-.06,-.1,-.09,-.21,0,-.23,-.15,-.05,-.03,.21,-.12,-.14,-.08,-.04,-.12,-.11,-.07,-.31,-.09,-.34,.04,.02,-.33,.04,.12,-.05,-.05,-.13,.12,.1,0,.29,.06,.05,.14,-.06,.04,.18,-.09,.12,.11,.02,.01,-.18,-.09,.06,.34,.25,.04,-.26,.16,.06,.09,.12,-.06,-.15,.02,0,.14,-.25,.08,-.06,-.23,-.15,-.19,-.09,.04,-.03,-.11,-.09,.05,.21,.03,.26,0,-.12,-.02,.07,.07,-.29,-.03,-.16,-.03,-.09,-.12,-.02,.2,-.28,-.22,-.02,.03,.02,.03,-.03,-.24,.12,-.06,-.01,-.18,.03,-.15,-.07,-.07,-.13,-.09,-.25,-.15,-.07,-.45,-.15,-.08,.05,.22,.07,-.14,-.03,.05,-.01,-.17,-.08,.1,-.32,-.05,0,-.03,-.04,-.22,-.41,-.04,.1,-.11,-.22,-.01,-.16,0,0,.06,.13,.18,-.04,.06,-.05,-.08,-.04,-.4,-.05,-.06,.09,-.18,-.11,-.02,.13,-.21,.13,.21,-.24,-.27,-.1,-.02,-.13,.1,.08,-.32,.04,.09,-.33,-.08,.03,-.04,-.05,-.21,.24,0,-.41,.19,-.12,.04,.02,-.23,.09,-.09,-.09,-.12,-.14,.02,-.12,.15,.04,-.02,-.02,.18,-.06,-.11,-.24,-.04,.13,-.21,.01,-.2,.07,-.01,-.09,-.11,.05,.16,-.01,0,.06,.2,-.16,-.06,.07,-.13,-.03,.13,-.18,-.2,.06,-.06,-.02,.13,.15,-.09,.11,.15,.09,-.03,.1,.08,-.14,-.27,-.11,-.04,-.01,-.16,-.04,.03,-.05,-.01,-.15,-.05,.01,.09,0,-.12,-.03,.16,-.12,.09,.06,-.12,-.41,-.43,-.08,-.14,-.39,-.13,-.02,-.12,-.06,-.33,.04,-.04,-.09,-.11,.1,-.16,-.14,-.13,-.27,.18,-.07,-.27,-.16,.23,-.04,.07,0,-.13,.12,-.16,.08,.02,.12,-.09,-.06,-.08,-.09,-.05,-.42,.13,.04,-.17,-.04,-.21,-.08,-.29,.16,.07,.01,-.01,-.12,.01,-.11,.08,.28,.04,.15,-.33,.05,.1,-.24,.01,-.27,-.1,.12,.14,.25,-.06,-.09,.16,-.17,0,.15,-.22,.22,-.05,.36,.06,-.12,.1,-.2,.04,.02,.04,-.11,0,-.44,-.37,-.11,-.12,-.12,.02,-.07,.09,-.33,-.41,.17,-.25,-.2,-.16,-.04,-.07,.07,-.43,-.36,-.38,.1,-.14,.06,-.11,.27,.08,-.01,-.02,.17,-.04,-.29,-.03,-.2,-.12,-.04,.14,.12,-.28,-.12,.1,.04,.05,.09,-.03,.04,.17,-.02,.16,-.13,.05,-.05,-.23,-.11,-.13,-.09,.18,.06,-.2,-.05,-.27,-.08,-.22,-.19,.05,-.41,.19,.14,-.03,-.19,-.04,-.14,.06,-.1,-.34,-.24,-.01,.08,-.03,-.12,.03,-.11,-.09,-.08,-.12,-.15,-.2,-.16,-.12,-.17,.01,-.08,.01,.15,.03,-.18,-.16,-.22,-.07,-.14,-.01,-.1,-.2,-.04,-.08,-.01,.1,-.2,.01,-.2,-.1,-.14,-.23,.04,.04,.3,-.49,.21,.05,-.1,.26,-.07,-.19,-.21,-.03,.03,-.19,.06,-.12,-.05,-.11,-.2,-.23,-.14,-.22,-.02,-.23,-.24,-.16,.26,-.35,.17,-.09,-.21,.12,-.18,-.05,-.17,-.15,-.12,.04,-.07,-.04,.15,-.28,-.04,-.13,-.15,.28,-.2,-.1,-.14,-.11,-.35,-.13,-.07,.02,.04,-.19,.07,-.2,.01,.02,-.02,.11,-.15,.06,-.12,-.15,.05,-.18,.01,-.19,-.03,.09,-.14,.06,.27,.05,.06,-.41,-.17,.05,-.13,0,-.08,.04,0,-.07,-.01,.08,-.06,-.23,-.32,.01,.29,-.1,.12,0,-.16,-.31,.04,.12,0,.24,-.28,-.14,-.32,.11,-.1,0,.12,-.2,-.27,.02,-.06,.05,.02,-.02,-.15,.07,.09,0,0,-.09,.19,-.11,-.07,-.07,.14,-.12,-.11,-.16,-.04,-.06,-.24,.21,-.15,.13,0,-.07,-.04,.1,-.02,-.08,.13,-.27,-.15,.15,0,.17,0,0,-.23,-.06,-.09,.17,-.12,-.15,.08,-.13,.09,.13,-.39,.14,-.26,-.03,.02,.16,.06,-.11,-.04,-.34,-.17,-.35,-.05,-.08,.18,-.23,-.21,-.12,-.02,.18,-.01,.01,.09,-.37,-.2,-.07,.15,-.34,-.1,-.3,-.1,-.03,-.1,-.11,-.09,-.16,-.01,.04,-.02,.16,-.06,-.11,-.11,-.16,-.03,-.14,-.08,.06,.1,.02,.09,.13,-.29,.02,.12,-.23,.1,-.03,.03,.09,-.03,.19,.09,-.15,-.16,.01,-.02,-.15,-.2,-.04,-.14,-.04,-.05,-.1,-.03,-.01,-.31,-.15,-.3,.01,.06,-.24,0,-.07,.13,-.23,.18,-.27,.03,-.1,-.06,-.28,-.21,-.09,-.03,-.12,-.08,-.4,.06,.23,-.46,-.4,.06,-.27,.06,-.25,-.1,.01,.05,.01,-.14,-.14,.04,-.04,.14,-.09,-.12,-.02,-.21,.02,-.04,-.19,-.07,-.09,-.11,-.37,-.07,.08,-.09,.12,-.22,-.11,0,-.02,.05,-.19,.22,-.18,.2,.08,-.1,-.1,.15,-.29,-.12,.19,-.08,-.14,.06,-.18,-.11,-.01,-.19,-.29,.18,-.11,.05,-.07,-.03,.12,.16,-.22,-.16,-.09,0,-.26,-.34,-.21,-.1,-.13,-.18,-.14,.02,-.08,.04,.19,.05,.21,-.13,-.31,.06,0,-.09,0,-.05,-.04,-.15,.02,-.27,-.05,.08,-.13,-.01,-.2,.03,.04,-.3,-.21,.16,-.04,.13,.28,-.09,-.02,-.17,-.14,.04,-.16,-.19,-.03,.17,-.08,-.12,.15,.14,.06,.04,.12,.23,-.2,.08,-.04,-.15,-.11,-.02,.02,.07,-.11,-.05,-.21,-.2,-.09,-.04,-.09,.11,-.12,-.07,-.11,-.04,-.3,-.04,.19,-.15,-.04,.02,.06,-.11,-.05,-.12,-.09,-.23,-.11,.14,-.16,-.21,.11,-.08,-.01,.23,.07,-.17,0,-.23,-.04,-.29,-.21,.03,.06,-.25,.02,-.06,-.06,-.2,-.16,.2,.11,-.01,.2,-.07,-.15,.14,-.16,-.04,-.01,-.17,-.21,-.06,.08,-.04,.12,-.08,-.02,.01,-.29,-.03,-.14,.01,0,.07,.16,.21,.03,.11,-.23,.02,-.37,.03,-.08,-.11,-.11,-.24,.08,-.27,.14,-.15,-.11,-.07,-.1,.19,-.16,.03,.05,-.06,-.1,-.01,-.03,.02,.06,.01,-.17,.03,.11,.2,-.16,-.13,.15,-.17,0,-.09,-.06,.07,-.02,-.32,-.06,-.09,.01,-.09,-.12,-.11,-.03,-.22,.19,-.21,.05,.13,-.09,-.17,.06,-.19,.01,.1,-.27,-.22,-.14,-.13,.09,-.15,-.28,.01,.05,.1,-.16,.05,-.05,-.03,-.27,-.1,-.04,.06,-.1,-.27,.02,-.01,.22,-.02,-.12,.07,.05,-.02,0,-.18,.1,-.36,-.32,-.19,.07,1,-.05,-.07,-.15,-.1,.15,-.44,-.03,-.03,-.13,-.04,-.01,-.31,-.02,-.28,-.03,-.03,-.25,.07,-.11,-.01,-.11,-.24,-.04,-.04,.03,-.18,-.17,-.13,.09,-.12,-.3,-.1,.24,-.07,-.14,-.2,.06,.16,.08,-.17,-.2,0,.02,.15,-.12,-.03,.1,-.09,-.1,-.12,.04,-.09,0,-.08,.16,-.21,.03,0,-.17,-.06,-.15,-.08,.07,-.01,.11,-.01,-.12,.08,-.11,.14,-.21,-.01,-.09,.17,.03,-.05,-.33,-.26,-.11,.11,.07,.24,-.15,.01,-.13,-.12,.02,.1,.18,-.07,.08,-.27,-.15,-.13,-.09,-.12,-.05,.17,-.23,.2,-.07,-.15,.12,.18,-.12,-.02,-.03,-.08,-.02,-.09,-.21,-.07,.01,.03,-.15,.01,-.08,-.41,.04,-.15,-.15,-.08,-.24,-.11,-.08,0,-.11,-.43,.18,-.43,.09,-.01,-.26,-.15,-.2,.34,-.01,-.05,-.03,-.02,-.04,.12,-.1,-.06,-.15,-.16,-.14,.17,-.13,-.12,.26,-.12,.31,.04,-.03,-.06,-.04,.34,-.16,.14,.01,-.09,.07,-.2,-.12,.3,.11,-.21,-.12,-.04,-.01,-.03,.18,-.24,-.08,.17,.19,-.08,-.03,-.04,-.1,-.26,-.3,-.09,.15,-.02,-.15,0,.04,-.02,-.01,-.02,.05,-.1,.03,-.05,.17,.03,.18,-.2,.06,-.1,-.1,.01,.04,-.1,-.11,-.15,.05,-.2,.03,-.17,-.11,-.07,-.02,-.18,-.15,-.09,.07,.04,-.09,.08,-.02,-.03,.02,.24,-.03,.05,-.06,.21,.15,.2,-.1,-.06,-.09,-.13,0,.28,-.25,.66,-.17,-.15,-.2,-.14,-.01,.12,-.01,.01,-.06,.09,-.12,.26,.06,.16,-.02,0,-.03,-.04,.2,-.05,-.23,-.11,-.23,-.27,-.14,-.07,-.03,-.08,-.15,-.18,-.01,-.08,-.01,0,-.09,-.4,.13,.36,-.3,-.03,.02,-.24,-.14,-.04,0,-.11,.06,.06,.09,-.12,.19,-.11,.03,-.02,.01,-.39,-.04,-.26,-.05,.09,-.17,-.27,-.3,-.19,-.24,.05,.28,-.24,-.2,-.06,-.13,-.14,.07,-.28,.02,-.14,-.09,.12,-.14,-.11,-.24,.18,-.04,.18,-.15,.05,.18,-.37,.1,-.32,.03,-.11,-.18,-.27,-.12,.1,-.05,.1,-.24,-.09,-.23,.09,-.02,0,-.15,-.04,-.13,.02,-.09,-.29,-.23,.15,.14,-.13,-.03,.26,.02,.14,0,-.08,-.09,-.14,-.03,.1,-.15,-.16,-.22,-.21,-.14,.15,-.08,-.02,-.02,.05,-.03,-.04,-.04,-.32,.01,-.07,.03,.08,-.25,-.04,-.2,-.14,.15,.17,0,.02,-.13,.09,.01,.19,.2,-.1,-.29,.26,-.11,-.16,-.18,-.11,-.07,-.01,.13,-.39,.09,-.18,.11,.15,-.13,-.11,.03,-.35,-.08,.03,-.04,0,-.01,.12,.08,-.04,-.08,-.03,.08,-.01,-.12,-.04,-.31,.03,.28,.26,.01,.03,-.12,-.16,0,-.02,0,.06,.33,-.16,-.23,-.22,.12,-.18,.28,.09,-.16,-.03,.03,.04,-.08,.1,-.17,.13,-.01,.05,.04,.17,.1,.03,-.13,.14,0,-.14,.14,-.1,-.02,-.31,-.02,-.2,.06,.01,.01,-.02,-.21,-.01,-.04,-.08,-.13,-.08,-.04,-.13,-.04,.01,-.09,-.04,.01,-.02,.12,-.04,.02,.22,-.33,.19,-.02,-.03,-.02,-.01,.01,-.16,-.16,.13,-.14,.02,-.03,-.17,.02,-.09,-.26,-.22,-.13,.01,-.06,.06,.07,.09,-.16,-.04,-.01,-.02,.01,-.08,-.29,.09,-.05,-.01,.06,-.25,.17,.11,-.1,-.03,-.19,0,-.19];export{a as rvalData};
