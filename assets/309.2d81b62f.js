const a=[.03,-.07,-.04,.1,.05,.42,.22,.3,-.11,-.12,-.48,.18,-.08,-.09,-.49,.1,-.04,.09,.07,.07,.01,-.2,.12,-.55,-.18,.09,-.33,.14,.27,-.45,.27,-.2,-.08,.22,-.12,.07,-.28,-.54,.26,-.16,-.22,.09,.07,.1,-.05,-.59,-.13,.1,-.35,.3,-.02,.16,-.19,-.04,.54,-.48,-.2,.37,.36,-.05,.43,.1,.2,-.01,-.04,-.31,.19,-.56,-.09,-.02,-.08,-.26,.52,-.11,.05,-.13,-.25,.45,-.07,-.19,-.12,.07,-.01,.17,.18,-.27,.09,-.01,-.07,-.19,.78,.07,.24,.14,-.06,.45,-.17,-.26,.41,.54,.01,.2,.58,-.03,.56,-.09,-.35,-.32,-.05,.41,-.11,.38,.14,-.02,.17,-.06,.18,-.26,.09,-.07,-.07,-.24,.02,.12,-.06,.32,.14,.5,-.31,-.25,.47,.18,.11,.29,-.23,.3,.52,.27,-.36,.05,.3,.09,.35,.07,.09,-.02,-.06,.7,.37,-.03,.19,.03,.05,-.07,.34,.83,.06,.02,-.23,-.55,.44,.52,-.21,.39,.25,.44,.07,-.35,.64,-.03,.14,-.22,.46,.24,.12,-.39,.18,-.45,.5,-.04,-.2,.05,.05,-.28,.45,.25,-.2,.04,.42,.16,.11,.43,-.02,.34,.28,-.02,.51,.32,-.04,-.09,-.33,.11,-.2,-.05,-.04,.46,-.1,.62,.5,.1,.34,-.39,0,-.26,.35,.19,.13,.27,-.45,-.44,.48,.55,.54,-.01,.35,-.21,.46,-.3,.48,.25,-.05,.13,-.16,-.03,-.16,.11,-.4,-.64,.4,-.08,.41,-.45,.34,.57,.17,.12,.06,-.05,-.01,.01,.4,-.1,.56,.4,.27,-.2,.06,.05,.22,-.17,-.23,.79,.16,.27,.75,.56,-.23,.25,-.28,-.1,-.09,0,-.15,-.07,.01,.09,-.4,.43,.07,-.34,.53,-.55,-.43,-.04,.66,-.07,-.53,-.32,.54,-.04,.14,.49,.02,.04,.37,.14,-.59,-.06,.02,.42,-.03,-.06,-.18,-.15,.08,.12,.31,.43,1,-.64,.13,.02,.02,.07,.5,.43,.44,.77,0,.07,.23,.19,-.42,.19,.33,.73,.06,.39,.06,.69,-.18,.31,.16,-.12,-.22,-.13,-.31,.45,-.24,-.12,.32,.13,.16,0,-.28,.01,.03,.69,.03,.41,.35,.39,.09,.7,-.32,-.41,.3,-.2,.2,-.1,-.21,-.11,.7,-.29,.07,-.04,.28,-.21,.55,-.1,-.17,-.12,-.24,.61,.38,.45,.14,.22,-.23,.79,-.12,.11,-.08,-.09,.09,.18,-.19,.06,.08,.06,.08,.04,-.1,-.27,-.36,-.06,-.23,-.08,.45,-.09,.18,.67,.07,-.04,.4,.02,-.33,.17,.37,.51,-.04,-.1,.55,.11,.54,-.08,.33,-.01,.54,-.05,.08,-.22,-.15,-.13,.03,-.17,-.18,-.11,.55,.3,.3,.61,-.05,.09,.56,-.2,-.23,.12,-.01,.32,.53,.14,.24,-.29,.03,.58,-.15,.05,-.18,-.3,.01,.41,-.04,.55,-.07,.52,-.25,-.17,.64,.04,.08,.12,-.08,.52,-.04,.34,.01,0,-.13,-.07,-.41,-.26,-.03,-.24,.83,-.06,-.14,-.09,-.02,-.47,.32,-.35,.28,.21,.03,.56,.39,.34,0,-.02,-.06,.18,.01,.24,.1,-.12,.39,-.23,.09,.6,.63,.4,.24,-.11,.14,.21,.73,.09,-.13,.49,.31,.52,.11,.34,0,-.1,.31,.36,.53,.17,-.1,.08,.37,.18,.55,.07,-.07,.04,-.18,.06,.47,.39,-.01,.3,.15,.16,.72,.11,.75,.08,-.06,.76,-.03,-.33,-.21,.08,.21,-.32,.05,.33,-.51,-.2,-.1,-.17,.04,-.03,-.24,.28,-.31,-.09,-.02,-.24,.39,.26,-.15,-.08,.07,-.17,.4,-.11,.09,-.01,-.35,.04,.22,-.12,.04,-.13,.39,.07,-.25,.02,.41,.64,.46,-.32,-.12,.39,-.18,-.32,-.11,.04,-.01,.24,.26,.06,-.06,-.07,.5,-.04,.11,-.01,.1,.29,-.06,-.36,.58,.23,-.09,.34,0,-.36,.33,.43,.11,-.14,-.03,.14,-.29,.02,.37,.19,.54,.04,.77,.04,-.05,.75,.44,.06,-.04,-.65,-.23,.53,.24,.31,-.05,.4,.19,-.18,.41,.05,-.18,.09,.1,.37,.78,.14,.09,.47,-.01,-.11,.31,-.02,-.06,.04,-.41,-.32,.08,-.01,-.04,.17,-.04,.74,.15,.21,-.05,.71,.2,.05,-.07,.07,-.14,-.46,.55,.56,.33,.01,.01,.04,-.12,.76,-.14,-.07,.68,.18,-.17,.11,.05,.31,-.06,.08,.9,-.04,.19,.05,-.1,.22,.1,0,.2,.16,.2,-.11,.24,-.23,.13,.11,-.02,-.35,.11,.32,.12,.08,.12,.04,.02,.32,-.27,.06,.16,.36,-.31,-.14,-.02,-.04,-.18,-.31,-.07,.24,-.18,.28,.06,-.15,.32,.57,-.33,.13,.11,.04,-.33,.07,-.11,-.35,-.08,-.04,-.08,-.39,.32,.41,-.05,.09,.12,.23,-.09,-.13,.22,-.11,.15,.02,.17,-.35,-.04,.33,-.04,-.25,.2,.12,-.38,.28,.83,.88,.09,.09,.84,.03,.31,.06,.04,.75,-.08,.01,-.08,.25,-.02,.51,.49,.37,.36,-.3,-.09,.66,.47,-.6,.03,-.37,-.03,.24,.15,.57,-.12,.09,-.28,.25,-.2,.32,.02,.01,.69,-.07,.13,.12,.06,.07,.37,.43,-.17,-.35,-.11,-.06,-.1,-.09,.29,-.08,-.15,-.18,-.21,.4,-.14,-.07,.56,-.2,.61,.19,.18,-.15,-.23,.29,.07,-.37,.39,-.06,-.02,.48,-.35,.2,-.39,-.29,.26,-.28,.15,-.27,.02,0,-.08,.38,.74,.7,.28,.03,.32,-.12,.18,-.16,.85,.67,-.19,.24,.26,.29,.27,-.02,.07,.84,.83,.72,.2,.31,-.11,.14,-.4,-.23,-.09,.17,-.35,.04,.72,.24,.3,.11,.15,.15,-.09,.61,.25,-.13,-.08,-.07,.11,-.11,.17,-.12,.06,-.16,.06,-.15,-.14,.6,.05,.43,.12,-.34,-.23,.16,.31,.45,.24,.44,.41,-.12,.82,-.1,-.13,.06,.28,.05,.15,-.17,.24,.76,.44,-.13,-.13,.07,.18,-.04,.46,.08,.28,.18,-.11,.47,.58,.08,.33,.17,.04,-.04,-.1,-.32,.26,.07,.66,.32,.33,-.16,.16,.52,.17,.28,-.06,0,.1,.11,.41,0,.13,.14,-.08,-.14,-.34,.68,-.54,-.16,.24,-.33,.38,.7,.46,.11,.03,.34,-.29,.19,.14,.26,.43,.05,.04,.61,.27,.32,.57,.2,-.16,.8,-.2,-.02,.01,.09,.09,.13,.13,.07,-.03,-.37,-.07,-.05,-.08,.19,-.3,.34,.56,-.42,.62,.11,.05,.21,.84,-.02,.2,.13,-.13,.54,-.2,.6,.03,-.05,-.04,-.16,.46,-.16,.14,.67,.14,.31,-.22,.3,-.09,-.12,.31,-.14,-.39,.01,-.01,.84,.14,-.09,-.21,.18,.45,-.09,.26,.21,.02,-.03,-.04,.21,.82,-.08,-.52,.03,-.34,-.15,.45,.54,-.32,-.04,-.11,.03,.41,.33,.62,-.18,.3,-.09,-.29,.46,.37,-.05,.07,-.08,-.08,.11,.44,-.29,-.02,-.07,-.21,.17,-.11,.35,.13,-.02,-.08,.43,.29,.64,.12,.1,.26,-.18,.4,-.14,-.04,-.07,-.21,.14,.12,.3,-.1,.51,.46,-.08,-.15,-.2,.1,-.21,.46,-.03,.05,-.48,-.15,-.09,-.17,0,-.08,-.29,.78,-.02,.5,.1,-.1,-.2,.08,.09,.06,.72,.18,.66,.01,-.07,-.13,.29,.35,.1,-.14,-.26,.04,-.37,-.03,.4,.45,.2,-.11,.83,.06,.48,.19,.05,-.07,.11,.18,.44,-.05,.12,.07,-.19,.27,.15,.43,-.04,.16,.69,.39,-.14,-.38,-.11,-.01,-.12,.58,.01,.02,.39,-.1,.09,-.13,-.36,.03,-.13,.29,.18,.31,.19,.08,-.01,.11,.22,.38,.13,-.23,.34,-.02,.09,.7,.46,.73,.01,.08,.45,.04,-.05,-.16,.23,-.1,.83,-.24,.2,.1,.5,.34,.08,.14,.1,.09,.7,.09,-.54,.93,.75,-.41,.42,.07,.22,.04,-.07,.06,0,.05,.09,-.32,.08,-.11,.05,.09,-.04,-.11,.04,.01,.15,.2,-.06,.25,.7,.02,-.18,.51,-.18,.29,.33,-.11,-.04,-.16,.44,-.26,.58,-.35,-.36,.36,.01,-.08,.01,.33,-.36,.23,.23,.06,.11,.2,.02,.48,.42,-.18,.39,-.12,-.01,-.04,-.08,-.14,.07,.33,.1,.18,.46,.53,.66,.31,.32,.14,.44,-.08,.23,-.29,.01,-.03,-.51,.41,.73,-.21,-.21,.49,-.1,.09,.26,.46,.14,.29,.08,-.24,.13,.24,.65,-.05,-.18,.66,.63,-.17,.17,.11,-.48,-.14,.1,.41,.24,.31,.04,.44,-.08,.06,.19,.09,-.06,-.16,-.28,.01,.03,-.31,.58,-.16,.13,.47,.49,.39,.14,.22,.43,.4,.55,.54,.44,.27,.3,-.01,.27,.21,.31,.27,.68,.12,-.13,.06,.13,.19,-.2,.46,.02,.2,.24,.26,.1,-.09,.22,.31,-.04,.19,-.07,-.2,-.02,.52,.29,.41,.32,.65,.67,-.25,-.15,.55,-.24,-.09,-.14,.51,0,-.48,-.08,.27,-.57,.11,.44,-.35,.17,.16,.03,.26,.59,.16,-.39,.23,-.16,.19,.01,-.09,.09,-.07,.21,-.44,-.01,-.21,-.2,-.31,-.2,-.13,.26,.2,.72,.02,.08,.17,.09,.44,.14,.64,-.46,.26,.17,.07,.43,-.05,.28,-.03,.06,-.04,-.03,.01,-.07,-.02,.04,.07,.34,-.06,-.04,-.06,.58,.08,-.28,.48,.3,.15,.03,-.05,.22,.79,-.08,.14,-.2,.33,-.07,.44,.31,.6,-.05,.61,.13,.12,.28,.44,.17,.64,-.05,-.09,.67,.43,.21,.42,.28,.4,.4,-.05,-.03,.07,.14,-.25,-.04,-.03,.64,.08,.31,-.19,.43,.57,-.22,-.02,-.24,-.28,.47,.15,-.12,.07,.06,.2,-.34,.74,.74,.4,.08,-.44,.21,.15,.03,.01,-.3,.89,.22,.43,.29,.33,-.2,.71,.1,.52,-.01,.09,.69,.04,.39,.14,.19,.62,.3,.1,-.19,.32,.19,.41,.14,.07,.74,.3,-.27,.25,.17,.06,-.12,.09,.05,.54,.36,.16,.07,-.48,.19,.07,-.02,.08,.27,.11,-.16,.5,-.29,.47,-.48,.31,.14,.17,.24,.27,.27,.29,-.31,.05,-.19,.12,.01,-.36,.36,-.16,.37,-.11,.28,-.07,-.29,-.26,.37,.47,.5,-.08,-.1,-.09,.17,-.09,.21,.32,-.05,.09,-.29,.07,.12,.65,.44,.47,.35,-.09,.22,-.16,.54,-.33,.42,-.04,-.15,-.06,.32,-.05,.08,.29,-.1,.49,-.06,.27,.21,.03,.36,.04,.15,.92,-.24,.33,.37,.27,-.03,-.06,.26,.24,.17,.72,-.05,.93,-.12,.31,.45,.5,.62,-.06,-.1,-.02,.16,.07,.16,-.18,.4,.39,.42,.38,.52,-.28,.2,.42,-.14,.33,-.17,-.03,.26,-.04,.1,-.1,.08,-.28,.25,.1,-.36,.36,.29,-.22,.09,.4,-.21,.02,.13,.01,-.49,.54,.28,-.49,-.41,.01,.18,-.03,-.18,.1,.55,.25,-.08,-.17,-.01,.13,.1,.24,-.09,.03,-.16,-.08,-.18,.34,-.24,.05,-.31,.38,-.13,.02,.08,-.13,-.09,-.1,.43,.47,-.02,.21,.1,.5,.36,.28,.07,.1,.24,.02,.06,.11,-.11,-.07,-.05,.03,.02,.03,.29,-.01,.22,-.52,-.05,-.13,.1,.06,-.03,.11,-.12,-.15,.29,-.13,.09,-.01,.1,.47,.26,.05,-.11,-.16,-.05,-.08,.23,-.49,-.38,-.15,.12,-.1,.04,.1,-.72,.29,.3,.33,.53,.28,.19,.11,0,.19,.37,.52,.25,-.18,.27,.09,.15,.8,-.42,-.4,.55,-.03,.21,.56,.1,.15,-.17,.27,-.04,-.19,-.25,.35,-.13,.44,-.06,-.11,.05,.77,-.05,.47,.12,-.26,.4,.47,.77,.27,.59,.01,.02,.18,.19,.15,.09,.12,-.35,.33,.09,.16,.11,-.01,-.05,.05,.41,-.21,0,-.08,.19,-.3,-.02,.79,.12,.76,.15,.19,.18,.4,-.12,-.08,.05,.06,.48,.4,.6,.04,.06,-.05,.5,.13,-.14,-.2,.3,.6,.68,-.05,-.14,.27,.06,0,.21,-.03,-.07,.34,.34,.27,.27,-.02,-.21,.26,.62,.33,.09,-.18,-.02,.13,-.04,.03,.13,.12,.01,.6,.2,.11,-.01,-.42,.38,.47,.47,.42,-.12,-.14,-.22,-.25,-.01,-.11,-.12,-.08,-.15,.17,.75,-.05,.36,.43,.02,.11,.2,-.22,-.35,.82,-.13,.21,.07,-.21,.04,.05,-.06,.76,.33,-.26,0,.08,-.32,-.15,-.21,-.07,.26,.04,.12,.04,.34,.09,.72,-.16,-.01,-.03,-.03,-.1,.13,.18,-.12,.09,.04,-.18,-.42,.22,.21,.31,-.29,.05,-.38,-.06,.29,-.04,-.02,-.07,.35,-.15,.37,-.04,-.25,-.01,.07,-.07,-.08,-.24,.32,-.43,-.09,.56,-.3,-.05,.15,.64,0,.58,.12,.05,-.08,.05,.3,-.06,-.09,.3,.22,.33,-.03,.23,.07,0,.08,.18,-.2,.05,-.41,-.26,-.21,-.39,.81,-.23,-.18,.04,.03,-.09,.02,.38,.43,-.36,.28,.04,-.1,.16,-.14,.14,0,.5,.29,-.01,.2,-.24,-.08,-.19,.41,.06,.31,.12,.08,.19,.58,-.43,.09,-.1,-.23,-.06,-.05,-.01,.17,-.05,.22,.05,.48];export{a as rvalData};
