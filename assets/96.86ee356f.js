const a=[-.33,-.14,-.24,-.13,-.12,-.02,.2,.18,.25,-.23,-.09,-.08,.26,.09,-.2,-.18,-.27,.04,.39,-.06,.02,-.07,.08,-.26,.03,.1,-.11,.08,.21,-.16,.14,-.02,-.05,-.39,-.07,-.09,-.31,-.23,.25,-.08,-.08,.01,-.11,-.01,.21,-.24,.03,.05,-.05,.31,-.02,-.34,-.34,-.13,.25,-.15,.19,-.24,.09,.05,.11,.06,0,-.18,.19,-.28,.04,-.23,-.02,-.05,-.04,-.16,.24,-.08,-.14,-.29,-.27,.11,-.25,-.19,-.09,.1,-.08,.11,.12,.12,.15,.21,.07,-.07,.2,.18,.31,-.02,-.06,1,-.09,-.59,.39,.17,.16,-.01,.3,.12,.36,.27,-.14,.04,.05,.16,-.26,.33,.18,-.12,.26,-.08,-.06,-.18,.3,.11,.06,-.01,-.28,.25,0,.25,-.06,.2,-.4,-.17,.35,.29,0,.17,-.48,.15,.26,.41,-.26,-.42,.1,-.43,.19,.11,-.42,-.05,-.11,.29,.21,.12,-.01,-.01,.14,-.19,.28,.31,.15,-.4,-.25,-.18,.23,.18,.01,.38,.28,.2,-.07,-.27,.36,.08,-.37,-.26,.2,.21,.2,-.17,.22,-.08,.18,-.09,.05,.08,.05,-.24,.33,.47,-.45,-.49,.01,-.08,0,.16,.25,.19,.09,-.12,.24,-.18,-.45,.07,-.23,.23,-.15,-.24,.05,.19,.04,.34,.34,.46,.21,-.18,-.13,-.16,-.25,.12,.11,.23,-.21,-.02,.26,.39,.26,-.1,.29,-.16,.25,-.2,.22,.17,-.04,.12,.03,-.2,.23,-.42,-.17,-.2,.3,-.14,.13,-.19,.42,.33,.19,.09,-.14,-.09,-.25,-.1,.09,.36,.33,.54,.02,.21,.2,.04,-.05,-.3,-.27,.3,.11,.07,.3,.39,-.07,.16,-.06,-.12,-.15,-.28,-.19,-.21,-.02,.25,-.16,.05,-.06,-.02,.29,-.09,-.27,.16,.53,.2,-.1,-.24,.18,.16,.27,.41,.1,.1,.21,-.07,-.21,-.24,-.22,.15,0,-.14,.01,-.22,-.11,.25,.42,.12,.45,-.25,-.01,.03,.33,-.43,.16,.2,.12,.34,-.21,-.04,.16,.13,-.2,.09,.19,.57,.07,.12,.28,.52,0,.23,.35,.08,-.06,-.23,-.29,.29,0,.19,.19,-.02,.3,-.13,-.24,-.12,-.04,.27,.02,.42,.17,.02,-.37,.57,-.15,-.24,.15,-.29,-.03,-.29,-.03,-.11,.57,.15,.19,.01,-.24,-.18,.04,-.18,-.01,-.08,.15,.31,-.06,.21,.15,.11,-.08,.22,-.08,.16,-.13,-.08,-.02,.27,-.15,.03,.12,.08,-.1,.51,-.14,-.05,-.03,-.13,0,-.07,.07,.1,.21,.52,-.12,.2,.21,.06,-.23,-.03,.18,.19,-.15,.06,.39,-.07,.17,-.25,.11,.01,.27,.42,-.26,.02,-.19,.28,.1,-.13,-.11,.08,.3,.3,.49,.38,.07,-.34,.13,-.23,-.11,.1,-.09,-.03,.21,.11,.13,-.28,-.08,.3,-.15,.18,-.01,-.31,.12,.21,-.07,.56,.03,.21,.12,-.2,.1,.15,-.16,.06,-.15,.13,-.15,.39,-.02,.16,-.25,-.18,-.06,-.24,-.43,-.59,.39,.1,-.13,-.02,-.15,-.04,.11,-.24,-.03,.28,-.15,.44,.21,.25,.1,-.2,-.03,-.06,.3,.13,-.2,-.04,.15,-.1,.05,.43,.35,.04,.04,0,0,.22,.21,.14,.01,.04,.07,.5,.03,.38,-.13,.03,-.24,.34,.2,.08,-.09,-.12,.51,.05,.14,-.42,.03,-.3,-.04,.08,.33,.2,.13,.15,-.32,-.31,.42,.22,.39,.01,.04,.35,.47,-.04,-.04,.25,-.12,-.04,-.1,.2,-.15,-.16,-.17,-.34,.02,.34,-.01,.24,-.12,-.02,-.23,-.11,.43,.25,-.06,-.08,.01,-.11,-.09,.11,-.09,-.2,-.24,.08,.06,-.22,.08,.16,.24,.03,-.13,-.36,.15,.35,.27,-.17,-.15,.04,-.15,-.31,-.14,-.02,.07,.03,.32,-.22,.1,-.2,-.11,-.02,.03,-.17,-.15,0,-.14,-.09,.32,.27,-.34,.24,-.03,-.32,.39,.1,.3,-.21,-.11,.09,-.26,-.43,.25,.18,.44,.1,.59,-.32,-.03,.28,.15,.12,.23,-.19,.07,.21,.24,.11,.08,.26,.06,.14,-.01,.07,.01,-.02,-.09,.12,.41,.07,.35,.29,-.44,-.22,.32,-.13,.08,.04,-.29,-.24,.35,-.01,-.16,.02,-.1,.14,.1,-.14,0,.56,.18,-.05,.2,-.15,-.12,-.16,.2,.3,.21,-.11,-.03,-.1,-.16,.39,-.05,-.01,.2,-.24,-.13,.12,.1,.23,-.29,.05,.43,.44,-.34,.21,-.51,-.18,-.03,-.08,.1,.24,.22,-.02,.04,-.01,-.18,-.14,-.22,-.09,.07,.34,-.14,.18,.2,-.06,.36,.18,-.03,.11,.19,.14,-.32,-.04,.08,.08,.16,.01,-.48,-.03,-.18,.17,.07,-.08,.22,.35,-.25,.15,.08,.18,.02,.03,.1,-.05,.01,-.23,.16,-.28,.4,.04,-.5,.31,.06,.04,-.21,.15,.41,-.26,-.06,-.06,-.12,-.19,.07,.04,-.06,-.28,.02,.39,.01,-.15,.4,.38,-.12,-.42,.38,-.21,.21,.13,-.02,.24,-.11,.36,-.23,.06,-.22,.19,.4,.07,.25,.14,.09,.57,.18,-.3,.07,-.25,-.13,.13,.3,.25,.3,-.05,.01,-.03,-.34,.38,.07,0,.1,.08,-.02,.04,.08,.1,.32,.4,.09,-.02,-.14,-.05,-.48,0,.33,.2,.08,-.17,-.18,-.03,-.04,-.2,.3,-.13,.08,.26,.17,0,-.27,.32,-.31,-.04,.08,.02,.34,.47,-.11,-.12,-.07,-.08,.19,-.22,.13,-.22,.14,.15,.03,.44,.12,.32,.24,.17,.17,-.16,.41,.07,.41,.27,-.11,-.29,.38,.33,.36,-.11,.14,.37,.41,.18,.16,.28,-.12,-.37,-.14,-.19,.18,.03,-.15,-.02,.26,.42,.02,.14,.09,.39,.14,.23,.01,.04,-.17,.05,-.11,-.03,.29,-.04,-.05,.03,-.42,.11,-.4,.41,-.49,.35,-.41,-.05,-.13,.14,.02,.4,-.1,.32,.4,-.06,.42,.13,.17,-.08,.03,-.15,-.4,-.2,.06,.24,.14,-.27,-.02,.03,.14,.08,.21,.09,-.05,.01,-.55,.44,.15,.25,.25,.18,.18,-.11,-.09,-.17,.37,.2,.69,.43,.25,-.16,.04,.28,.04,.33,.09,.06,.09,.15,.17,-.07,.19,.11,.16,-.14,-.01,.22,-.31,.08,.21,-.08,.24,.44,.29,.13,-.07,.27,-.03,.23,.24,.45,.31,-.39,-.45,.06,.28,.26,.34,.16,-.25,.41,-.18,-.13,.05,.13,.07,.11,-.05,-.13,-.32,-.22,-.51,-.24,.01,-.18,.03,.07,.51,.02,.32,.19,.06,.07,.41,-.08,.08,.33,-.22,.36,-.32,.57,-.03,0,-.5,0,.4,.06,-.01,.54,.26,.16,-.07,.3,-.03,-.15,.35,-.19,.13,.07,-.15,.38,-.15,.06,-.07,-.05,.23,-.11,.1,.29,.38,-.04,-.18,.11,.41,.11,-.04,-.43,-.07,.04,.05,.28,-.28,.07,-.21,-.08,.27,-.12,0,-.2,.27,.16,-.32,.39,-.09,-.13,-.37,.18,-.17,.06,.11,-.02,-.18,.24,.01,.22,.05,.34,-.01,.18,-.28,.18,.34,.67,.07,.1,.21,-.03,.04,.07,-.02,.09,-.11,.14,.07,.13,.38,.16,.24,.1,.05,.14,.28,-.02,.14,0,.05,-.24,-.47,-.48,.08,-.15,-.2,-.18,.17,0,.29,.04,-.18,.13,-.02,-.12,.14,.42,-.35,.39,.02,-.18,.04,.16,.07,-.41,.01,-.17,-.12,-.16,-.26,.12,-.14,.02,.09,.43,-.43,.36,-.25,-.4,.03,.14,-.28,.15,.17,.07,-.06,-.1,.01,.12,.23,-.39,.13,.52,.22,-.06,-.24,-.09,.07,-.02,.46,.09,-.05,.04,-.05,-.34,-.16,-.2,.05,-.25,.22,.19,.31,.44,0,-.25,.02,-.02,.09,.02,-.1,.11,-.36,-.08,.58,.16,.47,-.25,-.12,.26,-.14,-.41,.12,.13,.04,.47,-.21,.13,-.15,.16,.27,-.01,.11,-.42,-.38,.06,.24,-.08,.3,.1,-.29,.09,0,.2,-.18,-.06,.16,-.18,-.23,-.4,-.21,.01,-.18,-.11,-.42,-.03,-.49,.09,.12,-.32,.13,-.09,-.16,.1,-.26,-.03,.29,.12,.3,.09,-.23,-.08,0,.38,.06,.04,-.11,-.18,.14,-.47,-.11,-.07,.13,-.11,-.02,.16,.1,-.34,.24,.09,.23,-.07,.01,.26,.09,-.41,-.13,-.16,-.14,-.41,-.02,.01,.05,0,.16,.46,.44,0,.17,.05,.1,.22,-.17,.09,.09,-.25,0,.42,-.17,-.19,.18,-.1,.3,.22,.58,.17,-.04,.21,-.16,-.37,.1,.62,.33,-.12,.36,.69,-.28,.03,-.04,-.04,-.02,-.05,.27,.26,.22,.07,.31,-.18,.07,.04,.16,.35,.01,0,.08,.2,-.1,.26,-.49,.11,.18,.33,.13,.26,.63,.34,.27,.37,.32,.4,.15,.11,.56,.37,.2,.37,.08,.43,.02,-.1,.18,.23,.36,-.25,.57,.21,.28,.25,.13,.29,-.09,.31,.35,-.07,.23,-.14,.28,-.05,.23,.16,.02,.25,.26,.32,-.22,-.04,.37,-.41,-.16,.09,.38,.08,-.48,-.23,.31,-.24,.07,.25,-.13,0,.09,-.06,-.16,.55,.07,-.23,.08,-.08,.07,-.11,.14,-.08,-.11,.04,-.23,-.03,-.11,.02,.04,0,-.22,.05,.07,.2,.01,.09,.04,-.33,.12,.21,.14,-.34,.31,.07,-.31,.42,-.16,.18,.06,.11,-.28,.15,-.03,.1,-.08,.21,.17,.08,-.08,.13,-.19,.35,-.04,-.26,.25,.14,.09,-.1,-.16,.14,.39,-.21,.25,-.11,.07,-.25,.24,.24,.35,.05,.56,.06,.12,.37,.35,.28,.39,.08,.13,.25,.37,-.04,.28,.19,.14,.22,-.28,.28,-.01,-.05,-.09,.03,-.1,.29,.11,.27,-.19,.33,.31,-.08,-.01,-.02,-.17,.3,.28,.15,.05,.03,.18,.02,.25,.21,.22,-.22,-.17,.14,.1,-.31,-.2,-.13,.38,.17,.33,.4,.06,-.2,.2,.14,.11,-.12,.1,.36,-.16,.14,.08,.31,.51,.02,.1,-.3,.26,.39,.24,-.07,-.46,.23,.27,-.41,.17,.14,-.01,-.29,-.01,.1,.32,.16,.19,-.06,-.23,.12,0,-.17,.23,.18,-.42,-.07,.35,-.15,.26,-.23,.12,0,0,.07,.14,.14,.24,-.25,-.11,-.03,-.05,.28,-.11,.28,.05,.36,-.14,.17,-.31,-.07,.03,.14,.18,.43,-.15,-.25,-.29,.13,-.29,.25,.28,-.16,.18,.04,.16,-.01,.28,.2,.29,.23,-.35,.09,-.21,.2,-.07,.21,.08,-.24,-.21,.32,-.28,.12,.19,-.38,.31,.09,.12,-.01,.2,.27,.19,.12,.47,-.23,.21,.18,.19,-.03,.18,.23,.05,.16,.19,-.19,.41,-.09,.11,.16,.25,.38,-.06,-.18,-.13,.07,.03,.02,-.25,.32,.18,.3,.2,.29,-.15,.28,.28,-.06,.03,.1,-.27,.15,-.08,.06,.01,.07,.08,.04,-.03,-.19,.18,.35,-.07,.02,.4,-.09,.1,.07,-.1,-.22,.2,.15,-.26,-.11,0,.21,-.05,-.13,.05,.3,.24,-.12,-.01,.07,-.01,-.01,.11,-.14,-.28,-.3,.19,-.18,-.04,-.11,.26,-.14,.06,-.13,.06,-.23,.22,-.01,-.03,.33,.15,-.24,-.03,.07,.39,.19,.17,.11,-.42,.4,.16,.18,-.07,-.09,-.2,-.03,.02,-.02,-.17,.06,.1,.09,-.25,-.11,-.14,.29,.22,.11,.19,.04,.07,.1,.02,.2,.12,-.09,.28,.11,.2,-.08,-.22,.11,-.22,.3,-.22,-.2,-.03,.04,-.15,-.05,-.03,-.35,.26,.17,.32,.29,.13,-.1,.04,-.08,.23,.1,.32,.22,.12,.09,.04,-.17,.21,-.17,-.06,.35,0,.27,.27,-.27,.25,-.19,.07,-.23,-.21,-.2,0,-.07,.19,-.06,-.12,-.06,.36,.21,.07,.18,-.17,.2,.22,.39,-.02,.21,-.12,.02,.04,-.01,.17,-.44,-.39,-.17,.06,.22,.17,.09,.22,-.02,.12,.18,.09,-.2,-.05,.11,-.22,-.15,.38,.18,.34,.08,.02,.23,.2,-.29,-.05,.1,.46,.17,.24,.23,.03,.17,-.16,.35,.13,-.09,-.2,.31,.29,.34,-.07,0,.16,-.07,-.45,.17,.4,-.1,.11,.16,-.07,.1,-.12,-.07,.14,.33,.09,-.43,-.12,-.05,.11,-.17,.15,.04,.03,.09,.11,-.11,-.11,-.05,-.25,.3,.42,.1,.26,.08,.01,-.3,.06,.14,-.22,-.17,.14,-.09,.02,.43,.13,.18,.13,-.43,.13,-.02,-.49,-.14,.24,-.14,.05,-.01,.02,.2,-.37,-.29,.21,.11,-.28,-.1,-.2,-.17,-.34,-.26,-.1,.15,.09,.49,-.12,.18,.06,.49,-.16,-.33,-.15,-.49,-.17,.04,.28,-.04,.17,-.03,-.25,-.25,.28,-.4,.24,-.18,-.24,-.27,.07,.13,-.17,-.02,-.19,.2,-.25,.4,0,-.13,.08,.41,.01,.09,-.1,.18,-.15,-.16,.36,-.18,-.23,-.15,.18,-.03,.22,.33,.19,-.29,.04,0,-.13,-.37,.06,-.12,.13,-.2,.29,.2,-.25,.09,-.03,-.22,-.02,-.41,-.17,-.21,-.28,.31,-.19,-.13,.01,-.04,-.06,-.03,.38,.11,-.23,.32,0,-.1,-.38,-.17,.23,-.04,.15,.17,-.09,-.04,-.2,-.22,-.12,.16,-.17,.27,.01,-.06,.11,.3,-.18,-.07,-.16,.25,-.42,.32,.16,.2,-.05,-.33,.2,.17];export{a as rvalData};
