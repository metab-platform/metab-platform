const a=[.18,-.13,-.45,-.12,-.37,.2,-.14,.79,.32,.09,-.13,-.18,.02,.2,-.3,.06,-.18,-.05,.01,.15,.04,-.37,.11,-.33,-.03,-.09,-.52,.05,-.08,-.54,.08,-.26,-.15,-.16,-.39,.07,-.35,-.22,-.02,-.24,.06,-.18,-.18,.03,.01,-.1,-.22,.06,-.19,.53,.2,.01,-.19,-.29,.35,0,.14,.19,.09,-.32,.31,-.13,-.08,.05,-.08,-.49,-.1,-.3,.12,.02,.11,-.22,.48,-.16,-.35,-.16,-.09,.31,-.37,-.28,.14,-.32,.04,-.12,-.13,-.36,0,.03,.28,-.26,.36,.09,.67,.38,-.1,.33,.28,-.18,.04,.32,-.05,-.13,.06,.03,.21,0,-.21,-.15,-.02,-.01,0,.54,.11,.34,.05,-.37,-.4,-.32,.14,.11,.13,-.16,.02,.16,.39,.23,-.31,.04,-.45,-.3,.86,.74,.11,.6,-.32,.01,.73,.19,-.37,-.13,-.06,-.11,.14,.03,.05,.28,.1,.09,.13,.12,-.19,.67,-.03,.11,.92,.42,.13,-.08,-.01,-.25,.62,-.01,.12,.26,.63,.32,-.18,-.35,.33,-.19,.02,-.33,.74,.73,.06,-.35,.08,-.48,.46,-.31,-.12,-.09,.03,-.59,.27,.22,-.1,-.01,.44,.02,.01,.65,-.12,.27,.12,-.29,-.11,-.11,-.06,-.23,.04,.27,-.26,.12,.27,.05,.34,.54,.5,.09,.89,-.3,.01,-.23,.16,.08,.02,.85,-.4,-.03,.16,.18,-.09,-.32,.24,-.29,.86,-.33,.23,.19,.07,.04,-.08,-.5,-.12,.01,-.36,-.04,.13,-.03,.55,-.43,.91,.78,.75,.84,-.14,.23,-.2,-.03,.4,-.05,.36,.2,-.13,.02,-.03,.1,.14,-.61,-.02,.33,.26,-.07,.21,.18,-.21,.02,.12,-.03,-.2,.06,-.24,-.37,-.21,-.03,-.48,.47,-.27,-.18,.67,-.19,-.13,.22,.5,.18,-.34,-.25,.16,-.22,.62,.48,-.05,.76,.47,-.2,.19,-.08,.3,.3,.14,-.45,-.3,.06,-.13,.2,.2,.23,.29,.05,-.11,.03,-.12,.02,-.07,.31,.26,.41,-.42,.07,-.05,.02,-.31,-.14,.55,.51,-.06,.13,.23,.48,.33,.22,.14,-.11,-.41,-.2,-.45,.3,.62,-.05,.55,-.35,.03,.08,-.35,-.37,.02,.54,-.11,.7,.07,.72,.07,.5,.35,-.11,.14,-.18,-.34,-.58,.08,.03,.46,-.08,.14,.22,.09,-.31,.13,-.04,-.44,-.03,.27,.36,.16,.31,.05,-.08,-.01,.46,.04,-.03,-.05,.07,.05,.05,-.13,-.11,-.14,-.15,-.25,0,-.16,.41,.4,-.45,-.23,-.05,.1,.33,-.21,.37,-.31,.26,.44,-.12,-.33,-.24,-.02,-.01,-.39,.25,.25,-.24,.23,-.04,-.09,-.45,.66,.31,.15,-.24,-.24,.01,-.08,-.34,-.3,-.16,.44,.71,.92,.34,.13,.01,.61,-.44,.52,-.09,-.32,.01,.01,-.01,.13,.15,.31,.26,-.43,.01,.33,-.08,.47,.33,.14,.28,-.01,.13,-.33,-.31,.35,.17,-.41,0,.29,.38,.22,.14,.12,.13,-.02,-.32,-.17,-.38,-.17,-.1,.59,-.03,.08,.52,-.32,-.27,.05,-.32,-.32,.57,.28,.38,.23,.52,-.19,-.49,-.06,-.18,.44,.39,-.33,-.27,.39,.04,-.11,.74,.62,.09,-.17,-.21,-.16,.24,.02,0,-.29,.31,-.06,.4,.01,.21,.32,-.31,.34,.8,.48,-.2,-.28,-.4,.18,.06,-.2,-.05,.25,-.13,.14,.16,.72,.41,.21,.8,.07,.11,.32,.04,.34,-.12,-.01,.37,.01,-.4,-.13,.08,.29,-.42,-.26,.08,-.36,-.29,-.33,-.52,.09,.06,-.16,.72,-.07,.16,-.35,-.37,.45,.83,.13,.09,.09,-.11,.4,.04,-.32,-.49,.13,.69,-.31,-.47,-.02,.14,.41,-.25,-.17,.05,.02,.33,.28,-.41,-.39,-.18,-.18,-.37,.12,.05,-.02,-.24,.84,.1,-.01,-.49,.19,.54,-.17,-.35,-.45,.42,-.29,-.54,.63,.07,-.08,-.02,-.07,-.35,.05,.65,.11,.13,-.41,.84,-.16,.05,.39,.43,.28,.09,.48,-.16,.36,.27,-.07,.83,.01,.26,.19,.42,.02,.19,-.06,.83,.6,-.35,.25,-.16,-.15,0,-.27,-.05,.47,-.12,-.07,.28,-.17,.09,.78,-.35,-.03,.07,-.41,-.11,.08,.14,-.45,-.23,-.25,.38,-.1,.03,.05,.36,.16,-.11,.25,-.05,-.07,-.48,.12,.66,.04,-.38,.09,.02,.2,.24,-.38,-.15,.41,.15,.17,-.06,-.04,.7,.03,.09,.27,.04,-.06,.49,-.11,.03,-.24,.2,-.1,.76,.45,-.28,.16,-.11,-.1,-.5,.1,-.51,-.06,.75,.22,.59,0,0,.5,.06,.11,0,.76,-.09,-.35,.13,-.26,-.43,.11,-.44,0,-.35,.13,.42,-.16,-.15,.53,.76,-.34,.07,-.05,.12,-.21,-.13,-.15,-.49,.12,.21,.25,-.37,.41,.27,-.01,-.03,-.23,.28,-.31,.16,.12,-.53,-.04,-.21,-.53,-.33,-.09,0,-.44,-.38,-.09,.08,-.01,.08,.39,.36,-.25,.04,.56,-.04,.38,.84,-.29,.39,-.45,0,.02,-.04,-.46,-.01,.42,.39,-.05,-.38,-.29,.41,-.1,-.32,-.18,-.38,-.39,.14,.29,.02,.55,-.07,.08,-.21,-.27,.2,.52,-.08,.35,-.04,.07,.07,-.15,-.26,.08,.78,.26,-.26,-.23,-.32,-.17,.19,.86,-.25,-.03,-.36,.07,.26,-.13,-.04,.16,-.27,.26,-.05,0,-.25,-.14,.39,-.08,-.28,0,-.31,.08,.84,-.32,-.34,-.17,-.26,.57,-.07,.26,-.47,.27,.15,.01,.12,.35,.38,.69,-.09,.22,-.32,.1,.14,.26,.55,-.13,.04,.65,1,.49,.08,.09,.57,.32,.36,-.07,.34,.1,.05,-.47,.07,.15,-.17,-.34,.3,.35,.28,-.14,.84,-.12,.25,.22,.38,-.1,-.04,.06,.07,-.24,-.14,.2,.01,-.02,.01,-.02,.06,-.02,.74,-.16,.74,-.03,-.47,-.4,.43,-.18,.3,.03,.69,.9,.1,.38,-.03,.45,-.16,-.13,-.42,.08,-.45,-.25,.33,.67,-.42,-.38,-.23,-.15,.35,.49,-.05,-.08,-.24,-.22,.15,.31,0,.49,.05,.85,-.23,-.09,-.06,.89,.05,.32,.13,.79,-.08,-.2,-.12,-.18,.13,-.03,-.05,.81,.13,-.08,.14,.05,.39,.29,.12,-.3,.23,-.52,.27,-.12,.13,.44,.3,.57,.07,-.29,.87,-.32,.83,.61,.88,.7,.03,-.03,.21,.47,.89,.73,.85,.06,.56,-.09,.24,.01,-.04,.05,.02,-.14,0,-.06,-.42,-.03,-.23,-.12,0,.08,.28,.4,-.3,.36,.11,.51,.38,.3,-.18,-.13,.06,-.01,.3,.07,.27,-.04,.12,-.07,-.13,.72,0,-.02,.44,.07,.43,-.21,.66,-.04,.06,.76,-.44,-.4,.01,.06,.57,-.03,.21,-.1,-.17,.44,.19,-.19,.55,.07,.11,-.09,.31,.25,-.01,-.29,.02,.38,-.15,.35,.18,-.41,.29,-.4,-.01,.44,.34,.2,-.48,-.03,.37,-.42,.75,.04,-.35,-.02,-.2,-.04,.02,.42,-.34,0,.29,-.35,.12,-.02,.28,-.26,-.21,-.52,0,.85,.34,-.1,-.13,.73,-.09,.69,.18,-.41,.25,-.09,.06,-.05,.1,-.04,.5,.4,.01,-.24,-.21,.12,-.15,.35,-.22,-.27,-.45,-.16,-.14,.02,.1,.05,-.46,.35,-.1,.56,-.12,-.39,.23,-.08,-.4,-.04,.48,.08,.29,-.13,-.35,.1,-.08,-.07,.04,-.13,-.44,-.33,.53,-.04,.03,.3,-.25,.04,.47,.02,.57,.06,.03,.09,.15,.04,.5,-.04,.02,-.29,-.23,-.25,.43,.45,-.16,.08,.45,.18,-.17,-.37,-.03,-.08,.07,.8,.2,.02,.54,.08,-.06,-.38,-.34,.04,-.53,-.02,.62,.59,.05,-.26,.01,.1,-.23,-.07,-.43,-.15,.08,.02,-.24,.37,.03,.34,-.48,-.47,.86,-.38,-.42,-.08,.7,-.2,.18,.11,-.1,-.43,.21,.17,-.07,.04,.05,.02,.35,.01,-.33,.15,.29,-.49,.42,-.09,-.01,-.45,.15,-.12,.02,.01,.03,-.35,-.18,-.39,.23,.04,-.01,-.14,-.04,.18,.15,-.11,.19,.13,.35,-.11,.31,.26,-.03,.93,-.15,.21,-.39,.32,.8,-.32,.12,-.54,-.35,.6,-.04,-.34,.17,-.03,-.5,-.01,.87,-.14,.04,.77,.06,.21,.21,.04,.62,.19,-.01,-.41,-.2,-.02,.08,.13,-.1,-.08,.22,.49,.45,.2,-.25,.09,.07,-.03,.23,.35,.16,-.21,-.44,.33,.53,-.29,-.25,.12,-.39,.4,.03,.31,.05,.29,.17,-.36,-.11,.24,.39,.12,.44,.46,.31,-.6,-.19,-.27,-.24,.01,-.21,.55,.39,-.01,-.16,.85,-.04,-.03,.1,.59,.19,-.07,-.14,.19,.15,-.22,.28,0,.06,.42,.51,.03,.18,.22,.47,.48,.61,.21,.71,.08,.06,.07,.66,.69,.74,.14,.61,-.19,-.33,.15,.46,.49,-.27,.5,.48,.73,.68,.27,.76,-.14,.76,.78,-.13,.65,.11,.09,.07,.37,-.01,.41,.1,.55,.42,-.3,-.45,.8,.01,-.32,.01,.76,-.03,-.47,-.41,.08,-.29,.12,.47,-.21,.12,-.05,-.22,.15,.36,.08,-.31,.13,-.26,.21,-.11,.04,.11,-.05,.38,.33,.04,-.12,.11,-.07,-.13,.12,.35,-.12,.38,-.21,.03,.08,.03,.55,.07,.37,-.37,.89,-.13,-.08,.78,-.01,-.13,.06,.06,.21,.76,-.11,.12,-.23,.08,-.06,.4,-.21,.06,-.06,.21,-.08,-.37,.37,-.02,.02,.06,-.21,0,.45,.05,.79,-.39,-.11,.07,.09,.08,.38,-.01,.5,-.03,-.01,.16,.74,.01,.42,.4,.1,.21,.81,-.16,.32,.39,-.02,.2,-.04,.12,-.02,-.03,.32,.37,-.27,.4,.08,.35,-.31,.44,.29,-.03,.07,-.11,-.11,.53,.13,-.14,-.23,.24,.05,-.16,.37,.41,.44,.04,-.16,-.08,-.1,.03,-.1,-.53,.24,.03,.51,.38,-.08,.06,.41,-.05,.39,-.4,-.1,.49,-.31,0,-.09,.36,.32,.44,.08,-.45,.19,.44,.07,-.17,-.17,.39,.08,-.51,-.06,.21,-.16,-.18,-.27,.09,.18,.73,.08,.28,-.41,-.04,-.16,-.35,.19,.02,.04,.09,.59,-.49,.24,-.33,.68,-.13,-.17,-.14,.08,.65,.52,-.31,-.33,-.13,-.11,-.13,-.08,.6,.2,.86,-.47,.65,.07,-.11,.03,.08,-.15,.23,-.34,-.37,0,-.12,-.42,.61,.52,-.39,.1,.34,.31,.24,.35,.16,.36,.04,.13,-.05,.11,.32,.05,.36,.07,-.04,.02,.29,-.53,.02,.04,-.12,.4,.08,.54,-.24,.17,.11,.18,0,.3,.21,.69,.51,.09,-.03,.12,.06,.04,-.04,-.01,-.21,.31,-.05,.17,.68,.25,.56,-.09,-.35,-.43,-.05,-.15,.45,-.49,.42,.17,.38,.22,.35,-.14,.91,.12,0,-.14,.06,-.47,.14,.02,-.17,-.1,.69,-.09,.38,.15,-.27,.43,.84,-.15,.36,.13,-.17,.07,-.13,-.3,-.28,.54,-.02,-.49,-.2,.04,-.08,-.32,-.1,.27,.3,.01,-.02,-.07,-.01,.36,.22,.39,-.4,-.48,-.57,.09,-.28,-.11,-.41,.36,-.33,-.19,.11,.52,.09,-.3,-.04,-.06,.33,.39,-.42,.12,.1,.77,.33,.54,-.05,.07,.23,.16,.04,-.2,-.05,-.48,-.14,-.24,-.32,-.11,.06,-.09,-.05,-.41,-.23,.05,.18,.61,-.01,.82,.09,-.2,.25,-.1,.1,.14,-.08,.01,.04,.11,-.26,-.47,.46,-.38,.83,-.43,-.11,.05,-.22,-.42,-.27,-.56,.16,.08,-.2,.19,.32,.2,-.27,-.04,-.29,.04,.28,.37,.26,-.07,.06,-.19,-.22,.36,-.42,-.16,.19,-.11,.15,.38,.06,.29,-.34,0,-.49,-.46,-.41,-.22,.07,-.1,.12,-.08,-.15,.48,.07,.42,-.09,-.28,.06,.09,.4,-.5,.37,-.45,-.07,.03,-.05,.03,.02,.1,-.19,.57,.56,.67,-.08,.07,-.14,.56,.66,-.12,-.24,.08,.01,-.27,-.07,.52,.09,.36,.2,-.03,.75,.54,.2,-.15,.13,.12,.71,.02,.32,.02,.54,-.31,.11,-.12,-.12,-.29,.57,.46,.54,.07,.02,.18,-.13,-.07,.36,.06,-.07,-.01,-.02,-.22,-.14,-.04,-.39,-.04,.5,.19,.04,.07,.19,-.13,-.43,.17,-.01,-.12,-.12,.33,-.02,-.23,-.21,-.43,.8,.21,.36,.22,.21,-.01,.02,-.09,.02,-.17,-.38,.31,-.06,-.16,.38,-.06,.14,-.2,-.09,-.09,-.12,-.18,-.35,.4,-.06,.21,-.1,-.27,.08,-.06,-.02,.37,-.04,-.35,-.32,-.51,-.26,-.53,-.46,-.31,.03,-.06,.23,.12,.28,-.16,.44,-.47,0,-.01,-.2,-.29,-.09,.91,-.16,-.06,-.1,-.47,-.33,.69,-.16,.27,-.27,.12,-.33,-.04,-.25,-.44,.01,-.36,.43,-.14,.51,-.12,-.38,.28,.17,-.54,.01,-.29,.6,.29,.12,.32,-.4,-.12,-.37,.36,-.19,.24,.27,.17,.07,-.18,-.14,-.35,-.08,-.09,-.07,-.16,-.29,.84,.03,-.51,.04,-.05,-.31,-.19,-.45,-.22,-.33,-.6,.24,-.26,-.24,-.24,-.24,-.33,-.3,.81,-.04,-.36,.61,-.02,-.31,.03,-.44,.79,-.06,-.07,.01,-.32,-.18,-.32,.03,-.54,.79,-.39,.46,-.17,.12,-.05,.13,-.4,-.06,-.37,-.04,.05,.26,-.01,.21,-.29,.12,.12,.19];export{a as rvalData};
