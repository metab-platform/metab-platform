const a=[-.09,-.05,.05,-.09,.16,.13,.18,.24,-.2,.19,-.38,.2,.02,-.09,-.38,.04,.01,.02,.18,0,-.02,-.36,.12,-.46,-.25,.06,-.34,.3,.18,-.43,.17,-.27,-.02,.09,-.45,-.06,-.18,-.45,.3,-.02,-.19,.11,.23,.01,-.01,-.5,-.13,-.1,-.49,.46,.15,-.03,.08,-.04,.55,-.28,-.19,.25,.38,-.15,.47,.19,.25,-.04,-.16,-.34,.19,-.46,-.02,-.03,-.04,-.11,.48,-.06,.08,-.13,-.36,.47,-.06,-.23,-.19,-.12,-.1,.09,.25,-.43,.05,-.04,-.06,-.22,.9,.15,.26,.15,-.01,.34,-.14,-.34,.27,.49,-.04,.22,.5,-.13,.49,-.04,-.4,-.35,-.03,.3,-.23,.57,.2,-.07,.13,-.09,.02,-.36,-.12,-.15,-.1,-.22,.11,-.05,.09,.32,.16,.05,-.3,-.15,.45,.29,.05,.54,-.23,-.02,.63,.22,-.3,-.11,.34,-.05,.35,.07,-.02,.02,-.05,.44,.3,-.09,.19,.16,.02,-.03,.39,.81,.07,.01,-.14,-.45,.55,.39,-.24,.3,.25,.41,-.02,-.3,.42,-.16,-.04,-.3,.48,.32,.09,-.55,.09,-.49,.42,-.07,-.32,-.04,.08,-.14,.39,.2,-.23,.07,.56,.21,.08,.38,.02,.27,.3,.01,.37,.28,-.16,-.2,-.19,.16,-.1,-.13,-.06,.48,.16,.53,.49,.14,.4,-.4,.1,-.21,.2,.12,.08,.34,-.55,-.41,.32,.48,.39,.01,.25,-.11,.49,-.31,.5,.23,.03,-.03,-.06,.07,.02,-.02,-.32,-.44,.4,-.03,.55,-.43,.41,.6,.23,.28,.1,-.05,-.12,.04,.38,-.11,.6,.18,.29,-.16,.05,-.08,.2,-.05,-.1,.88,.1,.31,.42,.48,-.2,.2,-.21,-.1,-.07,-.09,-.09,.13,-.1,.12,-.39,.4,.19,-.49,.62,-.5,-.35,.02,.55,.02,-.45,-.23,.47,-.2,.1,.53,.08,.25,.23,.26,-.34,-.09,0,.45,.06,.03,-.14,-.08,.17,.12,.06,.45,.77,-.38,.15,-.01,-.06,-.08,.28,.46,.45,1,.16,.22,.19,.29,-.31,.18,.5,.58,.1,.3,-.02,.53,-.22,.25,.05,-.11,-.23,-.16,-.35,.33,-.08,-.27,.46,.25,.21,0,-.15,.12,.09,.62,.28,.44,.3,.45,0,.57,-.12,-.33,.21,-.14,.27,-.02,-.25,-.12,.57,-.3,.11,-.19,.1,-.08,.6,-.1,-.38,-.05,-.21,.28,.37,.48,.31,.13,-.13,.74,-.13,.02,-.04,-.01,-.02,.02,-.09,.01,.1,.11,.22,.06,-.01,-.08,-.14,.07,-.33,-.14,.3,.11,.24,.45,.17,-.09,.42,-.04,-.24,.27,.26,.3,.16,-.17,.27,.24,.56,-.1,.34,-.06,.62,-.19,-.01,-.12,-.3,-.02,-.2,-.1,-.09,-.09,.45,.49,.39,.27,-.15,.01,.66,-.06,.09,.16,.1,.24,.45,.11,.27,-.3,.42,.55,-.06,.14,-.21,-.31,.19,.35,-.11,.41,-.2,.25,-.47,-.07,.38,.05,.15,.22,-.13,.45,.01,.11,-.03,.1,-.13,-.05,-.37,-.15,-.02,-.25,.83,-.03,.13,.09,0,-.46,.28,-.24,.15,.19,.35,.34,.36,.25,-.1,.09,-.03,.18,-.03,.32,.18,-.11,.46,-.17,.04,.6,.66,.25,.23,-.14,.16,.1,.54,.03,-.03,.61,.3,.36,.21,.16,.38,-.44,.4,.45,.5,.05,-.02,.16,.25,.05,.33,-.09,.08,.09,-.03,.19,.44,.46,.05,.45,.06,.06,.66,.1,.4,.13,.08,.92,.04,-.34,-.24,.13,.07,-.36,.24,.28,-.46,-.11,.09,-.08,.18,.13,-.31,.49,-.3,-.01,.08,-.44,.27,.19,-.07,-.02,.1,-.06,.48,-.03,.19,.1,-.2,.25,.1,.02,-.04,-.18,.52,-.12,-.28,.07,.32,.4,.46,-.3,-.01,.28,-.33,-.21,-.05,.08,.03,.26,.22,-.04,-.05,.05,.34,.16,.04,.03,.16,.39,.07,-.41,.75,.03,-.06,.24,-.1,-.32,.29,.39,.17,0,.08,.31,-.22,.02,.39,.16,.48,.02,.63,.04,.22,.68,.36,.19,.04,-.46,-.07,.52,.15,.36,-.03,.58,.16,-.24,.28,0,-.3,.23,.16,.36,.47,.12,-.05,.48,-.18,-.16,.47,.08,-.04,.1,-.36,-.27,.06,-.02,.06,.31,0,.84,.1,.16,.08,.46,.11,.04,-.05,.05,-.08,-.44,.54,.75,.26,.06,-.08,-.07,-.15,.4,-.1,-.07,.45,.15,-.14,.12,.07,.14,-.09,0,.67,.01,.06,-.04,-.03,0,.26,-.12,.13,.18,.22,.04,.22,-.14,.08,-.09,-.08,-.4,.09,.42,.24,.24,.21,.01,-.05,.37,-.14,-.09,.18,.28,-.21,0,-.11,-.08,-.06,-.51,-.16,.26,-.18,.48,.09,-.1,.35,.69,-.21,.03,.25,.1,-.46,.03,-.34,-.4,0,-.17,-.14,-.29,.36,.4,-.12,-.21,.11,.13,-.11,.12,-.06,-.15,.13,.07,.14,-.3,-.05,.38,-.06,-.07,.23,.16,-.33,-.01,.59,.64,.15,0,.84,-.05,.33,.12,.1,.9,-.05,.03,-.04,.27,.08,.41,.42,.39,.01,-.4,-.36,.51,.35,-.45,.03,-.31,.09,.27,0,.45,-.09,.09,-.27,.26,-.21,.19,.21,-.22,.81,-.06,.09,.02,.12,-.29,.36,.47,-.11,-.44,-.15,-.01,-.06,-.18,.25,.01,-.11,-.11,-.21,.42,-.17,-.09,.28,-.1,.38,.24,.27,-.18,-.11,.29,.02,-.48,.41,-.14,-.02,.49,-.52,.2,-.37,-.39,.37,-.31,.03,-.44,-.03,.01,-.04,.29,.82,.87,.24,-.2,.27,.01,-.1,-.02,.54,.72,-.19,.02,.35,.41,.13,-.03,.18,.84,.58,.85,.2,.37,0,.02,-.4,0,-.07,.19,-.19,.06,.51,.11,.32,.34,.18,.1,-.09,.59,.25,-.11,-.06,.06,.17,0,.04,-.11,-.04,-.16,-.04,-.04,-.14,.72,-.14,.53,0,-.39,-.53,.37,.38,.21,.14,.52,.45,-.13,.57,-.04,.03,.04,.3,.15,.1,-.04,.12,.92,.4,.07,-.1,.11,.22,-.11,.44,-.01,.25,.16,-.17,.24,.54,.12,.2,.34,.12,-.06,-.02,-.14,.34,-.02,.4,.04,.46,-.06,.15,.31,.18,.06,-.06,-.03,.36,.07,.31,.12,.15,.08,-.11,-.12,-.37,.34,-.51,-.19,.08,-.21,.23,.57,.42,.1,.12,.41,-.41,.26,.27,.35,.63,-.03,-.04,.54,.44,.46,.6,.4,-.07,.63,-.2,-.09,-.16,.14,.14,.04,.13,.04,-.12,-.33,-.12,-.05,-.18,.16,-.19,.32,.44,-.43,.29,.25,.24,.22,.53,-.12,.22,.31,-.03,.6,-.05,.46,.11,-.03,-.09,-.11,.59,-.2,.22,.54,.09,.45,-.13,.29,0,-.22,.37,-.03,-.45,.03,.01,.84,.1,-.01,-.08,.25,.57,.09,.35,.33,-.02,-.11,-.08,.23,.6,-.08,-.51,-.07,-.12,-.26,.6,.24,-.32,.02,.1,.03,.42,.25,.46,-.13,-.02,.01,-.13,.49,.3,-.01,-.07,-.29,0,.01,.43,-.44,.04,.08,-.38,.09,-.12,.21,.23,-.22,.01,.35,.24,.41,.13,.15,.12,-.35,.46,-.16,-.08,-.18,.1,.11,.14,.02,-.04,.54,.45,-.01,-.44,-.26,.17,-.3,.31,-.04,-.17,-.4,-.24,-.09,-.21,-.04,-.15,-.35,.88,-.07,.47,.17,.04,-.03,-.06,.16,.03,.55,.03,.24,.01,-.39,-.06,.15,.32,-.04,-.13,-.12,.1,-.11,-.09,-.02,.37,.12,-.03,.74,-.08,.37,.19,-.01,-.18,.09,-.06,.48,-.03,-.01,.14,-.12,.18,.39,.5,-.02,.16,.54,.4,-.1,-.24,-.13,-.13,-.08,.61,.04,-.11,.57,-.1,-.02,0,-.22,.15,-.03,.23,.1,.13,-.03,.1,-.03,.18,.18,.36,-.11,-.26,.19,-.04,.17,.59,.41,.39,.11,.09,.48,.11,-.19,-.07,.37,-.06,.49,-.31,.15,.17,.43,.25,.14,-.07,-.05,-.04,.81,.12,-.54,.68,.83,-.37,.49,.13,.19,.11,.04,0,.06,.03,-.03,-.2,.09,-.04,.13,-.04,-.04,-.16,.03,.15,.05,.1,-.04,0,.83,-.09,-.23,.48,-.09,.33,.25,-.22,.01,-.18,.4,-.24,.5,-.35,-.32,.44,-.06,-.08,.14,.2,-.5,.18,.35,.1,.05,.28,-.02,.41,.16,-.18,.38,-.23,-.12,.07,-.09,-.2,0,.46,.06,.21,.4,.59,.42,.03,.29,.16,.44,-.08,.1,-.21,-.06,-.07,-.38,.37,.6,-.09,-.1,.37,0,.06,.18,.31,.32,.35,0,-.13,0,.21,.4,.07,.07,.62,.45,-.12,.19,.19,-.43,.01,.19,.49,.32,.25,-.12,.36,-.17,-.03,.28,.28,0,-.38,-.31,-.06,-.06,-.24,.55,-.25,.1,.35,.37,.36,.1,.22,.32,.38,.57,.45,.45,.11,.22,.06,.24,.39,.35,.33,.63,-.21,-.28,-.14,.12,.19,-.03,.58,.04,.17,.31,.32,.18,-.2,.23,.36,-.1,.31,.2,.05,-.03,.49,.27,.37,.22,.6,.61,-.15,-.47,.55,-.23,.04,-.2,.62,.1,-.33,.07,.17,-.42,-.14,.45,-.25,.13,.23,.14,.22,.48,.19,-.26,.23,-.27,.29,-.14,-.14,.05,-.39,.18,-.17,-.01,-.01,-.11,-.3,-.19,-.13,.29,.2,.85,.03,.06,.18,-.04,.5,.15,.8,-.41,.37,.15,-.08,.44,-.05,.07,.02,-.08,-.19,.23,.09,-.16,.06,.1,.02,.19,-.24,0,-.08,.45,.02,-.49,.46,.26,.12,-.08,-.03,.17,.67,-.14,.23,-.4,.3,-.08,.39,.2,.58,-.07,.47,.01,.08,.27,.52,.17,.64,-.03,-.1,.54,.46,.18,.34,.44,.32,.6,-.09,.03,.01,.03,-.04,.01,.08,.5,.15,.32,-.06,.39,.78,-.25,-.01,-.21,-.3,.56,.04,-.12,.11,.05,.29,-.38,.88,.88,.42,.07,-.37,.03,.23,-.08,-.04,-.52,.63,.11,.4,.11,.31,-.08,.86,.09,.49,.08,.15,.68,.2,.38,.21,0,.48,.31,.06,-.09,.27,-.01,.31,.29,-.12,.89,.21,-.14,.19,.26,.02,-.19,.2,.05,.36,.5,.24,.45,-.42,.18,.17,.19,-.09,.21,-.02,.05,.58,-.44,.47,-.4,.37,.08,.31,.12,.34,.4,.36,-.03,.16,-.15,.22,-.27,-.46,.49,-.15,.49,-.09,.47,-.02,-.26,-.41,.17,.24,.24,-.08,.04,-.09,-.11,-.07,.19,.4,.12,.12,-.18,.09,0,.57,.37,.4,.29,-.11,.13,-.11,.51,-.28,.46,.09,-.11,-.06,.15,0,-.09,.25,-.04,.55,.07,.46,.27,.02,.34,.04,.13,.68,-.22,.37,.52,.3,.02,-.12,.21,.45,.11,.53,.19,.7,-.09,.42,.42,.4,.6,.01,-.01,.06,.23,.17,.46,.01,.38,.42,.36,.27,.47,-.36,.36,.3,-.07,.31,-.1,.08,.24,.03,.04,-.21,.19,-.38,.44,.1,-.34,.41,.24,-.16,.3,.16,-.15,.06,.2,.07,-.39,.55,.22,-.46,-.31,-.01,.02,.02,-.1,.06,.42,.16,.01,-.36,-.14,.52,.5,.35,.02,.09,.01,-.08,-.13,.42,-.4,.02,-.45,.3,.01,.2,-.05,-.29,-.11,0,.29,.39,.09,.29,.23,.45,.28,.46,.12,-.06,.25,.01,.05,.22,-.04,.07,.03,.06,.1,.02,.27,-.08,.12,-.36,-.06,-.05,-.07,.24,-.05,.23,-.24,-.11,.3,-.18,.03,-.09,.09,.3,.22,.1,-.1,-.03,-.06,.14,.23,-.39,-.38,-.11,.14,.01,.13,-.09,-.4,.2,.04,.19,.45,.38,-.06,.09,-.02,.22,.33,.41,.29,-.08,.25,.06,.24,.88,-.53,-.37,.45,-.01,0,.56,.05,.08,-.1,.33,.04,-.06,-.14,.33,-.03,.36,.01,-.19,.15,.82,-.1,.37,.09,-.13,.3,.19,.91,.07,.63,.08,.17,.18,.09,.02,-.04,-.01,-.3,.38,.16,.25,.16,.09,-.05,0,.57,-.36,-.11,-.12,0,-.15,-.1,.81,.11,.89,.26,.27,.19,.3,-.14,-.08,.08,.11,.58,.26,.53,.05,.17,.01,.16,.05,-.11,-.11,.33,.53,.64,-.04,-.08,.08,.16,-.07,.22,.02,-.1,.23,.18,.22,.18,-.08,-.32,.2,.55,.6,.01,-.11,-.18,.04,.05,.19,.09,.17,-.03,.77,.06,.21,.03,-.45,.43,.23,.37,.23,-.13,-.23,.06,-.36,-.07,-.26,.03,.04,-.22,.13,.59,-.03,.3,.18,-.07,-.04,.19,-.29,-.38,.88,-.17,.26,.06,-.16,.1,-.08,-.1,.88,.07,-.16,.1,.08,-.38,-.08,-.02,-.01,.16,.08,.35,.06,.34,.11,.76,-.51,-.04,-.09,-.09,.01,.05,.31,-.06,-.07,.03,-.12,-.4,.28,.07,.35,-.22,-.05,-.37,-.04,.1,.05,.17,.05,.48,-.26,.48,-.09,-.33,.06,0,-.16,.03,-.17,.45,-.17,-.17,.5,-.16,-.24,.2,.85,.02,.53,.28,.05,-.15,.06,.31,.06,-.02,.23,.12,.29,.13,.29,.04,.05,.05,.12,-.12,.07,-.27,-.3,-.12,-.44,.8,-.33,-.1,.04,.04,-.03,.09,.34,.41,-.31,.45,-.06,-.09,.01,-.02,.26,.09,.41,.25,.07,.18,-.3,-.17,-.45,.56,.13,.23,.12,.16,.13,.3,-.4,-.05,-.39,-.16,-.04,-.04,-.17,.09,-.02,.06,.02,.36];export{a as rvalData};
