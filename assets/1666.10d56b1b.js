const a=[.13,.04,-.02,-.12,-.04,-.02,.07,.32,-.03,.32,-.13,.37,-.12,-.01,-.18,.1,-.14,-.03,.02,.15,-.01,-.41,0,-.27,-.16,-.07,-.34,-.01,-.3,-.35,.17,-.28,.05,.15,-.29,.05,-.01,-.13,.2,.14,.08,-.01,-.06,.04,.02,-.04,-.06,-.14,-.48,.47,.26,.06,.18,-.15,.44,.01,-.03,.23,.05,-.13,.4,.25,.05,.01,-.22,-.36,.03,-.2,.05,.04,-.07,.16,.32,-.19,-.04,-.04,-.2,.4,.02,-.44,-.05,-.25,-.03,-.09,.2,-.45,-.14,-.04,.01,-.14,.42,.06,.16,.26,.22,.02,.06,-.02,.14,.28,-.04,.06,.35,-.09,.26,-.06,-.33,-.35,-.08,.16,-.05,.66,.22,.01,.11,-.11,-.27,-.33,-.31,-.08,.01,-.24,.19,-.04,.17,.26,.03,-.28,-.28,-.03,.35,.3,-.02,.68,-.14,-.23,.55,0,-.29,-.08,.12,-.03,.07,-.11,.08,.1,.07,-.06,.04,-.04,.02,.32,-.01,.18,.34,.32,-.15,.23,.04,-.19,.48,.12,-.12,.35,.12,.39,.05,-.32,.06,-.18,.13,-.45,.38,.45,-.07,-.55,-.01,-.41,.41,0,-.35,.09,.08,-.04,.26,-.02,-.02,.15,.45,.21,.06,.32,.05,.09,.2,.01,.06,.05,-.11,-.09,.05,.14,-.01,-.05,.04,.2,.13,.32,.32,.06,.4,-.16,.28,-.06,.2,.1,.05,.26,-.45,-.14,-.08,.23,.09,-.1,.11,-.03,.45,-.29,.46,.23,.11,-.19,-.06,-.02,-.15,.08,-.16,.01,.24,.05,.71,-.27,.34,.52,.22,.42,.08,.13,-.16,0,.41,-.23,.47,.14,.07,-.06,-.12,.06,.32,-.04,0,.39,.08,.12,-.06,.26,-.17,-.03,.16,.08,.11,.22,.03,.12,-.02,.08,-.39,.47,.07,-.49,.54,-.15,-.14,-.01,.28,-.02,-.18,-.04,.36,-.24,.18,.38,-.05,.45,.02,-.08,.12,-.02,.04,.19,.21,-.04,-.11,.08,.41,.01,-.15,.42,.16,.1,.02,-.18,-.17,-.01,.04,.2,.24,.46,.09,.27,-.05,.4,-.19,-.03,.52,.24,-.05,.01,.03,.21,-.08,.1,.14,-.17,-.34,-.16,-.4,.09,.22,-.18,.43,-.11,.05,.02,-.06,.06,.03,.36,.03,.44,.1,.55,.1,.25,.24,-.14,.26,-.17,.14,-.06,-.01,-.17,.13,-.37,.07,-.07,.12,-.02,.27,-.14,-.58,-.05,-.07,-.06,.34,.38,.07,-.17,.14,.32,.01,.04,.07,-.02,-.08,.13,-.12,.03,.11,.13,.19,-.12,.18,.19,.19,-.05,-.23,-.12,.03,.17,.15,.08,.11,-.06,.32,-.16,-.23,.17,.01,-.04,.07,-.07,.18,.18,.36,.06,.08,-.27,.55,-.23,.07,-.08,-.17,-.02,-.33,-.09,-.01,-.12,.2,.54,.29,-.06,-.08,.14,.41,-.07,.15,-.04,-.06,.18,.11,-.02,.13,.04,.6,.16,-.04,-.02,.06,-.1,.2,.26,-.07,.06,-.09,-.22,-.55,.01,.09,.18,-.06,.12,-.02,.39,0,0,-.02,.11,.03,-.1,-.33,-.04,.08,-.02,.39,-.09,.16,.27,.04,-.2,.07,-.1,-.02,.08,.62,-.01,.17,.27,-.22,-.01,.04,.35,-.18,.3,.05,-.13,.46,-.07,.17,.55,.36,.02,.17,-.26,.1,-.02,-.11,-.04,-.07,.43,.09,.22,.1,.04,.6,-.42,.53,.32,.47,-.26,-.09,-.01,-.02,.06,-.03,.1,.25,.17,.18,.14,.35,.43,.01,.57,.15,.15,.23,-.12,-.14,.3,.06,.38,-.2,-.35,-.28,.13,.11,-.38,.24,-.15,-.25,-.02,.05,.07,.29,-.09,-.17,.39,-.19,.16,.14,-.39,.16,.29,.1,.01,.13,-.11,.55,.01,.13,-.04,.08,.42,-.07,-.05,-.23,-.08,.4,-.29,-.29,.26,.05,-.07,.33,-.24,-.05,.09,-.24,-.05,.03,-.04,0,.17,.27,.01,-.06,-.05,.15,.35,.12,-.04,-.03,.6,.04,-.42,.6,-.27,.1,-.17,-.24,-.1,.01,.35,-.01,.14,-.04,.46,-.11,.13,.17,.23,.11,.1,.17,.22,.19,.22,.02,.39,-.03,.03,.04,.43,.05,.43,-.07,.64,.16,-.36,.02,-.08,-.19,-.01,-.03,.09,-.05,-.07,-.1,.33,-.13,-.01,.33,-.07,-.1,.21,-.1,-.08,-.07,.01,-.04,-.09,.03,.43,-.02,.26,0,.06,-.05,-.08,-.08,-.03,-.01,-.37,.37,.6,.13,-.09,-.09,-.12,-.13,-.21,0,-.11,.11,.21,-.08,.01,-.05,.2,.02,.04,0,-.08,.08,-.09,.21,.11,.19,-.04,-.07,.16,.07,-.06,.22,-.16,-.09,-.44,.13,-.48,-.01,.63,.4,.32,.22,-.11,-.08,.27,.07,-.2,.19,.04,-.01,-.01,-.16,-.41,.06,-.48,.04,-.04,-.03,.7,.1,-.08,.3,.55,-.06,-.03,-.1,-.06,-.22,.04,-.39,-.44,.07,.08,-.12,-.06,.39,.33,.1,-.39,.07,.02,.01,.1,-.19,-.35,-.02,.01,-.21,-.31,-.17,.09,-.32,-.12,.05,-.08,-.15,-.07,.13,.14,.03,.07,.39,.03,.3,.3,.03,.42,-.08,.02,.32,.1,.02,.11,.32,.42,-.27,-.32,-.53,.21,.03,-.14,-.13,-.32,-.03,.12,-.1,.1,-.09,.21,-.12,.03,-.07,.01,.22,-.12,.44,-.09,-.03,-.01,.15,-.49,.19,.39,-.02,-.46,-.17,-.08,.07,-.04,.32,-.03,-.08,-.08,.04,.25,-.15,-.08,-.11,-.02,.05,.22,.22,.01,-.11,.11,.11,-.42,.12,-.14,-.12,.42,-.33,.01,-.32,-.29,.29,-.04,.01,-.52,-.01,.01,.07,-.07,.4,.43,.17,-.44,.08,-.03,-.22,-.01,-.09,.33,-.13,.01,.27,.45,.1,.12,.01,.41,0,.44,-.28,.19,.1,.12,-.3,.11,.03,.08,-.01,.2,.08,-.08,.1,.36,.05,-.03,-.06,.31,.1,-.19,.01,0,.1,-.03,-.06,.24,-.13,-.17,.03,.03,.07,.53,-.03,.49,.05,-.43,-.39,.42,.18,.01,.09,.49,.39,.08,.04,-.26,.23,.03,.08,-.03,.24,-.06,-.01,.41,.36,.08,-.13,-.03,.04,-.05,.44,.01,.17,0,-.02,-.08,.18,-.02,.19,.01,.29,.08,.11,-.06,.3,-.08,-.05,-.17,.41,0,-.01,-.22,-.02,-.15,-.13,-.04,.43,-.02,.07,.09,.09,.31,-.09,-.11,-.23,-.07,-.34,.02,-.23,.01,.01,.14,.51,0,-.07,.39,-.44,.26,.3,.28,.57,.12,.13,.21,.36,.52,.4,.47,.09,.29,-.23,.09,-.23,-.04,.06,-.08,.04,.24,-.1,-.25,.07,.02,-.2,.19,.05,.24,.1,-.19,-.08,.15,.25,.32,-.08,-.2,-.02,-.02,.09,.41,-.08,-.09,.19,-.03,.08,-.07,.46,-.05,.05,.25,-.14,.46,-.08,.31,-.01,-.13,.46,-.08,-.54,.04,.13,.39,.02,.11,-.03,-.02,.41,.1,.35,.26,-.24,.03,-.07,.19,0,-.16,-.17,.05,.19,-.25,.59,-.09,-.38,.01,.09,.1,.3,.36,.15,.05,-.11,.06,-.02,.5,.07,-.08,.08,-.41,.05,-.07,.44,-.3,0,.06,-.42,-.11,-.35,.1,-.04,-.35,.03,-.01,.31,-.04,-.04,-.11,.21,-.37,.56,.02,-.09,.03,.08,-.06,.05,.09,-.17,.39,.4,-.12,-.32,-.33,.17,-.2,.08,-.11,-.22,-.2,0,-.02,-.16,.09,-.17,-.27,.43,-.03,.29,.04,-.07,.07,.01,-.03,-.1,.05,.02,-.16,-.14,-.23,.08,.06,.07,.02,-.2,.09,-.05,.32,.12,-.26,.36,-.18,.05,.23,0,.22,.19,.1,-.12,.22,.03,.42,-.12,.05,-.07,-.1,-.03,.53,.48,.08,-.11,.2,.24,-.26,-.1,.04,-.13,.02,.5,.06,-.01,.43,-.01,.14,-.05,-.07,-.01,.04,-.23,.18,0,-.16,-.05,.13,.08,-.06,.16,-.4,-.28,.01,.14,.05,.16,.11,.03,.01,.03,.43,0,-.14,-.03,.58,.04,.01,-.08,-.08,-.05,.16,.03,.07,-.07,.02,.06,.47,.08,-.27,.06,.42,-.37,.39,.06,-.07,-.07,0,-.17,.02,.11,.04,-.05,-.05,-.04,-.02,.03,.12,.02,-.18,.07,.11,-.11,.03,.05,.5,.1,.05,.18,-.13,.32,-.05,-.02,-.12,.08,.44,-.24,.16,-.32,-.32,.3,.08,-.16,.04,.02,-.53,-.07,.39,-.25,-.02,.58,-.23,.08,.08,-.16,.21,-.05,.12,-.04,-.08,.02,.15,.32,-.04,.15,.28,.31,.21,-.18,0,.11,.27,-.16,-.07,.17,-.11,-.09,-.17,.41,.17,0,.07,.2,.02,.05,.13,-.07,-.01,.33,.07,-.02,.01,.12,-.02,-.08,.26,.35,.07,-.02,.07,.07,-.19,-.06,.11,.43,.33,-.19,-.09,.3,-.05,-.05,.29,.23,.06,-.25,-.23,-.03,.12,-.11,.25,-.05,.06,.38,.15,.1,0,-.03,.17,.47,.39,.09,.38,0,.05,-.09,.08,.27,.21,.19,.38,-.22,-.34,-.23,.05,.16,-.09,.28,.12,.21,.37,.21,.21,-.23,.26,.27,-.2,.27,.24,.08,.01,.31,.05,.16,.05,.27,.33,-.01,-.36,.51,.05,.01,-.21,.48,-.02,-.12,.04,-.08,-.18,-.26,.41,-.24,.15,.26,.19,.27,.08,.23,-.07,.14,-.39,.07,-.38,-.41,.16,-.33,.23,.14,.06,.13,.12,-.03,-.13,.05,.23,.03,.4,.05,-.11,.26,.11,.4,.01,.43,-.14,.48,-.06,.06,.27,.11,-.28,.07,-.12,.08,.48,.04,-.08,-.01,.06,.03,.11,-.25,.09,-.05,.13,-.01,-.38,.33,.02,.08,.03,.1,.11,.37,-.01,.27,-.43,.08,.08,.14,.03,.35,-.15,.1,-.01,-.15,.05,.43,-.03,.36,.01,-.04,.27,.41,.05,.14,.49,.05,.22,.08,.07,.01,-.09,.15,.14,-.03,.1,-.07,.27,-.03,.16,.39,-.16,-.04,-.19,-.26,.54,-.17,-.23,.08,.1,.18,-.24,.43,.39,.31,.28,-.04,.02,.17,-.01,-.02,-.49,-.05,.01,.32,-.03,.14,.04,.45,.07,.27,-.02,.16,.5,.14,.21,.26,-.09,.12,.41,.07,-.18,.1,-.17,.09,.22,-.08,.39,-.02,-.17,.08,.29,.07,-.21,.06,.23,-.09,.57,.29,.66,-.24,.01,.13,.12,-.13,-.02,.05,.04,.47,-.45,.29,-.16,.53,.11,.15,-.07,.3,.3,.42,-.02,.14,0,.13,-.47,-.3,.5,.12,.49,-.25,.51,.1,-.1,-.2,-.07,-.23,.04,-.14,.06,.03,-.43,.02,.08,.33,.12,.02,.15,.06,-.03,.29,.08,.28,.1,.09,-.02,-.01,.36,.05,.4,-.07,.08,0,.06,-.1,-.09,.06,.18,.39,-.03,.53,.12,-.05,.11,-.04,-.04,0,.1,.44,.66,.14,-.04,-.08,-.05,.41,0,-.14,.2,.05,-.24,.38,.37,.03,.45,-.02,-.06,-.06,.27,.23,1,.03,.34,.26,.44,.08,.22,-.12,.49,.06,-.06,.14,-.04,.06,.16,-.02,-.01,-.32,.31,-.26,.58,.15,-.12,.25,.33,-.23,.38,-.11,-.04,.29,.26,.06,-.13,.42,.11,-.32,.01,-.02,-.22,-.1,-.19,.03,-.12,-.13,-.02,-.39,-.08,.72,.62,.48,-.03,-.04,-.12,-.06,-.12,.25,-.45,-.04,-.47,.03,.02,.21,.05,-.28,.01,0,-.06,.4,.04,.27,.16,.46,.33,.57,-.02,.1,.11,-.01,.02,.13,-.06,.04,.17,.14,.13,-.11,.11,.08,-.01,-.24,-.08,.07,-.17,.23,-.08,.25,-.34,-.1,.07,-.2,.01,.02,.02,.1,.05,0,-.14,-.08,.14,.09,.27,-.33,-.31,0,-.02,-.06,-.03,-.3,.11,.02,-.3,.01,.34,.22,-.19,.01,.01,.03,.37,.33,.09,-.18,.06,.04,.12,.44,-.46,-.33,-.1,-.04,-.16,.38,-.15,-.07,-.04,.12,.01,-.06,-.13,.08,.22,.03,-.03,-.17,.13,.35,-.08,.18,-.1,-.01,.07,-.1,.36,-.37,.45,-.03,.02,.11,.04,-.14,.02,.15,-.07,.53,.25,.27,-.04,-.02,-.02,.11,.56,-.39,-.33,.06,0,-.04,-.09,.33,-.04,.35,-.07,.13,.26,.34,.14,-.07,-.02,-.07,.64,.12,.29,.1,.21,-.01,-.46,-.18,-.22,-.01,.26,.24,.36,.09,-.02,.08,.26,.13,.1,-.11,.16,-.02,-.04,-.06,.04,-.12,-.46,.06,.31,.24,.17,.09,-.11,-.15,-.05,.17,.16,.1,-.25,.47,-.28,.03,.03,-.36,.48,.02,.39,0,-.03,-.28,.07,-.26,-.05,-.14,.04,.11,-.09,-.09,.14,-.11,.05,-.21,.03,-.18,.01,-.08,-.19,.43,.04,.22,-.06,-.16,.08,-.03,-.12,.38,-.19,-.01,-.06,.02,-.31,.03,.01,-.08,-.08,-.05,.11,.27,.29,0,.23,-.36,.21,.05,-.06,.01,-.1,.47,-.16,-.11,.11,-.15,-.36,.26,.14,-.06,-.26,.01,-.35,-.11,-.18,-.08,.07,-.01,.52,-.2,.4,.04,-.4,.17,-.07,-.23,-.03,-.11,.39,.32,-.12,.18,-.07,-.22,.02,.42,-.08,.2,.18,-.04,-.01,-.05,.08,-.06,0,-.01,.08,.09,.13,.22,.21,.03,-.11,-.01,-.02,-.03,-.07,-.29,-.03,-.29,.27,-.17,-.05,-.07,-.15,-.01,-.05,.43,.13,-.17,.32,-.14,-.12,.08,-.06,.32,.05,.08,.05,-.01,.02,-.24,-.15,-.52,.6,-.09,.35,-.05,.11,-.08,-.26,-.43,-.08,-.23,-.33,.1,-.07,-.03,.15,-.14,.14,-.05,.3];export{a as rvalData};
