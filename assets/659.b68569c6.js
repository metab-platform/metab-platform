const a=[-.23,-.06,-.29,-.03,-.21,-.15,-.14,.01,.01,-.11,-.21,-.22,.21,.25,-.3,-.08,-.1,.13,.24,-.03,-.03,.03,.09,-.2,-.09,-.1,-.04,-.17,.02,-.01,.01,-.07,-.25,-.13,-.14,-.17,-.32,-.18,-.09,-.27,.12,-.1,-.3,0,.22,-.16,.04,-.19,.03,.11,-.1,-.25,-.33,-.18,-.26,-.21,-.12,-.26,.13,-.06,-.14,-.2,-.18,-.18,.03,-.02,-.18,-.19,-.11,.03,-.08,-.13,-.04,.1,-.16,-.01,0,-.13,-.15,-.17,.04,-.01,0,-.08,.01,.16,-.09,-.08,.1,-.13,-.13,.01,-.03,.14,-.16,.35,.22,-.16,0,-.14,.39,-.19,-.09,.43,-.05,.16,.07,.13,-.25,-.13,-.25,0,-.05,.01,-.05,-.13,-.13,.02,.05,-.09,.22,.21,-.41,.18,-.1,-.04,-.15,0,0,-.18,.04,-.01,.02,-.03,-.27,.02,-.01,.18,-.04,-.12,-.15,-.18,-.03,-.13,-.29,-.14,-.1,.02,-.15,.16,-.18,-.09,-.09,-.12,.01,-.06,.08,-.34,-.16,-.24,-.04,-.12,.04,.17,-.04,-.04,-.15,-.08,-.04,-.13,-.36,-.12,-.02,.08,-.09,0,.15,.01,.04,-.15,.09,-.04,.01,-.18,-.11,.21,-.28,-.3,.01,-.06,.16,-.1,.19,-.18,-.18,-.27,-.11,-.24,-.12,0,-.06,-.15,-.19,-.27,.13,-.24,-.07,-.02,-.09,.39,.08,-.13,-.16,-.14,-.25,.02,-.05,.04,.01,.15,-.06,.06,-.02,-.21,.03,-.19,-.01,-.02,-.11,0,-.11,.53,-.03,-.27,.14,-.33,-.13,-.07,.15,-.21,0,-.19,.07,.06,-.04,0,-.14,-.08,-.31,.09,-.01,.28,-.24,.23,-.18,.19,.02,-.14,-.17,-.21,-.1,.02,-.18,-.15,0,-.02,.09,-.1,-.08,-.15,-.18,-.08,-.23,-.28,-.08,.31,-.05,-.14,-.24,.07,-.04,.1,-.17,.23,-.03,-.12,.14,-.26,0,-.02,-.01,.11,-.21,-.03,-.04,-.28,-.21,-.14,-.18,-.07,.04,-.23,.03,-.1,-.26,.12,.08,-.11,.08,-.15,-.09,.35,.29,-.23,-.14,-.07,-.02,.06,-.26,-.01,-.03,-.12,-.13,-.11,.04,.03,-.24,.17,-.01,0,.18,-.06,-.02,.15,.01,-.11,-.04,-.14,.02,-.01,-.13,-.22,.06,-.07,-.23,-.26,-.06,-.03,-.22,.09,-.17,-.01,-.2,.01,-.02,-.16,.14,-.13,-.23,-.22,-.07,-.14,.05,.19,.35,.23,-.2,-.22,-.15,.1,.02,.04,.06,.03,-.15,-.11,.12,-.11,-.05,-.07,-.16,-.08,-.19,-.14,-.06,-.14,.08,-.09,-.21,-.22,-.31,.41,-.14,-.02,-.03,-.22,.06,.03,.1,-.07,.11,.09,-.3,0,.1,.05,-.12,-.18,-.06,-.05,-.25,.26,.19,-.28,-.16,-.15,-.12,-.23,-.06,.31,-.33,-.06,.06,.24,.08,-.2,-.27,.12,-.04,.09,.16,.07,-.09,-.16,-.07,-.21,-.03,-.2,-.21,-.39,-.14,-.05,-.05,-.16,-.16,-.11,-.25,-.16,-.04,-.03,-.11,-.04,.11,.15,0,.02,.1,-.26,-.12,.02,-.18,-.28,.05,-.07,-.07,0,.19,.02,-.06,-.23,.08,-.24,-.39,-.24,-.02,-.26,-.31,-.11,-.26,.13,-.2,-.16,-.16,-.05,-.07,-.08,-.12,.21,.05,-.27,-.1,-.24,.17,.05,-.32,-.12,.06,.06,-.09,.07,-.05,.06,-.33,-.12,-.09,.36,-.09,-.29,-.22,-.13,-.19,.09,-.11,.17,-.11,.17,-.3,-.07,-.06,-.12,.08,-.28,.03,.15,.02,-.37,-.05,-.2,.02,-.29,-.01,.05,.1,.05,-.32,-.23,.02,-.09,.17,-.19,-.07,-.01,.32,0,-.05,.03,-.17,-.01,-.23,.15,.06,-.2,-.31,-.32,-.07,.15,.1,.05,.08,-.05,-.17,.02,.14,.09,-.08,.02,.13,-.01,-.21,.04,-.27,-.31,-.07,.15,-.06,-.29,.48,.07,.04,-.07,-.08,-.26,-.11,-.02,-.15,-.13,-.26,-.05,.12,-.31,-.06,-.15,-.1,-.18,.13,-.04,-.18,-.18,-.24,-.23,-.18,-.17,-.23,-.22,-.15,.08,-.07,0,-.42,.17,0,-.31,.12,-.12,.31,-.19,-.21,-.01,.01,-.26,.14,.08,-.09,.15,.13,-.26,-.07,.06,-.13,.08,.21,.04,.27,-.02,-.14,-.12,-.26,.01,-.18,.07,-.03,-.11,.09,-.25,-.14,-.16,.17,-.1,.14,-.11,-.27,.02,.04,-.26,-.26,-.05,-.16,-.04,1,0,-.23,-.24,-.17,-.14,-.03,-.19,-.07,.09,-.06,-.05,.01,-.05,.02,-.04,-.05,.03,-.05,-.13,-.01,-.01,-.05,.16,-.16,-.25,-.08,-.24,.01,-.06,-.25,.04,-.26,.07,.15,.41,-.12,.13,-.46,-.15,-.24,.03,-.04,.02,-.09,-.03,-.07,.12,-.04,-.29,-.26,-.02,-.16,.12,-.27,-.18,.2,.25,.1,.02,.26,.3,-.07,-.26,-.35,-.05,-.04,-.01,.12,.14,-.24,-.15,-.05,-.16,-.21,-.07,-.05,.01,-.25,.1,-.17,.26,-.16,-.22,.02,.02,.01,-.14,-.08,-.26,-.02,-.09,-.31,.06,-.04,-.09,-.19,-.07,.11,-.06,-.23,-.05,-.14,.04,-.25,-.11,.06,-.25,-.07,.24,-.01,-.26,.13,.04,-.12,-.35,-.02,-.17,-.06,-.04,-.18,-.09,-.18,-.05,-.08,-.07,-.28,-.15,-.03,-.13,-.12,.16,.08,-.02,-.19,-.19,-.17,-.02,-.25,-.04,.24,-.09,.16,-.15,.34,-.18,-.42,.06,-.17,-.03,-.09,-.01,-.18,.04,-.23,.06,.07,.12,.29,.09,.04,-.17,-.25,-.09,.14,.08,.04,-.19,-.12,-.28,.01,-.23,.22,-.17,-.05,.17,.1,-.06,-.01,-.09,-.33,-.02,-.33,-.1,.32,.14,-.04,-.2,.08,-.03,-.06,-.05,-.02,-.06,-.06,-.04,-.11,-.02,-.14,-.02,-.08,-.12,-.21,-.24,.14,.16,.12,.09,-.04,-.33,.12,.08,.06,-.08,.18,-.02,.1,-.16,.06,-.01,-.22,-.21,-.01,-.37,.27,-.1,-.1,-.1,-.04,.09,-.22,.04,-.09,.37,.14,-.07,-.1,.06,-.04,.35,-.23,-.16,-.21,-.04,-.12,.25,-.28,-.24,-.28,-.02,-.21,.01,-.13,.02,.05,.3,-.2,.08,-.16,.01,.1,.01,.07,.28,.14,-.08,-.19,-.22,-.28,-.24,-.08,-.09,-.1,-.32,-.17,-.14,-.03,.28,-.09,.01,-.21,-.13,-.25,.05,-.06,.06,.21,-.14,0,-.29,-.19,-.02,-.01,.25,.14,.04,-.04,.02,-.11,.09,-.14,-.09,-.23,.06,.04,.37,-.07,.02,.03,-.07,.18,-.11,.25,0,-.26,.18,-.04,.04,.14,0,-.01,-.27,-.18,.04,.1,.02,-.17,.12,.09,-.28,-.32,-.18,.07,.05,-.02,.09,-.11,.04,.1,-.18,.12,-.04,.08,.16,.12,-.06,-.12,-.09,-.27,-.09,-.1,-.32,.04,-.27,0,.16,-.02,.14,-.14,-.09,.16,-.12,-.05,0,-.14,-.22,-.13,.03,-.27,-.03,-.37,.14,.1,.25,-.04,-.02,.03,-.19,-.14,.09,-.04,.09,.01,-.23,.25,.19,-.14,-.02,-.09,.04,.07,-.25,-.18,-.32,-.12,-.15,.25,-.07,-.05,-.08,.05,-.2,.11,-.35,-.01,-.05,.04,-.11,-.08,-.15,-.19,.12,-.05,-.23,-.2,-.17,.09,-.19,-.28,-.03,-.2,-.18,-.19,.06,-.04,.06,-.19,.24,-.02,.39,.08,-.05,.03,.24,-.22,.14,-.28,-.08,.13,.14,-.21,-.17,.05,.09,.03,-.01,-.1,-.14,-.17,.04,-.26,-.04,.43,-.09,.03,.16,.13,.15,.01,-.05,-.09,-.11,.07,-.16,-.14,-.25,.07,-.1,-.29,-.11,-.06,.05,.14,-.24,-.22,.32,-.07,-.19,-.19,.17,-.25,.08,-.13,-.15,-.02,.03,-.15,-.28,-.14,-.16,-.36,.09,-.01,.02,-.22,-.2,.2,.01,-.25,-.04,-.22,-.25,-.09,.03,-.17,.06,-.21,.01,-.19,-.24,-.16,-.15,.06,-.29,.25,.01,-.16,-.05,-.22,-.11,-.01,-.02,.09,.23,-.01,.01,.06,-.22,-.2,-.2,.11,-.28,.14,-.07,.11,.16,-.2,-.22,.02,-.2,-.17,.14,-.09,-.3,-.45,-.23,.07,-.14,.11,-.27,-.16,0,-.29,-.25,.32,.11,-.2,.1,-.07,-.06,-.1,-.09,.02,-.09,-.2,-.27,-.24,-.22,.08,.11,.02,-.11,.04,.03,-.22,0,-.22,-.2,.02,-.03,-.19,-.26,-.22,-.1,-.29,.19,-.28,.14,-.24,.01,-.21,-.25,-.12,-.1,-.11,-.22,-.19,-.07,-.01,.29,.01,-.25,-.07,-.22,-.04,.13,.14,-.15,.07,-.02,-.08,-.33,-.19,.15,-.18,-.12,-.18,.05,-.14,-.18,.05,.4,-.1,-.2,-.28,0,-.04,-.24,-.23,.15,-.14,-.2,.08,-.16,-.11,-.25,-.02,.12,.12,-.22,0,-.11,-.21,-.13,-.1,.06,.01,-.24,-.13,.13,-.21,-.12,-.03,-.24,.28,-.07,.1,-.12,-.1,-.18,-.17,-.08,-.02,.19,.44,.06,.01,.35,-.21,-.1,-.27,.08,.02,-.27,.08,.01,.2,.06,.07,-.12,.06,-.26,-.07,.35,.1,-.02,-.19,.24,-.06,-.18,-.33,.15,-.08,-.06,-.24,-.12,.35,-.14,.15,-.05,-.09,-.04,-.26,-.17,.38,-.07,-.03,-.12,-.24,-.02,-.04,.01,.02,-.2,-.08,-.26,.13,-.15,0,.06,-.11,.08,.04,0,-.01,-.06,-.1,-.22,.16,-.02,-.17,-.19,-.28,-.22,-.08,-.09,-.23,-.13,.05,-.26,-.23,.37,.09,.15,-.28,-.3,-.16,-.22,-.1,-.04,.14,-.11,-.2,-.27,-.2,.03,.01,-.23,.05,-.04,-.26,0,-.19,-.21,-.04,.11,-.05,-.09,-.18,.1,.2,-.13,-.13,-.17,-.11,-.07,-.09,-.15,-.12,-.26,-.16,.15,-.09,-.23,.08,-.11,-.14,-.03,-.09,.11,-.03,-.25,-.11,.02,-.03,-.08,-.15,-.09,-.21,-.01,-.11,.19,-.06,.08,-.17,-.06,-.21,-.18,-.06,.02,-.14,-.28,-.05,-.12,.04,-.04,-.18,-.21,-.18,-.22,-.11,.18,0,-.14,.19,-.04,-.05,-.17,-.12,-.16,.04,-.15,.03,-.28,-.04,.09,.06,-.01,-.06,-.04,-.16,-.17,-.17,-.09,-.16,-.02,.16,-.14,-.24,-.03,.18,-.27,-.14,.17,.15,-.01,.64,.31,-.06,.04,-.12,-.14,-.02,-.11,-.05,-.31,-.04,.09,-.14,-.13,-.17,.03,.11,-.18,.07,.08,-.19,-.18,-.11,-.25,-.05,-.21,-.2,-.03,-.24,-.11,-.21,.04,.19,.01,-.01,-.07,.05,.09,-.07,-.21,-.22,-.09,-.04,-.35,-.08,.03,-.05,.04,-.14,.06,-.05,-.03,-.08,-.09,-.17,-.09,-.23,-.27,-.03,-.08,-.3,-.28,.09,.05,-.1,-.17,.07,-.16,-.25,-.08,-.12,-.11,-.11,-.03,-.27,-.21,-.16,-.05,-.14,.07,.11,.11,-.27,.04,-.28,-.2,.2,.15,-.02,-.02,-.18,-.32,-.16,.13,-.29,-.03,-.08,-.25,.2,.15,.01,-.27,-.12,-.01,-.08,-.09,-.26,-.15,-.08,-.27,.12,.09,.06,-.02,-.18,.14,-.24,-.1,-.24,-.14,-.02,.12,.03,-.2,-.21,-.01,-.21,-.08,.14,-.16,-.01,-.05,-.18,.27,.33,-.07,-.11,.01,-.07,-.22,.11,.1,-.26,-.08,-.06,.07,-.04,-.19,-.21,-.23,-.22,-.07,-.28,-.08,-.14,-.01,.07,-.11,.06,.1,-.06,.04,-.23,.04,-.37,-.19,-.19,-.09,.14,-.08,-.2,-.05,-.04,-.19,-.07,.14,.1,-.03,-.18,.14,.15,-.23,-.23,-.19,-.03,-.11,-.25,-.22,-.12,-.1,-.18,0,-.04,.05,-.09,-.18,.47,-.05,-.06,-.06,.05,-.24,-.29,-.16,-.05,-.17,-.2,.06,.04,-.11,-.09,-.29,-.16,-.15,.2,.09,.15,-.14,-.13,-.3,-.08,-.29,.04,-.04,.01,-.15,-.36,.07,.46,.13,-.27,.05,-.3,.01,-.28,-.22,-.24,-.1,-.23,-.15,0,-.17,-.09,0,.02,.45,.01,.26,.07,.13,-.02,.15,.03,-.11,-.19,-.2,.25,-.08,-.28,.04,-.26,.05,.01,.08,.02,-.18,-.24,-.17,-.09,-.11,-.2,.13,-.16,-.03,-.09,-.15,-.16,-.22,-.15,-.09,-.08,.13,.04,-.15,-.03,-.32,-.06,.05,.07,-.02,-.14,-.18,-.2,-.31,-.16,-.26,-.12,-.32,-.26,-.19,-.19,-.07,-.22,-.04,.06,-.32,-.07,.43,.03,-.23,-.29,-.2,-.16,.07,-.18,-.24,-.26,-.01,.19,-.07,.42,-.24,-.28,-.33,.02,-.13,-.17,-.21,.24,-.03,-.1,-.01,.21,-.05,.17,.02,-.19,-.12,-.07,-.21,.03,0,-.09,-.04,.14,-.27,.14,-.23,.37,.01,-.14,-.26,-.25,-.16,-.16,.06,-.12,.02,-.22,-.08,-.09,-.07,-.18,-.19,-.03,-.15,-.17,.22,.34,-.08,-.19,-.15,-.21,-.17,.03,.15,-.07,-.09,-.06,-.37,-.1,-.07,-.08,-.24,.18,-.29,-.09,-.01,-.24,-.22,-.22,-.12,-.02,.2,.02,-.09,-.15,.04,.14,-.15,.01,.33,-.17,-.24,.16,-.11,-.13,-.02,.08,-.16,.02,-.3,.43,-.18,-.22,-.11,-.07,-.16,-.02,.1,-.09,-.04,-.22,-.28,-.11,.07,-.28,-.23,-.22,-.11,-.32,-.28,-.15,-.03,-.2,.32,-.15,-.1,-.03,.02,-.1,-.23,.07,-.36,-.19,-.21,.06,-.13,-.15,-.36,-.27,-.08,.06,-.32,.02,.11,-.2,-.07,.15,-.1,-.24,-.02,-.28,-.09,-.12,0,-.19,-.17,-.15,.17,-.08,-.15,-.14,-.19,-.08,-.01,-.1,-.26,-.29,-.28,-.08,-.17,-.18,.02,-.21,-.09,-.07,-.2,-.21,-.29,-.09,-.28,-.18,-.03,.05,.03,-.27,-.15,-.17,-.24,-.11,-.29,-.12,-.22,-.21,-.06,.03,-.2,-.09,-.12,-.08,-.13,.13,-.2,-.23,-.08,.22,-.09,-.31,-.26,0,.02,-.14,-.09,-.14,-.19,-.04,-.19,-.04,-.07,-.27,.07,-.21,-.28,-.09,.11,.01,-.06,-.12,.19,-.22,.08,-.07,-.03,-.18,-.33,.13,-.1];export{a as rvalData};
