const a=[-.31,.18,.22,-.02,.36,-.02,.08,.31,.28,.28,.17,-.2,.09,-.29,.11,-.11,.01,.1,-.05,-.01,-.11,-.43,.11,-.06,.23,.41,-.5,.18,.28,-.5,.27,-.56,.41,.11,-.21,.09,.18,.01,.19,.29,-.1,.44,.32,-.12,.29,-.02,-.18,-.32,-.22,.31,-.12,-.06,.06,.18,.4,.03,.19,.17,.26,.34,.47,.39,.38,.01,.03,-.37,.44,-.02,-.18,-.06,.07,.23,.42,-.19,.3,.03,-.24,.47,.02,-.22,-.39,.26,-.07,.39,-.25,-.26,.4,-.04,-.36,.18,.31,.28,.35,-.13,-.21,.22,-.33,-.38,-.15,.48,.09,.32,.25,.13,.41,.04,-.11,-.18,.33,.38,-.09,.37,-.03,-.17,-.23,.22,-.21,-.3,-.18,.28,.2,-.16,.07,.15,.26,.51,.19,-.16,-.2,.31,.27,-.03,-.09,.26,-.01,-.01,.45,.31,-.41,-.05,.5,.05,.55,.41,-.04,0,-.11,.05,.43,-.05,.32,.17,.04,-.11,.34,.34,.13,-.19,-.24,.07,.35,.43,.13,.26,.33,.52,.28,-.37,.14,.33,-.11,-.26,.27,.22,.43,-.38,.02,-.37,.41,.32,-.07,-.08,.09,.18,.48,.09,-.11,.07,.35,-.21,-.1,.31,.1,.49,.52,.24,.38,.03,.02,-.38,-.06,.41,.32,-.04,-.29,.39,.19,.4,.38,.11,.26,.09,-.23,.2,.16,.29,.09,.35,-.35,-.29,.35,.38,.18,.2,.41,.31,.3,-.35,.15,.42,.14,.16,.13,.22,.15,-.02,.09,-.16,.09,-.18,.46,0,.29,.33,.34,.1,-.11,.21,.04,-.09,.25,.01,.43,.25,.47,.13,.11,.23,.05,.16,-.07,.25,.26,.49,.07,.39,-.26,.45,.06,.3,-.33,-.26,.33,.19,.16,.24,-.31,.45,.24,-.22,.53,-.44,-.05,-.27,.34,.38,-.43,.21,.09,-.36,.18,.58,.38,.14,.23,.35,.08,-.33,.06,.16,.01,.32,-.31,-.04,-.07,.33,-.11,.4,.25,.04,.44,.07,-.17,-.03,.07,.15,.05,.29,.23,.29,.45,-.23,.1,.36,.21,.38,.38,-.01,.13,.37,-.17,.4,.17,.21,-.42,.04,-.26,.36,.1,-.34,.41,.32,-.15,.03,.17,.27,.1,.43,.34,.36,.47,.18,-.02,.32,-.24,-.01,.35,-.24,.29,.19,.23,.12,.39,-.15,-.03,-.31,.09,.29,.41,.19,-.15,-.1,.2,.07,.42,.17,.26,.48,-.13,.38,-.1,-.02,-.16,.23,-.04,.25,-.23,0,.32,.35,.28,.13,.04,.12,.14,.31,-.47,-.14,.03,.3,-.22,.24,.33,.23,.54,.06,.04,.33,.36,.21,.18,-.15,.08,.28,.04,-.07,.48,.21,.53,.03,.06,.27,-.17,.1,.18,.27,.31,.08,.46,.17,.31,0,.26,-.07,.27,.2,-.02,.41,.36,.37,.48,.46,.53,-.06,.22,.36,.26,.46,.08,-.43,.3,.46,-.44,.18,-.11,.17,-.39,.27,.2,.4,.25,.37,-.34,.49,.06,-.02,-.19,-.11,-.33,.12,-.13,.23,.1,-.04,.39,.34,.26,.14,.23,-.46,.47,.1,.35,.32,.27,.29,.38,.13,.19,.17,-.12,-.22,-.07,.06,.34,.34,.16,.04,.26,.21,.38,.06,.26,.29,.39,.06,.12,.24,.27,.48,.5,.24,.52,.17,.27,-.25,.24,.28,.48,.37,-.24,.3,.08,-.15,.18,-.15,.06,.21,.09,.36,.37,.11,.09,.2,0,.06,.27,.13,.13,-.13,-.07,.36,.05,-.36,-.06,-.07,.16,-.38,.18,.27,-.42,.31,.28,.09,.5,.07,-.29,.29,-.19,-.13,.13,-.34,.33,.25,-.02,.06,.07,-.07,.32,-.07,.23,.22,.02,.17,.38,.26,.03,-.25,.49,.18,-.13,-.05,.48,.34,.39,.09,.32,.34,-.17,.14,-.02,-.15,.03,.4,.29,-.41,.33,.29,.28,.13,.23,.3,.32,.1,.3,-.41,.33,-.22,-.14,.23,.08,.11,-.02,.31,.23,-.06,.34,.09,-.14,-.06,.09,.24,.21,.03,.23,-.37,.34,.29,.49,.06,-.03,-.3,-.09,.38,.01,.27,.32,.33,.11,-.41,.14,.38,-.38,.09,-.1,.47,.16,.35,.04,.37,-.3,-.49,.41,.33,.33,-.01,-.11,-.09,.13,.06,.32,.36,.35,.26,.09,-.14,.07,.29,.4,.41,.27,-.11,.13,-.49,.21,.27,.46,.31,-.18,.21,.18,.14,.26,.37,.23,.1,-.26,.43,.39,.13,-.17,-.12,.19,.05,-.02,-.05,.14,.04,.25,-.42,.4,.35,.43,.4,-.13,.15,-.06,.05,-.05,-.45,.41,.28,.1,.26,.01,-.03,.13,-.03,-.07,.1,.31,.38,.13,-.06,.3,.23,-.13,-.35,-.32,.28,-.44,.16,.37,-.09,.38,.47,.22,-.04,.14,.17,-.03,.17,-.42,-.41,-.03,-.34,.28,.13,.15,.48,-.25,-.19,-.27,.31,.11,.03,-.1,-.06,.3,-.19,.01,-.39,.35,.11,.05,.1,.36,.17,-.06,.11,.19,.18,.36,-.02,.41,-.38,.08,.24,.34,.37,.27,-.16,-.13,.44,.19,.47,.48,.47,0,-.25,-.36,.13,.37,-.09,.41,-.36,.23,.53,.07,.38,.17,.09,-.15,.42,.03,.29,.28,-.06,.32,.24,.1,-.18,.36,-.28,.42,.38,-.23,-.21,.07,.38,-.19,.13,.26,.27,.01,.27,-.15,.16,-.08,-.19,.24,.33,.11,-.11,.2,-.43,-.13,.31,-.06,-.31,.34,.28,.09,.33,-.29,.27,-.13,-.28,.46,-.01,0,-.39,.33,-.05,-.14,.36,.29,.29,.3,-.28,.44,.3,-.11,-.16,.15,.33,-.35,-.08,.35,.26,.06,.06,.16,.38,.26,.33,.24,.19,-.26,.06,-.38,.19,.18,.42,.22,.09,.3,.21,.44,.16,.41,-.06,-.23,.47,.37,.02,-.33,.1,.27,.33,.18,-.23,.07,.2,-.1,.33,.02,.45,-.15,.38,-.03,-.4,-.31,.2,.42,.39,-.09,.33,.3,-.1,.19,-.02,.02,.12,.47,.32,-.13,.3,.37,.28,.32,.14,.21,.46,.41,-.27,.51,-.07,.18,.42,-.24,-.09,.12,.46,.27,.17,.25,.24,-.16,.05,.27,-.01,.16,-.11,.32,.16,.45,.2,.48,.12,.34,.01,.18,-.06,.41,.11,.09,.07,-.32,-.06,-.09,-.08,-.07,-.34,.37,-.08,.06,.3,.39,.32,.35,.3,-.34,.32,.29,.3,.22,-.07,-.18,.25,.54,.15,.45,.14,-.03,.37,.13,.16,.21,-.05,.09,.13,-.07,0,-.05,-.21,-.14,.03,-.1,-.09,-.18,.47,.26,-.28,.05,.07,.34,-.14,.15,-.11,.5,.14,.35,.43,.08,.31,.41,.15,-.09,.03,.43,-.12,.05,.33,.06,.37,.29,.23,.06,.04,.21,.29,-.36,.11,-.2,.39,.06,-.05,-.16,.08,.19,.25,.05,.21,.4,-.2,-.34,.02,.22,.39,-.36,-.1,.15,.22,.46,.2,-.34,.13,.21,-.02,.41,.3,.31,.23,-.11,.31,.1,.17,.4,.31,-.08,-.37,-.01,.16,.42,-.12,.11,.08,-.39,.42,.04,.17,.38,-.35,.15,.46,.25,.25,.43,.43,.1,-.15,.17,.25,.36,.18,.35,.09,.28,-.15,.05,.46,.54,.23,-.27,-.14,-.05,.2,.26,.38,-.16,0,-.41,-.17,-.22,0,-.22,-.11,.26,-.13,.17,.36,.29,.02,-.05,.35,.39,.3,.03,.03,.38,-.28,.05,.17,.47,0,.31,.02,.24,-.05,-.01,-.24,.32,.35,.12,.32,-.03,.15,.11,-.09,.22,.36,-.1,.41,.31,.35,.36,.31,.25,.46,.23,-.1,-.38,.37,.42,0,.18,.03,.34,-.05,.31,.05,.06,.1,-.15,-.08,.28,.21,.09,.14,.16,.12,-.08,.03,.41,-.19,-.17,.37,.44,-.29,-.09,.32,-.16,.32,.27,.5,0,.18,.2,.31,.29,-.13,-.12,.19,.18,.22,-.15,.43,.26,.22,0,.44,.11,-.01,-.01,.27,-.06,-.38,.29,.22,-.35,-.01,.34,.07,.3,.28,.38,.01,-.18,0,.21,.36,.19,.1,-.01,-.1,-.28,.17,.45,.07,.36,.06,.03,.27,-.21,.08,.43,-.12,.22,.39,-.47,.36,.09,.17,-.16,.2,-.43,-.36,.42,-.14,.13,.04,.33,-.17,.05,.1,.23,-.25,.22,.14,.49,-.08,.12,.33,.21,.01,.32,-.11,-.02,-.02,-.08,.41,.49,.42,.13,.26,-.11,.39,.38,.38,.38,.45,.1,.26,-.02,.01,.47,.35,.33,-.48,.28,.33,-.24,.43,.22,.19,.36,.25,.22,.06,.24,.14,.08,.06,.15,.22,.21,.43,.26,-.38,-.1,.36,.2,.29,.22,.11,.19,-.15,-.09,.43,.33,.13,-.14,.02,-.01,.1,-.14,.53,-.12,-.08,.38,.3,.28,.25,.36,.27,.27,.51,.18,.28,.24,.39,.15,.05,.08,.16,.47,.39,-.3,-.45,-.39,.07,.26,.17,.33,-.06,.03,.1,.32,-.02,-.18,.08,.12,.04,.22,.1,.06,-.07,.5,.38,.24,.22,.36,.5,.27,-.17,.27,-.01,.34,-.05,.47,-.01,-.04,.22,.25,.02,.07,.5,-.28,-.13,.42,.34,.08,.17,.09,.14,.25,0,.2,-.02,.13,-.1,.02,.46,-.04,-.07,.24,.07,.03,.24,-.06,.17,.36,.45,.44,.42,-.01,-.27,.48,.2,.48,-.08,.14,.45,-.16,.19,-.09,-.01,-.13,.04,-.32,.14,-.08,.31,.36,.39,.35,.4,-.3,.14,-.11,.37,.01,-.25,.41,.38,.3,.18,-.03,.05,.4,-.32,-.01,-.34,.42,-.26,.48,.2,.39,.14,.27,.03,.15,.33,.2,.23,.44,-.14,.07,.35,.18,.33,.34,.1,.17,.47,-.11,.02,.02,.17,.11,.29,.32,.5,-.17,.33,.32,.33,.34,.16,.18,.14,0,.4,.18,.26,.44,.05,.29,-.01,.35,.41,.38,.08,-.01,.15,.5,-.05,.08,-.27,.2,.45,.29,.19,.35,-.17,.33,.34,.48,.33,.39,.38,.26,.47,.45,.24,.25,.33,.35,-.13,.41,.12,.44,.3,-.05,.41,.42,-.01,.41,.33,-.13,-.26,.28,.48,.37,.35,.33,.24,-.01,-.06,.36,.23,.27,.43,0,.31,.3,-.32,.44,.01,.13,-.02,.36,.44,.28,.38,.34,.23,.27,.35,.39,-.16,-.17,.33,.26,.4,.23,.34,.08,.24,-.05,.37,.31,.2,.11,.26,-.13,-.1,.06,.35,.41,.22,.14,.12,.42,.15,.56,.47,.23,.45,.08,.37,-.07,.37,.03,.18,.03,.09,-.01,.38,.17,.17,.2,-.04,.42,0,.25,.34,.36,.42,.37,.45,.21,.06,.25,.29,.01,-.05,.13,.47,.33,.47,.15,.28,.19,-.13,.27,.31,.41,.26,.13,.29,.3,.41,.39,.09,.13,.34,.42,.32,-.11,.53,.11,.09,.38,-.03,.39,.01,.17,.39,-.01,.44,-.02,.32,.06,.25,.15,.06,.19,.24,.09,.22,.25,.09,-.02,.43,.32,-.05,.33,.41,-.02,.09,.29,.36,.37,-.1,.03,.32,.42,-.05,-.15,-.18,.25,.21,.2,.3,.13,.1,-.23,.22,.25,-.18,.36,-.27,.42,.26,.28,-.24,-.19,-.09,-.05,.09,.2,.18,.52,.29,.25,.39,.33,.42,-.07,.12,.08,.12,.34,-.26,.16,.21,.26,.26,-.12,.43,.24,.37,-.38,.07,-.03,.26,-.16,.12,.33,-.27,-.14,-.03,.16,.01,-.11,-.13,.34,.41,.21,.29,.23,.13,.17,.05,-.39,-.37,-.04,.43,.28,.4,.07,-.11,.19,.32,.32,.46,.41,.13,.41,.35,.25,.48,.37,1,-.25,.42,.39,.33,.25,-.36,-.13,.14,.41,.07,.44,-.11,.36,.25,.45,.2,.24,.24,.38,-.23,.42,-.05,-.15,.31,.29,.14,.31,.33,.26,.44,.23,.42,.24,.33,.27,.15,-.04,-.08,.19,.01,-.08,.14,.17,.23,.03,.43,.14,.23,-.11,.36,-.12,.01,-.11,-.14,.27,.04,.35,.18,.44,.35,.47,.03,.18,-.22,.18,.36,.11,.36,.43,.46,-.08,-.07,.33,.22,.4,-.1,.31,.22,.53,.49,-.18,-.06,.12,.18,-.12,-.11,.07,-.19,.32,.34,.37,.16,0,-.19,.5,.43,.41,.03,-.09,-.17,.4,.29,.13,.1,.42,.24,.36,-.01,.43,.4,-.38,.33,.18,.44,.26,.21,-.37,.32,.14,.11,-.07,.31,.02,-.16,.46,.37,.01,.44,.22,-.19,-.01,.32,-.47,0,.27,-.08,-.04,.1,.12,.25,-.06,-.19,.35,.06,.21,.36,.18,-.15,.09,.14,.32,.43,.42,.23,.19,.46,.42,.32,-.17,-.04,-.04,-.01,.33,.39,.17,.26,-.29,-.09,.25,-.09,.3,-.1,.23,-.32,-.17,-.13,.17,.27,.31,.34,.31,.5,-.01,.38,.02,-.11,-.04,-.11,-.08,.38,.25,.24,-.12,-.39,.42,.11,.07,.28,.41,.42,.06,.29,.37,-.48,.46,.47,.34,-.12,.33,.08,.46,.23,.34,.43,.15,.41,.09,.29,.42,.09,-.09,.28,-.19,.36,-.01,.31,.41,.36,.33,.38,.14,.49,.03,.21,-.28,.3,-.04,.25,-.01,.05,.48,.2,.33,.35,-.42,-.2,-.28,.27,.32,.32,.22,.22,.43,.05,-.42,.09,-.27,.07,.01,.33,-.08,.34,.38,.05,-.05,.28];export{a as rvalData};
