const a=[-.05,.03,0,0,.12,.09,.16,.14,-.24,.1,-.48,.23,-.02,-.02,-.45,.04,-.1,.11,.19,.05,.01,-.26,.08,-.51,-.33,0,-.23,.27,.15,-.33,.15,-.21,-.09,.08,-.4,.01,-.23,-.51,.32,.01,-.18,.08,.13,.08,-.02,-.52,-.13,-.11,-.4,.29,.06,.06,.09,-.11,.5,-.44,-.25,.24,.42,-.21,.33,.14,.16,-.01,-.08,-.18,.12,-.49,.02,.02,-.1,-.12,.36,0,.07,-.16,-.27,.34,-.06,-.19,-.15,-.14,-.08,.08,.25,-.35,0,-.05,-.03,-.24,.88,.15,.07,.24,.01,.3,-.13,-.26,.3,.37,-.03,.12,.47,-.09,.42,-.06,-.33,-.3,-.11,.27,-.22,.43,.2,0,.17,-.1,-.01,-.22,-.14,-.24,-.05,-.15,.05,-.02,.04,.2,.15,.16,-.19,-.2,.35,.27,.06,.38,-.23,.09,.56,.21,-.21,-.11,.27,-.08,.29,.01,-.07,.01,-.1,.47,.22,-.16,.09,0,-.08,-.12,.26,.8,.18,.03,-.2,-.53,.49,.36,-.25,.24,.06,.29,-.03,-.2,.36,-.21,-.04,-.21,.36,.36,.01,-.47,0,-.38,.3,-.12,-.34,.02,.07,-.11,.36,.16,-.2,.02,.4,.17,.12,.22,-.02,.17,.17,-.07,.32,.21,-.06,-.11,-.29,.04,-.16,-.02,-.02,.42,.1,.46,.35,.13,.27,-.42,.1,-.25,.2,-.02,.1,.18,-.49,-.32,.3,.44,.39,-.07,.2,-.17,.35,-.24,.47,.26,.04,.03,-.07,.03,-.01,-.04,-.36,-.51,.43,-.09,.45,-.44,.3,.55,.04,.14,.11,-.06,-.09,.09,.3,-.06,.53,.17,.25,-.19,.01,-.15,.23,-.05,-.07,1,-.05,.25,.48,.4,-.19,.17,-.2,-.16,0,-.01,-.14,.03,-.1,.15,-.26,.3,.05,-.41,.54,-.41,-.47,.05,.56,-.15,-.42,-.29,.4,-.11,.03,.46,-.02,.08,.14,.17,-.43,-.06,-.04,.36,-.03,.01,-.08,0,.17,.08,.09,.38,.79,-.5,.1,-.01,-.03,-.13,.37,.37,.37,.88,.07,.15,.16,.3,-.34,.11,.43,.6,.05,.43,-.07,.55,-.16,.21,.1,-.06,-.09,-.16,-.22,.31,-.19,-.27,.27,.17,.23,.07,-.2,.09,.06,.59,.16,.44,.2,.42,0,.57,-.07,-.43,.2,-.14,.18,-.04,-.32,-.14,.58,-.29,.08,-.14,.17,-.13,.55,-.1,-.27,.02,-.32,.22,.28,.38,.27,.11,-.14,.74,-.15,.05,-.09,-.04,.02,-.01,-.14,.07,.03,.06,.1,.07,-.06,-.21,-.3,.01,-.25,-.07,.45,.04,.26,.54,.11,-.21,.36,.03,-.24,.16,.18,.32,.08,-.11,.41,.12,.56,-.08,.28,-.08,.54,-.17,-.06,-.19,-.2,-.08,-.26,-.14,-.12,-.09,.45,.47,.26,.21,-.22,.02,.58,-.11,-.03,.08,.03,.15,.44,.08,.24,-.34,.24,.51,-.08,.07,-.29,-.21,.04,.23,-.02,.45,-.15,.3,-.37,-.11,.4,-.11,.07,.12,-.07,.36,-.07,.09,.05,.05,-.02,-.13,-.37,-.21,-.07,-.2,.8,-.16,-.08,-.13,-.06,-.34,.2,-.31,.16,.01,.24,.42,.25,.21,-.1,.07,-.01,.2,-.1,.36,.12,-.19,.42,-.11,-.06,.58,.61,.34,.19,-.2,.11,.13,.61,-.08,-.07,.49,.24,.4,.17,.12,.27,-.34,.34,.31,.42,.02,-.02,.11,.24,.08,.34,-.07,.06,.13,-.12,.06,.32,.4,.04,.4,.04,0,.66,.08,.43,.14,.06,.91,.05,-.24,-.23,.17,.11,-.23,.18,.32,-.35,-.17,-.01,-.12,.06,.1,-.23,.43,-.28,.05,.03,-.32,.31,.05,.01,0,.1,-.09,.43,-.06,.12,.05,-.34,.22,.11,-.03,-.03,-.1,.42,-.08,-.27,.07,.26,.46,.31,-.32,-.07,.25,-.24,-.26,.02,.02,.05,.23,.09,.06,-.2,.01,.33,.06,-.04,0,.14,.28,0,-.28,.71,.05,-.06,.31,-.07,-.35,.27,.23,.17,-.09,.03,.16,-.13,.02,.26,.12,.37,-.01,.61,.09,.14,.74,.32,.08,.08,-.48,-.13,.39,.08,.26,-.15,.52,.05,-.19,.31,-.05,-.21,.18,.13,.33,.53,.08,-.02,.33,-.04,-.06,.38,0,-.16,.04,-.38,-.18,.02,0,.03,.21,-.04,.86,.15,.15,.12,.53,.02,-.02,-.17,.01,-.07,-.34,.51,.73,.18,.01,0,-.11,-.15,.47,-.11,-.17,.44,.15,-.08,.08,-.04,.06,-.08,.02,.72,.04,.06,-.07,-.08,.08,.2,-.07,.13,.01,.03,-.02,.2,-.08,.1,-.05,-.08,-.29,-.04,.36,.17,.04,.17,.02,-.1,.33,-.12,-.05,.05,.27,-.26,-.02,-.16,-.1,-.12,-.43,-.07,.22,-.17,.38,.05,-.12,.26,.62,-.26,.15,.25,.03,-.48,-.01,-.3,-.27,.05,-.15,-.22,-.34,.37,.27,-.08,-.13,.15,.14,-.13,-.07,-.01,-.07,.05,.09,.06,-.2,-.14,.27,0,-.18,.18,.17,-.33,0,.64,.66,.1,-.04,.81,.04,.24,-.02,.06,.88,-.1,.05,.03,.22,.04,.38,.4,.26,.14,-.37,-.21,.56,.33,-.5,-.03,-.26,.03,.22,.07,.4,-.13,.08,-.2,.15,-.24,.13,.03,-.1,.85,0,.1,.08,.07,-.14,.29,.38,-.07,-.34,-.13,-.07,-.06,-.23,.11,-.07,-.13,-.17,-.15,.4,-.17,-.1,.38,-.16,.39,.23,.26,-.11,-.13,.24,-.02,-.37,.34,-.22,-.06,.42,-.44,.14,-.36,-.3,.18,-.29,.07,-.29,-.15,-.03,-.04,.31,.84,.86,.08,-.15,.16,-.08,-.07,-.05,.59,.78,-.09,.03,.32,.33,.18,-.09,.19,.82,.56,.87,.18,.18,-.02,-.01,-.23,-.2,-.13,.14,-.23,.11,.46,.06,.26,.17,.14,.13,-.03,.5,.25,-.05,-.1,.06,.16,-.12,-.04,.03,0,-.2,-.08,-.2,-.15,.63,-.1,.43,-.03,-.25,-.46,.27,.37,.16,.11,.47,.38,-.15,.53,-.06,.04,0,.25,.11,.08,-.1,.12,.92,.24,.04,-.09,.06,.18,-.01,.3,.12,.14,.12,-.1,.25,.55,.05,.24,.28,-.04,-.12,-.07,-.13,.21,-.12,.48,.08,.34,-.07,.08,.4,.16,-.02,-.13,-.07,.23,0,.29,.11,.1,.01,-.12,-.12,-.24,.4,-.52,-.14,.07,-.33,.21,.56,.29,-.01,.02,.32,-.29,.09,.05,.24,.6,-.03,-.04,.46,.31,.34,.52,.25,.01,.6,-.18,-.06,-.09,.12,.17,.1,.12,.07,-.09,-.31,-.05,-.1,-.03,.15,-.19,.19,.32,-.34,.24,.22,.04,.21,.6,-.14,.18,.25,0,.53,-.04,.47,0,-.03,-.13,-.11,.52,-.22,.12,.56,.17,.28,-.19,.15,.01,-.17,.32,-.08,-.38,.09,.01,.82,.15,0,-.1,.22,.44,-.07,.29,.19,-.06,-.13,.01,.2,.57,-.16,-.4,-.02,-.25,-.31,.49,.26,-.21,-.06,.06,.09,.36,.26,.41,-.15,.06,-.07,-.19,.49,.29,-.07,-.09,-.23,-.08,.03,.32,-.34,.02,.09,-.27,.01,-.13,.33,.15,-.16,-.02,.29,.1,.48,.04,.06,.06,-.25,.43,-.25,-.13,-.25,-.04,.02,.06,.1,0,.41,.34,-.01,-.35,-.18,.22,-.35,.26,-.08,-.17,-.43,-.16,-.12,-.24,-.06,-.14,-.34,.89,.02,.45,.1,-.03,-.05,-.1,.15,-.06,.51,-.02,.28,-.05,-.31,-.09,.07,.28,-.08,-.21,-.03,.06,-.15,-.13,.11,.34,.07,.01,.75,-.12,.32,.15,-.04,-.27,-.07,.05,.36,-.11,-.01,.06,-.21,.13,.28,.49,-.06,.24,.57,.25,-.11,-.29,-.15,-.14,-.01,.56,.11,-.12,.56,-.01,-.04,-.05,-.28,.23,-.07,.27,0,.08,-.02,0,-.07,.17,.1,.31,-.03,-.25,.11,-.06,.06,.58,.35,.43,.05,.14,.33,.02,-.09,-.07,.37,-.08,.52,-.35,.14,.16,.39,.21,.07,-.1,-.08,-.09,.78,.1,-.41,.73,.89,-.2,.54,.01,.2,.07,-.16,-.08,-.03,.01,-.07,-.25,.05,-.12,.14,-.08,-.11,-.08,-.06,.07,.05,.01,-.03,.12,.81,-.06,-.27,.42,-.05,.23,.19,-.13,-.04,-.27,.39,-.16,.45,-.25,-.22,.29,-.05,-.14,.1,.14,-.49,.12,.22,.02,.1,.22,-.05,.33,.16,-.31,.28,-.24,-.09,.04,-.05,-.14,.06,.44,.01,.15,.31,.63,.37,.07,.24,.08,.34,-.15,0,-.26,-.03,-.11,-.41,.28,.6,-.16,-.17,.34,-.01,.06,.19,.35,.26,.26,-.06,-.16,-.03,.18,.45,.08,.02,.62,.44,-.13,.16,.16,-.32,.04,.12,.47,.3,.29,-.05,.29,-.09,-.03,.16,.07,-.01,-.34,-.3,-.2,-.08,-.22,.45,-.17,.14,.24,.28,.28,.05,.18,.3,.36,.46,.45,.36,.04,.14,.03,.17,.41,.3,.22,.61,-.24,-.32,-.12,-.02,.09,-.15,.52,.03,.16,.32,.3,.1,-.15,.16,.27,-.05,.15,-.02,0,.03,.42,.18,.43,.12,.62,.55,-.2,-.47,.49,-.27,-.01,-.19,.52,.04,-.26,.01,.14,-.47,-.17,.35,-.17,.18,.16,.1,.19,.46,.18,-.32,.2,-.19,.26,-.1,-.15,.07,-.36,.09,-.26,.04,-.08,-.04,-.26,-.27,-.19,.23,.1,.83,-.01,0,.21,.01,.4,.21,.76,-.43,.33,.13,-.08,.35,.01,.18,.05,-.17,-.1,.22,.09,-.23,0,.03,.02,.16,-.17,.02,.02,.5,-.03,-.41,.4,.19,.11,.01,-.04,.09,.62,-.01,.21,-.27,.23,-.05,.32,.11,.5,-.04,.44,-.06,.06,.19,.5,.08,.56,-.16,-.11,.51,.42,.1,.23,.33,.34,.59,0,0,.01,-.06,-.04,-.13,.02,.46,.25,.15,-.13,.32,.78,-.34,-.12,-.24,-.24,.37,.04,-.16,.06,.09,.18,-.39,.9,.85,.31,.05,-.36,.09,.18,-.13,0,-.39,.67,.09,.29,.07,.19,-.08,.85,.06,.36,.04,.08,.62,.1,.28,.15,0,.56,.26,0,-.13,.24,-.02,.25,.2,-.11,.87,.18,-.12,.13,.2,.03,-.06,.1,-.03,.38,.34,.17,.31,-.45,.22,.08,.1,-.14,.17,-.05,-.13,.44,-.31,.34,-.44,.37,.13,.17,.15,.22,.2,.19,-.05,.13,-.21,.16,-.16,-.36,.31,-.26,.41,-.09,.29,0,-.34,-.35,.22,.33,.15,-.15,-.03,.01,-.01,-.09,.01,.22,.08,.15,-.25,-.05,-.1,.57,.28,.31,.22,-.11,.06,-.01,.44,-.34,.41,.02,-.09,.01,.23,-.05,-.1,.2,-.08,.39,0,.33,.17,-.1,.27,-.08,.1,.72,-.29,.35,.42,.23,0,-.12,.17,.31,.04,.6,.08,.74,-.08,.28,.25,.34,.59,0,-.08,.05,.16,.14,.39,-.06,.23,.28,.29,.33,.39,-.34,.31,.24,.01,.26,-.06,.05,.12,.06,-.01,-.15,-.01,-.38,.33,.2,-.37,.25,.11,-.17,.18,.17,-.12,.09,.16,.02,-.43,.54,.18,-.5,-.38,-.14,.01,-.01,-.11,0,.45,.12,-.04,-.27,-.11,.38,.37,.27,-.05,.04,.03,-.05,-.2,.36,-.27,-.08,-.33,.28,-.21,-.01,.04,-.28,-.04,-.05,.23,.44,.01,.25,.05,.44,.24,.29,.04,-.07,.28,.04,.07,.1,-.08,.04,0,.02,.08,.02,.18,-.1,.06,-.25,.04,.01,-.05,.2,0,.07,-.21,-.11,.19,-.15,-.05,-.05,.11,.31,.15,.1,-.17,-.08,-.04,.05,.14,-.26,-.28,-.03,.03,-.03,.06,-.09,-.48,.15,.02,.19,.38,.36,-.04,-.02,-.03,.15,.22,.35,.25,-.21,.18,.03,.17,.91,-.45,-.36,.51,-.06,-.04,.49,.09,-.05,-.14,.22,.02,-.1,-.21,.27,-.07,.35,-.02,-.05,.03,.82,-.07,.35,.03,-.22,.23,.21,.9,.08,.6,.05,.13,.19,.16,.04,-.08,-.04,-.37,.45,.01,.11,.09,.08,-.09,-.07,.57,-.3,-.07,-.05,.05,-.23,-.02,.81,.06,.88,.2,.23,.11,.38,-.11,-.08,-.05,.1,.57,.24,.47,-.06,0,-.03,.25,.01,-.09,-.17,.2,.46,.57,-.07,-.15,.14,.11,-.01,.27,.01,-.08,.18,.12,.15,.17,.02,-.2,.18,.5,.59,-.01,-.03,-.15,-.01,.04,.12,.02,.14,.01,.77,.02,.11,-.03,-.35,.42,.13,.27,.18,-.1,-.17,-.1,-.34,-.03,-.25,-.02,.03,-.16,.13,.52,-.1,.22,.25,-.03,.03,.11,-.2,-.39,.9,-.18,.27,.03,-.24,-.04,-.07,-.04,.86,.02,-.21,.03,.07,-.36,-.09,-.05,-.09,.13,.03,.24,.12,.34,.08,.73,-.44,0,.01,-.03,-.07,0,.27,-.14,-.06,-.01,-.17,-.38,.11,.12,.28,-.12,0,-.33,-.08,.08,-.01,.11,-.03,.36,-.19,.31,-.08,-.26,-.08,-.01,-.21,-.09,-.26,.42,-.19,-.12,.42,-.19,-.2,.12,.82,-.04,.52,.25,-.07,-.06,.02,.26,-.01,-.01,.14,.11,.26,.07,.13,.05,.03,-.01,0,-.17,.04,-.32,-.29,-.17,-.41,.79,-.27,-.17,0,-.02,-.08,.03,.35,.38,-.36,.34,.02,-.14,-.01,-.07,.22,.12,.39,.17,.01,.11,-.25,-.22,-.31,.48,.07,.29,.03,.03,.08,.35,-.29,-.06,-.19,-.18,-.07,-.16,-.04,.19,-.08,.05,.02,.27];export{a as rvalData};
