const a=[.17,-.11,-.34,-.1,-.33,.33,-.15,.82,.43,.03,-.05,-.21,-.04,.08,-.18,.09,-.14,-.1,-.1,.21,.08,-.32,.16,-.2,.18,.03,-.56,-.21,-.02,-.58,.2,-.25,-.08,-.06,-.14,.17,-.25,-.07,-.1,-.33,.03,-.11,-.22,-.03,.03,-.02,-.22,.07,-.18,.53,.18,.1,-.28,-.1,.28,.07,.19,.24,.04,-.13,.37,-.11,.05,.03,-.13,-.53,.02,-.17,.02,.06,.09,-.22,.52,-.23,-.25,-.06,-.08,.38,-.17,-.29,.12,-.18,.13,-.04,-.26,-.24,.1,.13,.16,-.03,.15,.01,.76,.16,-.11,.25,.17,-.13,-.01,.4,-.09,.04,.1,.05,.26,-.02,-.25,-.15,.05,.11,.09,.44,.02,.19,0,-.23,-.17,-.34,.15,.31,.16,-.19,.02,.2,.26,.31,-.23,.18,-.46,-.2,.86,.56,.15,.49,-.25,.06,.53,.22,-.43,.05,-.03,.05,.17,.13,.18,.25,.13,.07,.29,.21,-.01,.72,.14,.18,.88,.29,-.01,-.14,0,-.11,.47,.15,.21,.34,.77,.42,-.1,-.41,.42,.01,.11,-.34,.73,.51,.13,-.24,.18,-.49,.59,-.15,-.05,-.05,.01,-.57,.26,.23,-.02,-.02,.47,-.05,-.03,.8,-.07,.38,.22,-.1,.01,.11,-.03,-.19,.21,.33,-.17,.11,.14,-.01,.17,.59,.48,.03,.9,-.14,-.04,-.08,.23,.19,.03,.86,-.29,-.08,.28,.23,.02,-.15,.33,-.18,.87,-.32,.2,.1,0,.03,-.09,-.37,-.14,.11,-.26,-.01,.1,-.01,.48,-.29,.77,.56,.82,.82,-.09,.21,-.1,-.07,.44,-.15,.28,.28,-.07,.04,-.06,.35,.08,-.53,-.1,.05,.51,-.03,.23,.23,-.24,.08,.09,.11,-.25,.04,-.13,-.27,-.03,-.08,-.51,.53,-.14,-.16,.54,-.27,.12,.06,.44,.25,-.34,-.15,.29,-.18,.63,.4,-.05,.74,.59,-.22,.18,-.03,.34,.35,.17,-.39,-.33,.08,-.16,.27,.29,.26,.26,.08,-.05,.01,-.07,.17,-.01,.34,.33,.19,-.32,.09,0,-.12,-.2,-.02,.45,.46,-.07,.08,.3,.46,.26,.32,.13,-.14,-.6,-.14,-.47,.38,.59,.07,.57,-.38,-.13,.09,-.25,-.31,.01,.48,-.21,.49,.2,.58,.1,.45,.18,.12,.2,-.18,-.2,-.46,.27,.08,.41,-.08,.06,.26,.16,-.22,.04,-.08,-.33,-.15,.36,.5,.24,.35,-.06,.02,0,.34,.04,.02,-.06,.07,.1,.17,-.13,-.11,-.04,-.11,-.11,.01,-.17,.42,.4,-.4,-.28,0,.07,.22,-.33,.27,-.18,.4,.4,-.06,-.23,-.13,.17,.12,-.3,.22,.15,-.09,.09,-.06,-.02,-.33,.53,.31,.27,-.14,-.2,.06,.22,-.24,-.28,-.14,.41,.4,.8,.49,.33,.13,.52,-.35,.44,-.04,-.26,.18,.08,.07,.12,.24,.2,.26,-.37,-.01,.44,-.18,.47,.45,.04,.18,.05,.19,-.27,-.24,.46,.41,-.25,.01,.2,.46,.23,.28,.01,.08,-.1,-.12,-.17,-.29,-.11,-.04,.42,.08,.13,.64,-.15,-.33,.14,-.19,-.14,.72,.18,.31,.35,.53,-.14,-.41,-.05,-.19,.54,.19,-.26,-.11,.38,.01,.13,.54,.51,.15,-.07,-.07,-.04,.17,-.11,.17,-.31,.28,.06,.36,-.01,.26,.16,-.12,.31,.72,.52,-.04,-.33,-.33,.18,.13,-.13,.04,.08,-.07,.15,.11,.76,.38,.15,.62,.1,.24,.24,.01,.42,-.14,.01,.14,-.05,-.47,-.17,-.06,.3,-.47,-.24,.02,-.43,-.18,-.28,-.38,.12,-.04,-.18,.43,-.11,.04,-.22,-.27,.39,1,.05,.11,.05,-.12,.34,.03,-.22,-.37,.34,.48,-.15,-.42,-.01,.08,.33,-.12,-.2,0,.16,.32,.41,-.27,-.33,-.05,-.13,-.28,.14,.08,-.05,-.16,.93,-.01,.21,-.39,.31,.46,.08,-.23,-.36,.4,-.21,-.54,.37,.01,-.12,-.04,-.01,-.26,.07,.79,.09,.13,-.35,.82,-.18,-.03,.43,.36,.32,.05,.38,-.22,.22,.16,.04,.8,-.07,.13,.03,.47,.14,.28,.05,.58,.66,-.34,.18,-.07,-.18,-.22,-.14,-.01,.44,-.05,.04,.4,-.18,-.06,.56,-.26,.08,.1,-.21,-.08,.09,.18,-.39,-.27,-.15,.15,-.07,.06,-.02,.29,.3,.02,.35,-.09,-.09,-.54,.15,.34,.18,-.26,-.02,.09,.23,.31,-.44,-.06,.52,.14,-.01,.01,.06,.84,.04,.05,.2,.01,.05,.62,-.11,.13,-.2,.16,-.05,.84,.54,-.23,.12,-.14,-.09,-.33,.09,-.52,.15,.55,.2,.62,-.01,.03,.56,.01,.1,.05,.79,-.02,-.25,.08,-.11,-.37,.02,-.31,-.04,-.18,0,.35,-.11,-.08,.5,.56,-.25,.05,-.29,.13,-.05,-.01,-.04,-.53,.07,.24,.37,-.27,.3,.4,-.03,.07,-.32,.21,-.15,.14,.23,-.44,.02,-.21,-.39,-.39,.06,.2,-.37,-.2,.03,.06,-.02,.24,.32,.28,-.17,.11,.41,-.04,.53,.85,-.25,.17,-.3,-.06,.02,.03,-.32,.11,.38,.46,.01,-.27,-.28,.27,.03,-.2,-.09,-.39,-.31,.17,.24,.08,.56,-.03,.02,-.04,-.11,.34,.55,-.06,.1,-.08,.06,-.04,-.12,-.2,.1,.63,.13,-.29,-.25,-.25,-.21,.31,.98,-.17,-.04,-.26,-.02,.19,-.18,-.02,.2,-.18,.23,-.15,-.07,-.24,-.08,.45,-.04,-.26,-.07,-.13,.11,.66,-.22,-.15,-.16,-.27,.6,-.06,.31,-.42,.39,.13,-.07,.05,.12,.13,.81,-.11,.33,-.23,.25,.02,.29,.33,-.22,.12,.38,.83,.41,.14,0,.41,.34,.1,-.06,.4,.02,.18,-.53,.15,.12,-.08,-.25,.28,.44,.39,-.08,.78,-.07,.22,.15,.45,-.08,-.08,.02,.04,-.18,0,.32,-.08,-.07,.01,.09,.12,.04,.56,-.01,.59,.09,-.52,-.16,.27,-.15,.41,.07,.47,.73,.12,.42,-.09,.25,.02,-.06,-.35,.13,-.37,-.04,.08,.8,-.45,-.3,-.15,-.12,.22,.61,-.05,.07,-.13,-.18,.2,.26,.01,.45,-.18,.86,-.05,-.07,-.14,.75,.14,.22,.23,.63,-.07,-.08,-.21,-.1,.28,.06,.1,.66,.16,.04,.11,.01,.5,.24,.08,-.31,.23,-.35,.13,.01,.22,.59,.29,.62,.21,-.16,.79,-.35,.86,.66,.78,.37,.04,0,.34,.41,.81,.65,.79,.07,.53,-.04,.28,.09,-.04,-.05,.01,-.12,-.05,-.08,-.35,-.08,-.21,-.14,-.02,.03,.4,.48,-.31,.52,0,.52,.27,.31,-.14,-.05,-.17,-.07,.21,-.02,.23,.04,.14,0,-.18,.54,.04,.01,.39,.04,.46,-.13,.74,-.09,.11,.59,-.36,-.39,-.07,.04,.41,-.07,.12,-.17,-.14,.35,.23,-.18,.52,.15,.25,-.16,.24,.24,.07,-.34,-.03,.39,.06,.36,.17,-.45,.36,-.39,-.05,.32,.41,.33,-.34,.09,.3,-.29,.52,.15,-.21,.1,-.11,-.03,.08,.48,-.23,.03,.15,-.29,.25,.02,.16,-.2,-.12,-.38,.15,.98,.24,.01,-.08,.82,-.03,.54,.35,-.25,.37,-.14,.14,.01,.27,-.12,.53,.49,-.03,-.08,-.22,.03,.05,.38,-.12,-.18,-.32,-.14,-.07,.01,.03,.13,-.26,.12,-.16,.41,-.1,-.33,.13,.02,-.35,.08,.49,.21,.44,-.01,-.15,.1,.12,0,.16,.02,-.54,-.26,.41,.07,.15,.35,-.1,.04,.32,.15,.48,.06,.12,.32,.38,.13,.51,.02,.09,-.17,-.15,-.03,.27,.34,-.16,-.04,.4,.3,-.22,-.29,-.07,.09,.06,.63,.13,.19,.33,-.02,.08,-.34,-.26,-.09,-.39,-.05,.71,.66,.21,-.09,.02,-.05,-.02,.03,-.43,-.19,.23,.05,-.11,.3,.13,.31,-.34,-.39,.89,-.25,-.43,-.09,.48,-.1,.24,.22,-.05,-.33,.09,.15,0,.27,.18,.14,.14,.01,-.4,.14,.05,-.6,.24,.04,-.05,-.35,.34,.11,.06,-.06,.14,-.26,-.1,-.22,.14,.16,.08,-.13,.03,.1,.12,.07,.15,.21,.11,-.01,.43,.34,-.11,.81,.01,.14,-.3,.42,.73,-.38,.26,-.57,-.39,.67,-.04,-.13,.09,.17,-.34,.12,.84,-.11,-.04,.6,.03,.31,.3,.2,.68,.36,.07,-.36,-.18,-.01,.08,.11,-.01,.03,.32,.25,.58,.3,-.11,.2,.22,.06,.4,.38,.22,-.24,-.34,.44,.48,-.18,-.22,.27,-.39,.26,.04,.21,-.2,.3,.3,-.27,.06,.24,.35,.03,.28,.34,.31,-.43,-.1,-.21,-.37,-.1,-.17,.39,.23,-.05,-.16,.85,-.07,.04,.13,.61,.18,.1,-.1,.46,.25,-.19,.34,.02,-.03,.56,.61,.2,.25,.24,.48,.42,.57,.08,.64,.29,.17,.04,.61,.41,.6,.21,.54,.02,-.16,.15,.57,.57,-.07,.34,.45,.66,.5,.2,.68,-.01,.73,.71,-.14,.66,.24,.02,.07,.38,.15,.27,.28,.39,.46,-.21,-.14,.64,.07,-.26,-.04,.59,-.06,-.49,-.36,.2,-.17,.22,.44,-.29,.03,-.03,-.21,.22,.32,0,-.22,.14,-.21,.08,-.02,.07,.05,.15,.41,.22,-.02,-.14,.03,-.01,.01,.23,.34,.08,.2,-.08,.13,.05,.02,.51,.1,.2,-.22,.67,-.05,.05,.69,0,-.12,-.01,.29,.16,.4,-.08,.32,-.12,.1,-.06,.46,-.15,.01,-.09,.2,.02,-.15,.35,.14,0,.07,-.01,.12,.4,-.07,.66,-.31,.05,-.01,.19,.27,.39,.01,.5,.22,.09,.22,.55,.15,.42,.51,.11,.2,.65,.04,.41,.37,-.05,-.04,-.03,.09,.07,.27,.13,.38,-.19,.36,-.18,.46,-.23,.5,.06,.12,.27,.04,-.12,.57,.16,-.11,-.15,.13,.02,-.04,.09,.19,.45,.12,-.09,.01,-.09,.17,-.09,-.41,.18,.17,.62,.51,.13,.04,.17,.03,.52,-.34,-.06,.38,-.18,.15,-.07,.45,.24,.45,.15,-.33,.23,.53,.21,-.09,.01,.16,.19,-.5,.02,.19,-.1,-.15,-.15,.25,.24,.7,.14,.18,-.25,-.09,-.13,-.27,.37,.13,.15,.15,.6,-.43,.36,-.18,.51,-.1,-.06,-.05,.18,.67,.58,-.41,-.28,.02,-.04,-.17,-.1,.61,.37,.65,-.41,.64,.15,.01,.05,.16,-.1,.43,-.13,-.29,.03,-.13,-.22,.75,.55,-.36,.11,.39,.42,.4,.31,.29,.47,.16,.15,.13,.09,.35,.19,.37,-.02,-.02,.09,.28,-.35,.17,.12,-.13,.49,0,.48,-.08,.27,.17,.26,.05,.24,.3,.65,.43,.16,-.04,.06,.1,.09,.1,-.13,-.17,.24,-.07,.22,.81,.36,.45,-.09,-.24,-.39,-.03,-.17,.29,-.41,.51,.32,.41,.12,.39,0,.64,.26,.03,.02,.11,-.39,.26,-.02,-.03,-.11,.75,-.04,.35,.08,-.12,.39,.96,-.17,.33,.15,-.24,.05,-.11,-.18,-.14,.43,.07,-.33,-.11,.24,.05,-.25,-.14,.25,.13,.1,-.04,-.02,.05,.22,.09,.42,-.33,-.32,-.52,-.02,-.13,-.04,-.32,.46,-.22,-.07,.3,.57,.04,-.18,.01,-.09,.37,.37,-.28,.1,.23,.67,.43,.51,-.03,.15,.16,.12,.14,-.05,-.07,-.39,-.11,-.16,-.31,-.06,.22,.06,.13,-.53,-.2,0,.27,.39,-.04,.77,.08,-.19,.19,-.04,.17,.15,-.07,.14,.15,.1,-.09,-.42,.37,-.3,.85,-.55,-.2,.05,-.07,-.38,-.18,-.41,.11,.21,-.03,.24,.39,.01,-.18,.16,-.17,.11,.41,.44,.25,0,.2,-.11,-.14,.13,-.34,-.16,.03,-.02,.26,.38,.04,.44,-.22,.07,-.39,-.37,-.32,-.08,.06,0,.12,-.12,-.01,.25,.02,.46,-.04,-.17,.19,.12,.18,-.35,.29,-.33,-.07,-.06,-.03,.06,.15,.21,-.04,.33,.65,.65,-.05,.02,-.12,.62,.43,-.07,-.17,.05,-.04,-.18,.06,.29,.19,.15,.17,-.03,.71,.43,.25,-.1,.22,.11,.54,.16,.37,.16,.57,-.18,.11,0,-.15,-.19,.65,.48,.55,.1,.11,.27,-.25,-.06,.2,0,-.11,.12,.19,-.08,-.05,-.08,-.34,0,.54,-.12,.13,.03,.23,.02,-.37,.14,.11,-.08,-.1,.09,.11,-.11,-.08,-.43,.63,.42,.52,.44,.25,-.04,.1,0,-.01,-.07,-.35,.34,.09,-.09,.35,-.06,.25,-.16,-.08,-.07,.06,-.2,-.22,.2,-.04,.14,0,-.11,.11,.05,.01,.14,.18,-.25,-.26,-.34,-.22,-.4,-.42,-.22,.14,-.04,.15,.13,.27,-.09,.25,-.19,-.01,-.04,-.11,-.17,.02,.67,-.02,.01,0,-.36,-.34,.74,-.12,.28,-.35,.11,-.37,0,-.08,-.33,-.01,-.28,.41,-.02,.52,.01,-.29,.43,.16,-.35,.07,-.14,.4,.14,.08,.38,-.41,0,-.22,.13,-.07,.14,.19,.26,-.01,-.07,-.08,-.29,-.13,.09,.02,-.05,-.28,.86,.01,-.37,.14,.26,-.22,-.1,-.35,-.23,-.23,-.5,.14,-.18,-.15,-.12,-.06,-.24,-.17,.71,.02,-.22,.43,-.12,-.16,.14,-.39,.64,-.14,.02,.09,-.2,.01,-.25,.17,-.4,.59,-.26,.37,-.1,.2,.06,.08,-.48,.03,-.25,-.14,.1,.38,.03,.07,-.21,.19,.14,.38];export{a as rvalData};
