const a=[.02,-.1,-.4,-.15,-.35,.1,-.04,.32,.46,-.29,-.11,-.27,.14,.26,-.06,-.1,-.11,-.07,.12,.07,.19,.17,.03,.07,.22,.04,.07,-.3,.04,.03,-.16,.22,-.34,-.35,-.19,.08,-.31,.11,-.01,-.35,.06,-.14,-.39,-.04,-.01,.08,-.06,.11,.1,.25,.24,-.1,-.29,.03,-.18,.17,.2,-.16,.15,-.27,-.25,-.36,-.01,-.1,0,-.15,-.11,.09,.22,.04,.14,-.33,-.02,-.09,-.22,-.09,.01,-.26,-.03,-.12,.22,-.22,.19,-.04,-.11,.17,.13,.12,.24,.09,-.14,.03,.51,.03,-.09,.3,.2,-.2,-.01,-.14,-.12,-.01,-.07,-.11,.06,.06,.21,.49,-.04,-.07,.07,-.06,.14,.13,.04,-.11,-.08,-.05,.24,.25,.21,.11,-.23,.19,.01,.11,-.26,.23,-.37,-.25,.39,.44,.2,.05,-.35,.23,-.05,.19,-.06,-.12,-.25,-.12,.01,.13,-.07,.18,.15,-.05,.13,.25,-.06,.35,.1,-.08,.45,-.07,.18,-.27,-.01,.08,-.07,-.06,.06,-.09,.51,-.21,-.42,-.12,.22,-.02,-.12,-.22,.16,.13,-.02,.06,.14,.13,-.05,-.29,.28,-.13,-.25,-.43,-.11,.27,-.14,-.34,-.17,-.07,.01,.21,-.05,.14,-.19,-.25,-.21,.16,-.04,.03,.37,.03,-.23,.04,.19,-.4,.08,.2,.01,.18,.38,-.01,-.13,-.06,-.16,-.25,.14,.4,-.02,.35,.19,.06,-.13,-.12,.17,-.25,.3,-.08,-.09,-.15,.04,-.06,.14,-.34,.11,-.15,-.12,.2,.04,-.03,-.22,-.01,.38,-.04,.41,.41,-.01,-.06,-.14,-.05,-.01,.1,-.17,-.04,-.29,.21,-.06,.16,-.02,-.4,.03,-.1,.3,-.25,-.03,.04,-.08,.05,-.09,.05,-.04,-.07,-.26,-.27,-.01,.05,-.01,-.11,-.22,.14,-.09,.22,.29,.2,.23,.08,.08,-.21,.16,.18,.29,-.05,-.16,.36,.44,-.4,.01,.02,.13,.21,-.01,-.44,.02,.13,-.33,.17,.44,-.13,.01,.06,-.22,-.06,.22,-.06,-.11,.2,.38,-.03,-.32,-.14,-.03,-.11,.02,-.05,.23,.29,-.16,.13,.2,.31,.25,.08,-.07,-.05,-.1,-.14,-.21,.08,.28,.3,.09,-.49,.15,.18,-.19,-.4,.04,-.06,-.34,.14,-.04,.06,-.15,.29,.27,.31,-.16,-.06,-.27,-.39,.32,-.01,.23,.57,.13,.3,-.09,-.27,-.49,-.09,.1,-.08,.54,.36,-.47,.1,.04,.06,-.07,0,.02,0,-.09,.04,.04,-.09,-.09,-.08,-.22,-.32,-.23,.23,-.28,.12,.12,-.4,.12,.11,.07,.04,-.1,.22,-.3,.49,-.16,-.06,.02,-.32,.08,.07,-.25,.19,-.13,-.18,-.13,-.2,-.18,-.2,-.1,.38,-.02,-.06,-.16,.23,.38,-.23,-.39,-.08,.09,.04,.47,.37,.29,-.12,.17,-.18,.4,-.14,-.3,-.22,-.12,-.02,-.09,.3,-.01,-.01,-.42,-.13,.48,0,.2,.05,.21,.14,.08,-.01,.25,-.31,.09,0,-.18,-.21,.25,-.17,.03,.3,.09,.05,-.09,0,.43,-.33,-.41,-.19,.05,-.02,-.13,.43,-.32,.19,-.09,-.07,-.31,.52,-.17,.21,.07,.12,-.25,-.32,.11,-.28,1,-.04,-.45,-.15,.25,.1,-.24,.03,.16,.15,-.16,.13,-.13,.08,-.22,.03,-.3,-.4,-.21,.2,-.15,-.04,-.14,-.04,-.36,.48,-.09,.08,-.22,-.42,.12,.09,-.32,-.15,.02,-.36,.17,-.17,.3,.29,.2,.19,-.11,-.08,.1,.02,.22,-.16,.15,-.07,.26,.15,-.25,-.06,-.15,.15,-.2,.12,.02,-.25,-.34,-.39,-.19,.14,.01,.05,.03,.04,-.22,.06,.36,.54,.06,.14,.08,-.07,-.33,.04,-.3,-.29,.34,.18,-.24,-.4,.1,.2,-.16,-.14,-.26,-.23,-.04,.17,.12,-.08,-.4,-.26,-.08,-.3,.19,.19,.16,-.32,.5,.04,.04,-.32,-.09,.04,-.27,-.19,-.4,.01,-.32,.05,-.15,.17,-.17,.14,0,-.24,.16,.19,.16,.16,-.4,.38,-.02,-.26,.28,0,.15,.02,.22,-.32,.06,-.15,-.13,.49,.22,.25,.14,-.09,.06,.07,-.05,.04,.26,.21,-.1,-.24,.1,-.31,.12,-.15,.21,-.01,.19,.13,-.15,.05,.21,-.32,-.01,-.04,.12,-.04,.17,.15,-.44,-.38,-.26,-.19,-.11,-.12,.06,.21,.25,-.03,.58,-.17,-.17,.09,-.11,-.14,-.05,-.17,-.01,-.05,.15,.2,-.62,-.1,.11,-.18,.21,0,-.03,.46,.05,-.04,.09,.26,-.16,.85,-.47,-.19,-.13,.16,-.07,.48,.36,-.29,-.05,-.01,-.07,-.13,-.07,.17,-.03,-.03,-.17,.2,-.02,.05,.75,-.18,.2,.08,.44,-.13,-.29,.1,-.17,-.31,.07,.01,-.13,-.13,.13,-.04,-.3,.06,.16,.01,-.25,.03,-.29,.09,.07,-.22,.28,.14,.19,.19,.48,-.26,.19,-.15,-.18,.31,-.13,0,-.13,.13,.39,-.11,-.18,-.12,-.38,-.01,.02,.26,-.05,.04,-.09,.16,.24,.07,-.03,-.06,-.3,-.1,.05,.06,.39,.42,-.34,-.1,-.39,.09,-.14,-.11,-.31,-.11,-.02,-.25,-.01,.06,.17,.17,-.1,.11,-.14,-.15,-.32,-.04,.17,-.21,.75,-.02,.18,-.2,-.23,.31,.23,-.23,-.2,-.04,-.06,-.21,-.32,.08,.01,.13,.29,.01,-.24,-.32,-.25,.39,.53,-.08,.09,-.3,.06,-.03,-.11,.06,.03,-.24,.01,-.09,-.15,.09,.18,.17,-.22,.13,-.4,-.24,.25,.17,-.04,-.19,.43,.02,.18,-.1,.23,-.05,.38,.19,-.07,-.05,-.23,-.07,.49,.17,.11,-.25,.38,.17,.17,-.01,.06,-.13,.12,.44,.21,-.18,.15,.05,.03,-.18,.11,.24,.06,-.12,.02,-.05,-.06,-.2,-.2,.08,.02,.5,-.36,.46,-.13,.35,.32,.05,-.25,-.03,.05,.01,-.27,-.06,.16,.01,-.16,.08,-.08,.01,.04,.05,-.16,.16,-.1,.15,-.17,-.06,-.23,-.02,-.15,.06,.31,.05,.09,.28,.18,.07,-.32,-.34,-.08,-.38,-.14,-.11,.19,-.47,-.23,-.17,-.21,.3,.02,-.05,-.07,-.22,-.28,.26,.12,-.05,-.03,-.26,.45,-.3,-.1,-.01,.41,.19,.27,.38,.23,-.02,-.23,-.19,-.12,.07,0,.19,.32,.14,-.16,-.07,-.09,.03,.35,.19,-.01,.04,-.05,.24,.11,.36,.63,.15,-.03,-.04,-.15,.3,.02,.43,.21,.46,0,-.19,-.19,.19,.04,.32,.2,.4,.12,.09,-.01,.14,0,.16,-.09,-.01,-.25,-.31,-.22,-.07,-.17,-.4,-.05,-.18,.11,-.02,.29,.12,.39,-.03,.16,.1,.16,-.07,-.05,-.16,-.2,-.17,.02,.17,-.3,-.03,-.21,-.15,.07,.17,-.1,.24,.12,.02,-.12,.32,-.05,.1,.17,-.39,.36,-.03,-.01,.04,-.18,.13,-.09,-.1,.08,-.02,-.27,.22,.25,.29,-.02,.19,-.03,.01,.1,-.16,.09,.12,-.14,.09,-.17,.53,-.38,.02,-.1,-.04,-.07,-.46,.14,.04,-.22,.19,-.21,-.18,-.11,.25,-.04,-.1,-.14,-.03,0,.24,.19,.21,.36,-.09,-.21,.17,-.32,.07,.54,.29,-.11,-.18,.49,.23,.03,.4,-.4,.31,-.37,.19,-.18,.14,.13,-.06,-.1,.02,-.02,.15,.09,.07,-.01,-.21,-.18,-.06,-.19,-.16,.16,-.17,.2,.1,-.18,.16,.03,-.25,-.28,.21,.02,-.37,.02,.21,-.01,.33,-.04,-.25,.05,-.21,-.19,-.08,.01,-.38,-.3,.25,-.08,.16,-.17,-.13,.02,.11,-.07,.19,-.19,-.06,.25,-.03,-.04,.05,-.01,-.31,-.17,-.07,-.08,-.21,.11,-.42,.33,.24,.1,-.06,-.21,-.15,.06,.22,.11,.19,.05,.14,.04,-.16,-.3,-.24,.08,-.35,.2,.26,.49,.3,-.27,-.11,0,-.1,-.24,-.3,-.28,.09,-.15,-.23,.24,-.09,.2,-.35,-.23,.32,-.38,-.37,.16,.09,-.09,.06,.37,-.06,-.17,-.42,-.09,-.16,.15,-.06,-.08,-.21,.11,.14,-.06,-.24,-.12,.15,-.13,-.01,-.38,.11,.24,-.04,-.17,-.09,-.27,-.15,-.29,.03,-.07,-.05,-.26,.05,-.13,-.17,.02,.07,.01,-.24,-.17,.51,.18,.24,.41,-.12,.19,-.37,.46,.36,.08,.18,.01,-.08,.24,-.18,.03,.12,.03,.06,.13,.46,-.07,-.1,.15,.1,.1,0,.34,.48,.34,-.16,-.41,-.05,.06,-.15,.08,-.06,-.18,-.09,-.02,.25,.44,-.26,.01,-.05,.01,.24,.34,.26,-.14,-.06,-.24,.11,-.26,.04,.11,-.49,.33,-.11,.27,-.25,-.15,.13,-.29,-.13,.14,.38,.22,-.09,.1,.15,-.41,-.22,-.18,.09,.15,-.35,0,.08,.13,-.34,.39,.01,.05,-.25,.29,.24,.47,.04,.4,.13,-.04,0,-.06,-.08,-.03,.39,.1,.35,.22,.29,.03,.13,-.13,.31,.08,.02,.21,.51,.28,.4,-.04,.2,.02,.26,.21,.43,.28,.03,.31,.34,.37,.18,-.03,.47,.18,.39,.41,-.16,.27,.02,.32,.08,.01,.09,-.04,.17,.16,.07,-.28,-.16,.08,.06,-.42,-.04,.05,-.16,-.41,-.38,.37,.08,.29,-.1,.02,-.18,-.38,-.38,.02,.26,-.22,-.15,0,-.04,-.1,.05,.34,-.16,-.05,-.14,.05,.01,-.28,.1,.09,.05,.11,-.03,.05,-.09,-.15,.12,-.17,-.08,-.08,.04,-.11,-.02,.25,-.05,-.12,.46,.02,.04,.14,.21,.05,.07,.01,.27,-.08,.11,-.17,.07,.08,.03,-.06,.06,-.02,.01,.03,.09,-.29,-.15,.01,.14,-.02,.06,.5,.13,-.08,-.2,-.03,.18,.11,.05,.31,.26,.13,.12,.32,.29,.1,.42,.08,-.06,.31,-.14,.2,.26,-.1,-.12,-.15,.18,.02,.18,0,-.14,-.18,-.04,.14,.09,-.2,.29,-.06,.13,.34,.22,-.06,.09,.18,-.06,-.22,.04,-.15,.17,-.13,-.06,.08,-.04,.12,-.19,-.31,0,-.14,-.11,.04,.07,.38,.48,-.06,.07,-.05,-.16,.03,-.43,-.3,-.04,-.25,-.15,-.4,.45,.15,.13,-.03,-.2,.1,.53,.04,-.13,-.16,-.06,.12,-.28,-.17,-.05,-.09,.01,-.2,.07,.17,.15,-.03,-.09,.04,-.12,-.29,-.26,.39,.03,-.09,-.1,.33,-.11,.07,.05,0,-.08,-.16,-.17,-.02,.23,.08,-.25,-.4,-.12,-.14,.13,.07,.2,.37,.2,-.28,.2,.06,.04,-.08,0,.02,.24,.01,-.39,.11,.14,-.27,.51,.13,-.42,.12,.53,.22,.15,-.1,.08,.26,-.02,-.13,.02,.17,-.02,.37,.27,-.04,-.18,.18,.25,-.31,.06,.24,-.32,.16,-.07,.12,-.21,.2,-.02,.18,.02,.13,.31,.21,-.06,.31,-.13,-.02,.08,-.1,-.03,-.23,-.16,.08,.09,.01,.2,.19,.24,.03,-.37,-.46,-.36,-.41,-.18,-.29,.09,.05,.04,.09,.12,.1,.29,.13,.2,-.15,.3,-.41,.04,-.1,-.2,.1,.26,.02,0,.04,-.11,.05,.53,-.02,.17,0,-.27,.05,-.34,-.36,.1,-.09,-.12,-.08,-.05,.11,.17,-.28,-.06,.15,-.03,.12,-.07,.08,.2,-.07,-.07,.14,-.39,-.33,-.35,.25,-.06,-.09,-.03,.47,.14,-.21,.07,.25,.01,.01,.08,-.14,.34,.02,-.29,-.35,0,.29,.07,.03,-.16,-.12,.11,.01,.01,-.21,-.03,-.3,-.27,-.34,-.44,.1,.04,-.11,.01,.03,-.17,.13,.31,.43,-.07,.43,.43,.11,-.1,.12,.13,.15,-.11,-.01,-.03,.11,-.08,-.4,.24,-.26,.61,.06,.18,.21,-.25,-.4,-.22,-.42,.14,.32,-.22,.15,0,-.24,-.27,-.05,-.38,.27,-.15,.07,-.07,.26,.07,-.18,-.32,-.14,-.02,.44,.12,-.05,.11,-.02,.06,.42,-.31,-.1,-.4,-.32,-.26,-.25,.07,-.09,.19,0,-.24,-.07,-.07,.07,-.08,-.25,-.04,.07,-.01,-.36,-.02,-.35,-.02,-.13,-.03,-.06,-.09,-.08,-.13,-.17,.32,.43,-.16,.13,-.2,.4,-.07,.46,-.08,.23,-.04,-.23,.11,-.02,.36,-.06,.14,-.14,.38,-.03,0,0,.12,.21,-.02,-.01,-.01,.17,.4,-.16,.18,.08,-.04,-.28,.32,.07,.11,.07,.19,.06,-.68,-.18,.21,.17,-.14,.07,.11,-.33,-.19,-.12,.03,-.21,.12,-.11,-.14,.11,.14,.05,-.42,.02,.11,-.2,.12,-.17,.18,-.25,-.12,-.02,.07,.26,-.08,.31,.16,.27,-.04,.01,-.16,-.15,-.42,.38,.2,-.08,-.03,-.02,.15,-.25,-.21,-.08,0,-.05,-.08,-.07,-.14,-.02,.17,.08,-.19,-.03,.04,-.1,-.03,-.3,-.3,-.39,-.22,-.4,-.31,-.27,.1,-.14,.2,-.1,-.02,-.11,.04,-.25,-.22,.03,-.14,-.15,-.08,.3,.14,.3,.09,-.35,.12,.36,-.32,.32,-.01,0,.12,-.11,-.17,-.37,.13,-.34,-.08,-.03,.19,.05,.05,.4,.34,-.25,.16,-.14,.21,.03,.17,.16,-.3,-.04,-.3,-.12,-.11,.09,.13,.18,.08,-.12,-.34,-.3,-.18,.02,-.33,-.2,-.3,.48,-.21,-.43,.12,.23,-.29,-.12,-.23,-.3,-.31,-.29,-.04,-.19,-.17,-.11,.03,-.27,-.09,.36,-.22,-.08,.13,.14,-.18,-.09,-.42,.43,-.13,-.16,.08,-.15,-.07,-.01,.12,-.07,.05,-.26,.01,-.33,.06,.01,.06,.06,-.02,-.09,-.02,-.12,.52,.33,-.24,-.28,-.11,.16,.02];export{a as rvalData};
