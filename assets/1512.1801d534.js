const a=[-.29,.26,.14,-.01,.28,-.18,.02,-.05,.27,.07,.16,-.23,.06,-.15,.28,-.04,.01,.06,-.03,.04,-.08,-.04,.03,.31,.28,.4,-.02,-.12,.42,-.05,-.01,-.11,.25,-.04,-.16,.08,.21,.27,0,.21,.13,.38,.23,-.22,.18,.18,-.01,-.24,.17,.07,.05,-.06,.01,.32,-.21,.28,.1,-.07,.21,.32,-.02,.2,.35,.01,.12,-.09,.28,.3,-.06,.09,0,.22,-.11,.05,.33,.11,.05,-.01,.02,-.07,-.2,.27,-.11,.38,-.29,0,.39,.07,-.22,.23,-.29,-.05,.15,-.31,-.13,-.02,-.25,-.11,-.25,.04,.09,.25,-.04,.11,.08,.16,.25,.29,.27,.05,.02,-.1,-.05,-.25,-.29,.38,-.02,-.05,-.17,.3,.2,.18,.01,-.07,.22,.23,.13,-.27,-.09,.33,-.11,-.3,-.08,-.16,.13,-.03,-.24,0,-.09,-.03,.22,.01,.37,.39,-.06,.01,.06,-.21,.21,-.01,.23,-.11,.02,-.14,.04,-.26,.27,-.32,-.03,.33,-.2,.15,.25,0,.17,0,-.01,-.11,-.21,.37,-.2,-.16,-.14,-.25,.32,.01,-.08,.15,-.01,.27,.26,.15,-.06,.23,.03,-.02,.02,-.15,-.02,-.25,-.07,-.08,-.07,.2,.12,.18,.04,-.01,.05,-.2,.33,.1,.33,-.14,-.26,-.14,.22,.01,-.16,.17,-.06,.26,-.25,.32,-.06,.19,.03,.08,.06,.09,.13,.03,-.13,.3,.18,.35,-.12,-.08,-.15,.07,0,.04,.28,.12,.34,-.1,.18,.27,-.03,.08,-.11,.3,-.09,-.23,.14,-.14,.05,0,.06,.07,-.03,.14,-.2,.01,.22,.15,-.02,.09,.01,.24,.01,-.24,.07,.21,-.24,.05,.05,.33,-.06,.46,-.18,-.38,.2,.2,.14,.13,.17,-.04,.18,.16,-.13,.09,.32,-.03,-.13,.26,.16,.26,-.05,-.07,-.23,.02,.29,-.11,-.02,.2,.21,-.13,-.08,-.03,.05,.24,-.19,.12,-.08,.33,-.11,.01,-.24,.2,.36,.16,0,-.04,-.23,-.03,-.03,-.21,.17,.13,.38,-.35,.3,.26,-.12,-.08,.26,-.08,-.03,-.02,0,.13,.06,.21,-.05,-.07,0,.05,.08,-.11,.11,.17,-.06,-.01,.29,.08,0,-.18,.21,-.03,.25,-.18,-.08,-.1,-.07,.27,-.03,.12,.1,.19,.44,.18,-.07,.31,.07,.04,0,.29,-.14,.09,.24,.07,.34,-.13,-.08,0,.23,.38,.17,-.23,.22,.12,.01,.14,-.06,.06,.04,-.02,.14,.14,.14,.27,-.07,.05,.07,.25,-.13,.01,-.12,.28,-.21,-.11,.1,.43,-.04,.01,.28,.06,.19,.04,.2,-.11,-.46,.12,-.36,-.06,.26,.33,-.14,.08,-.03,.36,-.01,.23,.42,.36,.18,.11,.1,-.25,-.05,-.15,.28,-.2,-.16,.35,.05,.3,.35,.07,.1,.35,.36,.29,.04,.02,.28,.29,.35,-.21,.02,.07,-.3,-.12,-.07,-.16,-.03,.29,-.11,.18,.28,.17,-.24,0,-.03,-.29,.03,-.03,-.33,.3,.32,.29,-.04,.11,-.23,.26,.2,.07,.1,.09,.2,.28,.12,.23,.02,-.15,.05,-.1,.19,.07,.06,-.24,.22,-.06,.13,.44,-.05,.1,.05,-.35,0,.02,-.01,.32,.35,.03,-.2,.11,.26,-.12,.19,-.15,.4,-.06,0,-.02,-.26,-.07,.01,.39,.16,.14,-.23,-.07,-.05,-.17,-.03,.15,.11,.17,-.07,-.06,-.09,-.13,-.24,-.05,-.22,.03,-.12,-.14,-.03,-.19,.09,.1,-.07,-.09,-.14,.06,.15,.4,.12,.33,.26,.12,.38,-.04,-.03,0,.04,-.14,.12,.06,.18,.04,.04,.09,.04,-.02,-.26,.12,.08,.17,.28,-.06,.25,.26,.08,-.17,-.05,.03,-.06,-.12,.29,-.12,.02,.28,.26,.17,.04,.21,.14,-.04,-.02,.09,.04,-.34,.29,.29,.04,-.03,.06,.36,.19,-.09,.29,.02,-.24,-.23,-.13,.42,.14,.2,.04,-.12,.05,-.14,.25,-.16,.03,-.2,.02,-.1,.03,-.25,-.18,-.39,.2,-.22,.21,-.13,.18,-.03,-.08,-.09,-.04,.05,.24,-.21,-.21,-.06,-.14,.29,-.18,-.17,.07,.16,-.22,.38,.03,.02,-.15,-.34,-.02,.27,.27,-.11,.26,.14,.17,.01,.25,.19,.27,-.26,-.1,-.27,.04,-.18,.39,.4,.44,-.23,-.09,-.01,-.03,-.37,.16,.34,-.22,.15,.1,-.11,.19,.36,-.1,-.06,-.17,.42,.31,-.14,-.06,-.05,-.2,.17,-.05,.13,-.07,-.23,.17,-.19,.36,.11,.27,.41,-.27,.21,.01,.08,-.2,.05,.28,-.24,-.12,-.19,-.06,.11,.42,-.23,.16,-.02,.03,.1,.16,.05,.35,.23,-.16,-.11,-.3,.24,-.31,-.25,.15,.12,.06,-.21,.3,.08,-.19,.05,.16,.03,-.12,.08,.06,-.17,.35,.24,0,.2,-.33,-.11,-.2,.21,.16,.04,-.05,.3,.03,.07,.06,-.06,.34,.04,.34,.41,.33,0,.12,.03,-.3,-.3,.25,-.12,-.2,-.18,.13,0,.23,-.18,.21,-.21,-.08,.35,.1,.09,-.05,-.08,-.35,.03,-.13,-.14,0,.24,.37,0,.2,.37,.05,-.13,.3,.22,.05,.25,.06,.3,.05,-.31,-.2,.06,-.2,-.17,.13,-.24,.18,-.11,-.08,.13,.22,.35,-.13,.31,.01,.33,.13,.3,-.13,-.47,-.03,.06,-.07,.31,-.22,-.14,-.08,-.05,.26,-.21,-.15,-.05,-.11,.31,.19,-.16,-.09,.14,.32,-.02,.22,-.02,.01,-.01,.34,.03,.06,-.12,-.24,-.21,.07,-.27,.22,.33,.04,.01,-.14,-.2,-.03,-.22,.07,-.11,-.11,-.09,.27,-.21,-.19,-.28,.45,-.15,-.03,-.04,.02,.12,.09,.34,.32,-.02,-.14,.24,.14,.05,.27,-.05,.01,.07,.19,.14,-.12,.04,.1,.35,-.14,-.05,-.27,.2,-.09,.3,.21,-.19,-.09,-.04,-.07,.1,-.1,.01,.15,.06,-.24,-.16,-.15,.09,-.21,.09,-.07,.28,.18,.26,-.21,.33,.23,-.2,-.13,.07,.25,.42,.33,-.23,-.04,-.04,.04,.3,-.12,-.26,0,.33,-.1,-.11,.06,.08,-.06,.22,-.1,.09,-.13,-.15,.02,.26,.34,-.07,.4,-.24,.31,.14,.02,-.05,.09,.02,-.12,-.22,-.03,.03,.27,-.4,.28,-.25,.4,.08,0,-.11,-.09,.08,.39,-.02,-.06,.11,-.11,-.02,-.33,-.21,-.23,-.07,.22,-.23,-.11,-.14,.14,-.11,.3,-.08,.17,.05,-.07,.05,-.08,-.16,-.06,.11,-.23,.11,.15,-.3,.03,.15,.04,.05,-.08,-.02,.08,-.19,-.19,-.05,.39,-.1,.12,-.13,.12,-.05,.17,.19,-.11,.13,-.17,.23,-.02,-.12,0,.01,.31,-.1,.25,.16,-.24,.31,.19,.07,-.22,-.22,-.24,-.07,-.03,.22,-.15,.19,-.08,-.26,.41,-.21,-.21,.14,-.17,.35,.13,-.27,.04,.36,.04,-.15,-.1,.19,.11,.13,-.13,.04,0,.16,-.23,.2,.21,-.32,.21,.38,.03,-.09,.12,-.12,-.05,.3,.09,.07,0,.39,.43,-.19,.29,-.15,.09,.32,.01,-.05,.28,.3,-.12,.16,-.17,.51,.26,.31,.2,.08,.08,-.16,.18,-.06,.02,.06,-.01,.05,-.06,.35,-.09,.36,-.19,.34,-.15,-.09,-.14,-.18,.03,.14,-.26,-.04,-.14,.18,.34,.17,-.05,.24,.33,0,-.05,-.31,.41,-.19,.16,0,.21,-.07,.39,0,.05,.03,.08,-.26,-.01,.19,.13,-.26,-.04,-.21,-.16,-.04,.22,.11,-.07,-.08,.25,.02,.36,.4,.15,.08,-.29,-.21,-.26,-.07,.16,.12,.31,.12,.37,.18,-.3,-.03,.1,-.26,-.12,-.07,.32,.31,.32,.14,.42,-.29,-.23,.12,.29,-.08,-.25,.23,.11,-.17,-.07,.04,-.31,.24,-.04,.16,-.28,.16,.18,-.11,.18,-.08,.11,-.14,.18,-.19,.22,.36,.26,-.34,-.18,.4,-.13,-.06,-.03,-.28,-.02,.13,-.12,-.25,0,-.31,.24,-.04,.26,.27,.42,-.02,-.19,-.05,.28,.38,.21,-.01,-.05,.07,-.08,.14,.29,-.2,.28,-.24,-.01,-.33,-.01,.37,.18,.13,-.14,.13,-.36,.3,.36,-.25,.08,-.03,-.02,-.07,.14,-.25,.31,.02,.16,.26,-.04,-.15,.34,-.34,-.11,.07,.25,-.23,.19,.2,.38,-.07,.23,.04,.01,-.19,-.16,.33,.32,.04,-.36,-.07,-.11,.06,.32,.1,.34,.17,.31,.16,-.05,.28,-.02,-.06,.34,-.11,-.05,.2,-.31,.17,-.1,-.11,-.01,-.06,.34,.03,.13,-.04,.15,-.12,-.17,-.11,.28,.31,.12,.08,.2,.15,-.23,.13,.41,.09,-.21,.1,-.05,.12,.08,.13,.33,.23,-.03,.09,.25,.1,-.17,.03,-.07,-.1,.02,.11,.24,-.16,-.08,-.08,-.34,-.18,-.04,.15,.17,-.28,-.24,-.25,.12,-.12,-.18,.04,-.41,-.13,-.15,.35,.04,-.29,-.26,-.27,-.01,-.25,.15,-.3,-.23,-.11,-.22,-.05,.22,.01,.01,.2,-.22,-.04,-.01,.01,.3,-.08,-.28,.28,.29,.08,-.15,.01,.02,.15,.16,.29,.18,-.04,.11,-.11,.06,.18,-.12,-.03,.02,.29,-.22,-.08,-.19,.05,.23,-.17,.03,.01,.01,.09,.17,.14,.18,.35,0,-.01,.31,-.12,.37,.38,-.1,-.36,-.19,.12,-.03,.23,-.27,.42,-.01,-.24,.08,-.21,.13,-.1,-.2,-.16,-.03,.29,.4,.24,.12,.13,-.12,-.01,-.09,-.03,.03,.08,-.11,.21,-.07,.02,-.03,-.13,-.13,-.08,-.28,.01,.13,-.45,.18,-.02,-.02,.08,-.04,-.02,.06,.03,-.32,.2,-.02,-.16,.09,-.04,-.3,.1,.2,0,-.12,.21,.11,-.02,-.06,.09,.16,.05,.33,-.07,0,-.04,.39,.08,-.04,.29,.21,1,.27,-.01,.1,.33,.4,-.21,-.12,.17,-.2,-.14,0,-.06,.22,.17,.25,-.05,.05,.06,-.15,.2,-.02,.14,.13,.05,-.19,.08,.14,.23,.16,-.14,.18,.17,.09,.21,-.08,.06,.34,.12,.32,.2,.23,.15,-.04,-.15,.26,.16,.15,.24,-.04,-.04,.12,.53,.1,-.06,.16,.02,.28,-.04,.2,.21,.25,.31,-.05,.24,-.08,.06,.08,.26,-.3,-.22,.12,.16,.05,.11,0,.48,.11,.3,.33,-.08,-.18,-.08,.5,-.03,.27,.02,.11,.34,.09,.12,.16,-.11,.28,.21,.05,.12,.09,.22,.16,.11,.03,.44,.41,.09,-.05,.25,-.04,.19,-.1,.23,.08,-.08,.44,-.05,.12,-.02,.08,.31,.2,-.02,.07,-.07,.07,.03,-.08,.16,.25,.2,.26,.39,-.15,.34,-.22,-.16,-.1,.16,.02,.39,.08,.43,-.16,.19,-.19,-.04,-.06,-.13,.13,-.18,-.04,.36,.25,.05,.13,-.19,.25,-.04,.12,-.12,-.33,.19,.46,-.28,.25,.1,.09,.08,.1,.14,-.21,.36,.16,.08,.05,-.04,.13,.24,-.12,.03,.15,.1,-.2,-.11,-.04,.2,.15,.24,-.23,.2,.26,.19,.28,.39,.35,.23,-.02,-.07,.38,-.09,.09,0,-.02,.05,-.03,.28,.16,.16,.01,.32,-.01,.13,.39,.17,.22,.2,.07,-.21,-.15,.13,-.01,-.13,-.05,.12,.09,.05,-.3,.03,-.09,.28,-.16,.04,.12,.13,.16,-.04,.17,.44,.13,.14,-.06,.17,.01,.23,.1,.06,.07,.29,-.24,.05,.21,.04,.09,-.21,.07,.01,-.06,-.12,0,.08,.03,.39,.24,.15,.2,-.17,.05,.01,.19,.29,.27,.37,.21,.18,.03,.16,.05,-.03,.16,.16,.28,.17,.21,.09,-.14,.14,-.19,.23,.35,.09,-.26,.02,.33,-.18,.36,-.12,-.05,-.1,.26,.27,.26,.11,.28,.36,.16,.09,.01,.19,-.01,.1,-.33,.15,.09,.1,.25,.14,-.07,-.12,.12,-.05,.15,0,-.11,-.06,.17,-.04,-.13,.1,-.35,-.04,-.2,.29,.07,.24,-.28,-.23,.28,.16,.11,-.14,.35,.01,-.32,.18,-.14,.45,.38,-.31,-.44,-.31,-.02,.27,.11,-.26,.09,.01,-.07,-.16,.38,-.04,.41,.26,.31,-.15,.04,-.02,-.11,.15,.04,-.19,-.09,-.2,.07,-.08,.16,.17,.15,-.14,-.08,.22,.28,-.02,.21,-.07,.08,-.15,.45,.21,.18,-.03,.31,.4,-.13,.1,.28,.42,.09,-.1,-.07,-.03,.01,.14,.08,.37,.17,.07,-.15,.26,0,-.05,.37,-.19,-.08,.19,-.11,-.21,0,.26,-.22,.17,-.27,.01,-.14,.16,.19,.13,-.03,.02,-.2,-.07,.25,.34,.06,-.05,.11,.2,.36,.37,.32,.16,.12,-.06,.44,-.24,-.03,-.14,.08,.07,.38,.31,-.24,.43,-.06,-.19,.33,.25,.13,-.29,-.07,0,-.23,.22,-.04,.15,.31,.41,.25,.02,.03,.11,-.09,.11,-.2,.09,-.07,.4,.38,-.05,-.27,-.34,0,.19,.07,.14,-.14,.41,-.07,-.1,.27,-.36,.44,.17,.34,-.16,.23,-.2,.14,.22,.14,.23,.06,.37,.01,.3,.41,.25,-.02,.31,.09,-.07,-.02,.33,.4,.46,.38,.42,-.26,.18,.13,-.07,-.16,.37,-.12,.24,-.25,-.06,.12,.01,.4,.25,.11,.06,.01,-.23,.24,-.13,.12,.02,.39,-.08,.01,-.11,-.12,.12,-.06,.41,-.08,-.08,.33,-.16,.07,.02];export{a as rvalData};
