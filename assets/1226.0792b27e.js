const a=[.19,.04,.19,0,.24,.38,.12,.28,-.2,.23,-.29,.28,-.17,-.26,-.23,.21,.13,.05,-.12,.07,.03,-.34,.13,-.34,-.18,.14,-.34,.31,.16,-.41,.21,-.29,.14,.41,-.31,.08,.05,-.34,.26,.17,-.1,.22,.35,.18,-.15,-.39,-.18,.08,-.41,.28,.11,.33,.21,.06,.63,-.18,-.17,.57,.38,-.09,.54,.31,.33,0,-.1,-.26,.29,-.35,.04,-.05,.06,.05,.49,-.2,.2,.01,-.22,.53,.04,-.11,-.18,-.09,-.13,.18,.15,-.58,.11,-.13,-.18,-.13,.92,.11,.17,.15,.09,.06,-.2,-.06,.22,.55,-.05,.3,.51,-.13,.47,-.25,-.38,-.43,.11,.35,.01,.49,.07,.03,.09,.01,-.04,-.26,-.13,-.11,-.2,-.33,.34,-.11,.19,.32,.27,.09,-.19,-.01,.39,.24,-.03,.45,.06,.11,.65,.05,-.23,.17,.44,.26,.37,.15,.32,.08,.04,.43,.35,-.14,.26,.15,-.01,.11,.36,.83,.08,.38,-.07,-.32,.54,.45,-.3,.19,.18,.41,.11,-.22,.42,-.08,.35,-.19,.49,.31,.08,-.5,.04,-.45,.44,.08,-.32,0,.09,-.02,.43,-.05,.01,.39,.51,.22,.12,.39,-.18,.35,.4,.14,.38,.37,.1,-.26,-.16,.19,.03,.09,-.12,.55,.15,.5,.48,-.12,.35,-.26,.21,-.08,.54,.12,.02,.29,-.49,-.44,.33,.39,.38,.11,.21,.02,.45,-.24,.58,.26,.03,-.05,-.01,.16,-.27,.36,-.21,-.34,.34,-.07,.58,-.32,.33,.59,.19,.25,.08,.1,.06,.07,.38,-.31,.62,.05,.4,-.37,.05,.01,.27,.07,0,.78,.13,.41,.43,.44,-.28,.28,-.14,.11,.04,.08,.09,.21,-.04,-.05,-.34,.52,.25,-.43,.61,-.48,-.28,-.15,.49,.05,-.51,-.04,.45,-.23,.03,.41,.16,.18,.19,.37,-.24,.03,.2,.42,.05,.15,-.18,-.15,.27,.1,0,.54,.7,-.29,.23,-.07,-.33,.26,.35,.44,.38,.81,.25,.18,.23,.29,-.21,.22,.4,.53,.25,.27,-.03,.48,-.31,.3,.08,-.25,-.2,-.07,-.24,.43,-.08,-.31,.46,.29,.07,.01,0,.24,.11,.64,.31,.44,.37,.53,.29,.5,-.06,-.28,.3,-.14,.31,.09,-.12,-.06,.45,-.48,.04,-.23,.41,.06,.66,-.07,-.3,-.09,-.25,.33,.49,.41,.23,.2,-.06,.82,.04,-.02,-.09,.07,0,.04,-.11,-.03,.18,.23,.3,-.35,.05,-.13,-.22,.18,-.33,-.15,.32,.1,.09,.43,.25,-.08,.41,-.1,-.16,.32,.25,.36,.2,-.26,.25,.3,.58,.11,.39,.01,.64,-.43,.28,-.11,-.15,-.3,-.26,.07,.07,-.29,.42,.4,.2,.28,-.07,.24,.63,.04,.02,.26,.2,.44,.53,.16,.34,-.05,.36,.55,.1,.19,-.1,-.19,.2,.35,-.18,.29,-.15,.26,-.52,.12,.54,.01,.23,.34,-.09,.53,.08,.08,-.15,-.05,-.07,.07,-.43,.02,.34,.1,.8,.07,.21,.06,.17,-.48,.35,-.11,.3,.13,.38,.36,.36,.15,-.05,.2,-.05,.26,-.21,.31,.38,-.02,.35,-.28,.13,.54,.64,.26,.34,-.05,.23,.1,.6,.15,.07,.65,.38,.35,.28,.07,.38,-.41,.65,.4,.57,.1,-.09,.29,.14,-.04,.36,.28,.21,.33,0,.33,.4,.35,0,.47,.39,.34,.63,.08,.32,.19,.08,.8,-.34,-.31,-.2,0,.31,-.33,.29,.22,-.47,.04,.21,.1,.24,-.15,-.37,.39,-.35,-.01,.18,-.4,.24,.14,-.06,-.14,.06,-.15,.65,-.17,.24,.22,-.21,.25,.18,.16,-.18,-.26,.44,-.12,-.2,.46,.36,.44,.41,-.18,.13,.33,-.23,-.01,-.14,.04,-.02,.38,.13,.06,-.04,.12,.62,.19,.12,.16,.27,.52,.16,-.41,.71,.03,.19,.16,-.12,-.05,.04,.43,-.14,.05,.18,.27,-.21,.39,.22,.21,.42,.08,.49,.27,.19,.63,.43,.12,-.2,-.48,-.22,.5,.13,.4,.08,.57,.21,-.38,.51,.09,-.26,.3,.15,.45,.39,.18,-.24,.42,.15,-.1,.4,.22,.07,.13,-.25,-.25,-.22,-.06,.19,.34,.15,.93,.16,.39,.05,.39,.17,.15,-.09,.21,-.1,-.4,.55,.67,.3,.13,-.08,.12,-.07,.32,.05,.09,.52,.43,-.11,.19,.16,.13,.1,-.02,.58,-.41,.35,-.18,.34,.26,.28,-.04,.21,.11,.22,.01,.28,-.28,.16,.08,.23,-.41,.16,.36,.37,.2,-.02,-.04,-.13,.28,-.23,-.19,.18,.4,.03,-.16,-.02,-.13,-.2,-.57,.15,.29,-.06,.46,.22,-.13,.41,.64,-.03,-.07,.26,-.11,-.36,.16,-.34,-.38,-.05,.02,-.15,-.1,.27,.49,.26,-.23,.09,.32,.04,-.05,-.13,-.03,.32,.02,.1,-.29,.05,.3,-.04,-.01,.27,-.2,-.33,.28,.54,.63,.22,.39,.81,.08,.19,.13,.23,.88,.06,-.07,.13,.35,.18,.48,.44,.45,.1,-.49,-.38,.43,.4,-.35,.12,-.27,.19,.33,-.08,.41,-.23,.21,-.39,.33,.1,.13,.22,-.13,.89,-.13,.1,.12,.24,-.23,.31,.38,-.3,-.44,-.13,.11,.24,0,.16,-.12,-.21,.02,-.03,.6,-.2,.06,.21,.02,.52,.08,.11,-.22,-.07,.14,.36,-.48,.54,-.05,-.34,.38,-.39,.29,-.41,-.29,.34,-.12,0,-.31,.03,-.03,.02,.24,.92,.77,.22,-.13,.34,.14,-.2,-.16,.46,.67,-.23,.4,.28,.35,.03,.13,0,.82,.49,.88,.13,.21,0,.34,-.35,.12,-.11,.27,-.13,.09,.51,.03,.45,.24,.24,-.24,-.28,.63,.39,-.24,-.03,-.21,.22,.04,.07,-.06,.11,-.12,.29,.03,.19,.66,.19,.49,.28,-.38,-.45,.26,.46,.21,.3,.51,.36,-.14,.51,-.19,-.08,.12,.42,.25,.41,.11,.18,.87,.42,.23,-.05,.19,.23,-.21,.45,-.04,.39,.26,.14,.19,.45,.08,.23,.28,.09,.12,-.11,-.11,.25,-.09,.28,-.03,.45,-.07,.23,.24,.24,.06,.06,-.04,.32,-.11,.33,.08,.11,.12,-.33,-.06,-.46,.38,-.37,-.22,.11,-.28,.11,.48,.41,.21,.18,.39,-.45,.21,.25,.16,.55,.34,.36,.6,.36,.39,.57,.32,-.13,.61,-.22,.1,-.11,0,.04,-.04,.16,.19,.12,-.27,.25,.07,-.21,.39,-.19,.44,.32,-.47,.29,.18,.25,.23,.45,-.03,.25,.11,.11,.57,.14,.27,.26,-.07,.32,-.2,.45,-.32,.21,.46,.05,.48,-.03,.15,.07,-.14,.38,.11,-.66,-.1,.14,.8,.22,-.03,-.18,.32,.56,.21,.29,.27,-.19,0,-.05,.24,.53,.02,-.5,.34,-.18,-.21,.56,.32,-.23,.05,.18,.04,.45,.46,.65,.03,-.01,.12,.01,.47,.5,.11,.25,-.34,.07,-.02,.57,-.41,.03,-.14,-.39,.12,-.2,.13,.31,-.29,.15,.39,.15,.29,.24,.21,.13,-.38,.52,-.11,.02,-.01,.15,-.04,.26,.1,-.4,.54,.44,-.14,-.43,-.43,-.02,-.21,.4,.05,-.21,-.27,-.01,.17,-.28,.17,-.08,-.29,.91,-.04,.4,.27,.16,-.24,.03,.26,.13,.42,.36,.2,.11,-.19,-.14,.09,.44,.31,-.06,.04,.24,-.1,.11,.06,.62,.19,-.17,.7,.27,.39,.45,.32,-.13,.07,.26,.39,-.01,.1,.22,.01,.24,.51,.43,.32,-.03,.5,.35,-.08,-.1,.01,-.15,-.1,.51,-.03,-.01,.54,-.13,.28,.11,-.08,.12,.09,.14,.07,.02,-.16,.19,.22,.11,.26,.45,-.2,-.19,.33,.32,.26,.5,.48,.37,.23,.18,.43,.24,.12,-.33,.43,-.01,.41,-.13,.21,.19,.46,.19,.2,.02,.3,.3,1,-.08,-.53,.72,.9,-.32,.45,.21,.18,.22,.11,-.11,.14,.28,.31,-.05,.17,.08,.15,.31,-.08,.14,.02,.26,.44,.15,.05,.25,.96,.14,-.09,.47,-.3,.3,.32,-.1,.13,-.08,.37,-.32,.57,-.4,-.3,.43,.34,-.01,.15,.28,-.46,.21,.27,.13,.23,.28,-.03,.44,.4,-.09,.3,-.18,.23,.17,-.09,.01,.36,.33,.22,.3,.58,.6,.31,-.04,.36,.18,.44,.02,.17,-.06,-.09,-.06,-.28,.49,.52,.04,-.11,.33,.16,-.15,.23,.14,.25,.45,.05,0,.26,.21,.29,-.25,-.01,.62,.13,.02,.27,.28,-.44,-.06,.34,.39,.38,.15,-.03,.32,-.02,-.11,.44,.25,-.33,-.37,-.24,-.08,-.14,-.3,.61,.07,.09,.42,.32,.42,.1,-.16,.37,.33,.55,.45,.4,.23,.34,-.37,.19,.36,.36,.42,.6,-.16,-.34,-.21,.1,.1,.02,.35,.03,.17,.3,.42,.06,-.28,.17,.3,-.06,.24,.19,-.21,-.08,.57,.3,.58,.25,.69,.61,.02,-.37,.5,.1,.17,-.24,.55,-.1,-.16,.22,.17,-.32,.01,.43,-.38,.22,.35,.29,.44,.34,.17,-.09,.17,-.25,.36,-.08,-.05,.25,-.26,.21,-.14,.06,.1,-.1,-.36,-.12,-.04,.3,.22,.86,.1,.16,.25,.31,.58,-.02,.83,-.23,.32,.23,.19,.37,.08,-.01,.03,.01,.03,.26,.09,-.11,.17,.14,.17,.23,-.2,-.1,-.04,.36,.13,-.33,.55,.3,.23,-.05,-.02,.22,.67,.01,.14,-.32,.38,.05,.44,.23,.57,-.23,.36,.03,-.16,.2,.47,.09,.58,-.04,-.13,.65,.4,.3,.32,.28,.29,.59,.02,-.11,.04,.1,.04,.03,.16,.53,.06,.31,.1,.35,.6,-.09,.02,-.28,-.21,.49,-.15,-.31,.16,.08,.32,-.37,.85,.9,.37,.3,-.4,.03,.32,.19,.13,-.45,.56,.19,.28,.06,.35,-.06,.87,.2,.51,.2,.27,.66,.26,.42,.33,.04,.3,.43,.13,-.1,.29,-.06,.34,.34,.24,.87,.24,0,.25,.25,0,-.11,.2,.08,.35,.47,.23,.4,-.3,.17,.28,.25,-.07,.25,.34,.14,.42,-.42,.44,-.28,.37,.1,.35,.22,.33,.37,.34,.01,.29,-.03,.31,-.21,-.36,.38,-.16,.42,.07,.35,.06,-.14,-.4,.22,.31,.16,.02,.21,-.06,-.11,.12,.14,.37,.21,-.11,-.21,.11,.16,.63,.38,.34,.34,.19,.22,-.18,.63,-.28,.35,-.06,.05,-.08,.19,.12,-.08,.3,.17,.47,-.09,.38,.32,.08,.36,.11,.21,.6,.01,.39,.5,.26,-.05,-.18,.27,.41,.15,.6,.26,.64,-.2,.42,.42,.43,.53,.03,.13,.2,.36,.3,.47,.1,.36,.39,.37,.24,.52,-.29,.31,.31,-.29,.39,-.35,.27,.31,.05,.13,-.24,.21,-.24,.44,.22,-.22,.4,.13,-.24,.26,.19,-.09,.04,.33,.22,-.27,.55,.26,-.33,-.18,.06,.08,.15,-.14,.05,.43,.21,0,-.41,-.13,.45,.39,.23,.15,.23,.06,-.12,-.02,.43,-.34,0,-.38,.39,.11,.2,.12,-.52,-.11,-.11,.28,.5,.21,.38,.28,.42,.27,.4,.2,.35,.07,-.02,-.11,.3,-.07,.18,.1,.21,.23,.07,.3,.07,.23,-.33,-.03,-.05,-.01,.11,-.16,.19,-.36,-.21,.18,-.24,-.05,-.08,.19,.35,.29,-.14,-.04,.12,-.01,.19,.16,-.39,-.39,-.15,.2,.15,.21,-.05,-.33,.21,.07,.25,.46,.48,.13,.18,.16,.18,.39,.4,.27,-.22,.29,.16,.4,.89,-.5,-.42,.41,.11,.04,.62,.23,.11,.09,.39,.19,.09,-.01,.42,-.12,.4,-.05,-.15,.28,.81,-.15,.49,.21,.04,.39,.3,.76,.17,.68,.18,.09,.22,.18,-.02,.31,.32,-.12,.43,.14,.25,.27,-.17,.07,.03,.58,-.44,-.09,-.1,.1,-.05,-.13,.79,.07,.78,.27,.36,.19,.29,.1,-.11,.16,-.27,.6,.32,.66,.05,.07,.13,.15,.12,-.12,.06,.19,.59,.61,-.06,-.14,.11,.26,.22,.02,-.36,-.05,.3,.26,.31,.26,-.04,-.33,.3,.55,.59,.38,-.09,-.05,.11,.17,-.05,.23,.25,-.07,.91,.19,.32,.13,-.35,.4,.13,.46,.27,-.15,-.31,.08,-.36,-.15,-.11,.16,-.25,-.24,.25,.54,-.14,.34,.22,.28,-.09,.28,-.05,-.24,.88,-.1,.27,.05,-.17,.01,.21,.11,.9,-.02,.06,.22,.21,-.28,.12,.12,.1,.22,.2,-.07,.17,.41,.17,.59,-.34,.19,-.03,.21,.13,.18,.28,-.01,-.05,.15,.07,-.32,.18,.44,.15,-.3,.18,-.29,-.13,.15,.18,.15,.22,.48,-.1,.34,0,-.17,-.03,-.19,-.19,.07,-.06,.54,-.16,-.19,.44,-.01,.07,.32,.84,.13,.54,.06,.12,-.04,.13,.45,.18,.23,.27,.3,.38,.14,.21,.1,.19,.15,.14,.07,.18,-.05,-.18,.05,-.27,.79,-.26,.04,.12,.1,.06,.12,.29,.51,-.16,.45,-.17,0,.36,.12,.21,.05,.51,.3,.12,.27,-.31,-.09,-.34,.58,.25,.29,.21,.26,.18,.22,-.4,.11,-.2,-.36,.23,-.17,-.09,.18,.09,.45,-.08,.39];export{a as rvalData};
