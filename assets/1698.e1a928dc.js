const a=[-.18,.4,.49,-.21,.49,-.05,.07,-.15,.41,.04,.7,.02,-.07,-.42,.84,-.1,.36,-.12,-.18,.04,.16,.1,-.14,.82,.77,.57,.19,-.28,-.06,.31,.27,.16,.54,-.05,.35,.09,.75,.89,.09,.41,.17,.55,.1,-.03,-.12,.75,.25,.16,.43,-.11,.39,-.05,.29,.66,-.13,.76,.56,-.16,-.01,.54,-.07,.45,.42,-.18,.34,.17,.53,.93,.16,-.06,-.02,.5,-.13,-.11,.57,.1,.09,-.15,.5,.24,-.17,.41,.06,.48,-.09,.1,.61,.1,-.46,.64,-.37,-.01,.02,-.66,.29,-.22,-.38,.14,-.21,-.14,-.14,.54,.07,-.14,.04,.1,.05,.24,.64,.16,.09,-.07,-.07,-.42,.01,.59,.13,.14,-.02,.66,-.13,.11,.26,-.15,-.21,.07,.51,-.23,.06,.74,-.36,-.27,-.01,-.22,.43,-.06,-.4,-.08,.24,-.05,.37,.01,.22,.61,.01,-.05,.12,-.39,.42,-.02,.51,.07,.02,.2,-.27,-.42,-.01,.15,.07,.89,-.54,.12,-.04,-.11,.07,-.21,.29,.19,-.32,.58,0,0,-.41,-.36,.12,.29,-.02,.36,-.25,.58,.16,.11,-.16,.51,0,-.23,.19,.05,-.35,-.16,-.08,-.14,.09,.23,.29,.61,.09,.19,.16,.06,.68,.44,.71,.17,-.19,-.01,-.21,-.27,-.17,-.25,-.28,.88,.09,.85,-.13,-.09,-.09,-.15,.3,.28,.13,-.04,.06,.62,.2,.72,-.33,.21,-.01,-.35,-.04,-.19,.74,.42,.05,.03,.75,.68,-.26,.16,-.1,.9,-.27,-.55,.02,-.05,.12,.02,.12,-.05,-.31,-.14,-.15,-.09,.38,.01,-.04,.44,-.11,.46,.22,-.43,.34,.39,-.39,.01,.09,.44,.34,.54,.2,-.08,.7,.44,.55,-.1,.43,-.16,.48,.4,-.41,.33,.69,-.41,-.2,.45,.39,.8,-.27,.16,-.08,-.32,.45,-.02,-.17,.08,.58,-.1,.06,-.07,.09,.51,.17,-.01,.07,.29,.06,.16,-.49,.69,.43,-.17,-.16,-.02,.02,-.09,-.21,-.39,.37,-.01,.38,-.02,.82,.52,-.35,-.22,.5,-.26,.07,-.19,-.33,.22,.11,-.07,-.1,.11,.19,.1,.07,.11,.1,.07,-.18,.07,.79,.46,-.03,-.37,.07,-.14,.31,-.57,.2,-.21,-.02,.73,-.04,.03,.35,.49,.63,.07,-.31,.2,.02,-.43,-.1,.72,-.27,-.01,.33,-.25,.4,-.28,-.17,-.15,.14,.38,.1,-.34,.19,-.09,.16,.11,.01,.11,.03,-.11,.5,.52,.43,-.16,.07,-.04,.04,.51,.02,-.07,-.28,-.21,-.09,-.2,.39,.42,-.34,.02,.75,.34,.29,.28,.4,-.3,-.45,.46,-.2,.07,.35,.42,-.4,-.21,.04,.69,.14,-.1,.27,.69,.6,-.1,-.25,-.55,-.29,-.31,.66,.07,-.45,.65,.01,.46,.54,.22,.14,.46,.32,.31,-.01,0,.55,.43,.23,-.04,.35,-.03,-.58,-.22,.07,-.29,.28,.69,-.27,.41,.44,.38,-.36,-.21,-.14,.17,-.42,.01,-.23,.66,.28,.72,.41,.24,-.41,.59,.45,.25,.6,.33,.18,.85,.31,.16,-.04,-.18,-.13,-.54,.27,.32,.19,.01,.1,-.52,.38,.66,-.35,.14,.46,-.47,-.23,-.26,.38,.45,.47,-.33,-.46,.57,.5,-.2,.33,-.19,.4,-.15,.03,.12,-.21,-.16,-.24,.42,-.02,.46,-.07,-.1,-.03,.01,.2,.13,.13,.39,-.26,-.37,-.16,-.34,-.03,-.07,-.2,.2,-.64,.16,.25,-.38,-.16,.41,.06,-.23,-.18,.44,.42,-.29,.34,.72,.51,.46,.31,-.16,-.12,-.43,-.12,0,.45,.12,-.04,-.14,.04,-.11,-.13,.05,-.24,.04,.31,.43,.42,-.3,.38,.55,-.13,-.17,-.28,.1,.11,.27,.18,-.16,.06,.83,.57,.21,.11,.75,.01,.12,.06,.32,-.2,-.54,.48,.47,.01,.07,.48,.61,.39,.05,.25,.17,-.42,-.01,.22,-.33,0,.76,-.29,-.13,-.27,.05,.52,-.05,.11,.12,-.34,-.21,-.19,-.02,-.37,.04,.13,-.34,.25,-.09,-.03,.14,-.03,-.28,.21,.09,.6,-.38,-.22,.14,-.16,.52,-.01,-.23,.24,.41,-.66,.43,.05,.03,.1,-.47,-.34,.56,.59,.11,.8,.04,-.19,.15,.5,.08,.63,-.34,.24,.19,.2,-.23,.5,.55,.43,.08,-.04,.29,0,-.64,.33,.61,-.4,.02,0,-.58,.24,.45,-.33,.11,-.22,.53,.57,-.2,-.11,-.3,-.56,-.19,-.16,-.03,.22,.13,.34,-.31,.41,-.04,.12,.35,-.01,0,-.11,.23,0,.2,.58,-.34,-.03,.05,-.22,-.13,.17,-.03,.06,-.15,-.04,.3,.77,-.05,.57,.26,-.15,.1,-.01,.24,-.2,.08,.53,.03,.06,-.48,.78,-.17,-.18,-.12,.76,.33,.04,.38,.09,-.17,.38,.78,-.1,-.05,.07,.21,-.05,-.01,.61,.1,.04,.42,.41,0,-.01,.16,.6,.1,.41,.68,.39,-.29,.33,.01,-.68,-.47,.49,.03,-.39,-.12,-.03,-.01,.52,-.3,.46,.09,.13,.4,.42,.1,-.1,-.17,.01,.18,.01,-.31,.09,.92,.54,.15,.55,.32,-.3,-.16,.16,.14,-.18,.37,.67,.34,.35,-.21,-.28,-.01,0,-.31,.5,-.03,.34,-.3,-.44,.32,.01,.54,.14,.32,-.19,.51,-.01,.69,.06,.06,-.03,-.02,-.32,.71,-.36,-.24,-.21,.18,.02,-.09,.16,.16,.04,.58,-.18,-.44,.27,.4,.32,.18,.11,.16,.01,.19,.35,.04,.08,-.08,-.33,-.35,0,.2,.27,.64,-.03,-.2,-.58,-.53,-.08,.11,-.25,-.28,-.3,.19,-.11,-.37,-.57,-.36,-.13,-.08,.13,.02,.23,.54,.17,.47,.72,-.02,-.42,.32,.33,-.09,.5,-.61,-.36,-.11,.36,-.17,-.18,-.29,.19,.66,.19,.06,-.03,.06,0,.57,.23,-.44,.14,-.48,-.1,.37,.22,-.48,.25,-.04,-.02,-.37,-.46,.08,-.52,.03,-.27,.55,.35,.44,0,.58,.36,-.34,-.16,.45,.58,.51,.41,-.5,-.14,-.14,.28,.47,.27,0,-.23,.44,-.15,-.31,-.03,.62,.14,.29,-.16,.05,-.19,.01,-.34,.31,.47,-.56,.45,-.03,.64,.19,-.08,0,.18,.1,-.11,-.08,-.35,-.1,.03,-.42,.83,-.36,.36,.28,-.14,-.4,-.26,.51,.52,-.4,.01,-.1,.01,-.24,-.57,.2,.19,-.1,.06,-.25,-.33,-.14,0,-.45,.09,.04,-.04,.09,-.11,-.08,0,-.16,.05,.49,.11,0,-.22,.07,.34,.09,-.25,.36,-.26,-.22,.31,-.33,-.64,.13,.4,-.34,.27,-.13,.16,-.32,.48,.03,.21,-.09,-.5,-.01,.12,-.14,-.07,.19,.79,-.16,.38,.03,-.16,.59,.24,-.2,.07,-.41,.16,-.13,-.14,.31,-.31,.41,.06,-.14,.27,.19,-.15,-.04,-.58,.61,.4,.12,.03,.74,-.28,-.12,.17,.53,.49,-.09,-.19,-.09,-.04,.53,.04,.28,.73,-.31,.18,.62,.07,.08,.02,-.09,-.13,.23,.1,-.16,.08,.51,-.01,-.47,.4,.03,.37,.19,-.19,-.15,.51,.43,-.19,-.09,-.6,.51,.41,.38,.41,-.01,.35,0,-.16,-.22,-.19,-.07,.14,.08,-.19,.75,-.23,.57,-.1,.91,.14,.25,-.13,.1,.09,.77,-.39,.05,-.52,.46,.58,-.11,.08,.44,.56,-.6,.01,-.32,.59,.26,.07,.24,.35,-.03,.7,.38,.38,.17,.05,-.17,-.17,.24,.17,-.43,-.01,-.2,0,.04,.62,.34,-.14,-.24,.58,.09,.49,.5,.31,.2,-.37,.19,-.41,-.22,.12,.17,.81,.15,.41,.13,-.46,-.08,.15,-.47,-.17,.12,.61,.8,.1,.46,-.26,-.11,-.35,.03,.5,.18,-.19,.37,.3,-.42,.08,.24,.05,.51,-.2,.23,-.43,.43,.23,-.31,.47,.14,-.12,-.38,.59,-.43,.24,.43,.3,-.45,-.31,.44,.49,-.03,0,-.27,-.1,.34,-.32,-.38,.18,-.49,.42,.12,.44,.49,.4,.07,-.04,-.04,.78,.51,.51,-.1,0,-.1,.17,.07,.38,.04,.46,-.14,-.24,-.3,.27,.26,.01,-.15,-.22,.25,-.3,.45,.22,-.25,.18,-.09,.14,.16,-.03,.17,.64,-.03,.41,.5,.05,-.2,.17,-.1,-.23,-.18,.11,-.09,.65,-.24,.3,.01,.52,.29,.11,.17,-.31,.56,.44,.1,-.54,-.24,.01,.26,.35,.1,.62,.24,.29,.01,.16,.83,-.16,-.63,.71,.17,-.09,.51,-.54,-.16,-.23,-.29,-.2,.57,.72,0,-.14,-.26,-.25,-.38,-.36,-.48,.43,.45,.22,.3,.09,.49,-.61,.23,-.34,.15,-.44,.14,-.01,.37,.3,-.27,.06,.69,.28,-.06,.28,.05,.08,-.17,-.09,-.16,.21,.4,-.19,-.02,-.25,-.15,-.49,-.26,.26,.3,-.2,-.06,-.41,-.06,.32,-.25,.01,-.07,-.17,.11,.02,.55,-.22,.02,-.22,-.46,.03,-.25,.21,-.17,-.18,-.02,-.18,.33,.19,.13,0,.36,-.25,.23,-.23,-.12,.75,.41,-.44,.27,.47,-.24,-.44,-.15,.31,.48,.34,.91,.08,-.18,-.07,-.23,.37,.47,.09,-.28,-.25,.86,-.17,.07,0,-.05,.57,.04,.06,-.17,.3,.25,.47,.11,.15,.8,.09,-.22,.5,-.26,.51,.6,-.03,.01,-.12,-.12,-.18,.79,-.32,.49,.07,-.3,-.04,-.17,.05,.34,-.16,-.18,.17,.66,.62,.56,.38,-.42,.14,.03,-.05,-.39,.34,.1,-.08,.34,.09,-.19,.34,.29,-.41,.01,-.29,.17,.29,-.06,.18,.25,-.01,-.21,-.32,.35,-.13,.14,-.34,.41,-.17,.1,.01,-.08,-.49,.45,-.09,-.15,-.26,.05,.05,-.03,-.01,.51,.01,-.05,.56,-.35,-.34,.07,.66,.02,-.35,.62,.69,.24,.26,-.06,-.2,.02,.48,-.2,.15,.75,-.4,-.3,.02,.2,.18,.03,.45,.04,.12,.14,-.59,.4,-.16,.35,.27,.13,-.33,.45,-.03,.49,.48,-.37,.38,.26,.37,.39,-.49,-.18,.36,.11,.35,.15,.34,.35,.04,-.31,.4,.47,.33,.31,.16,-.08,.3,.31,-.09,-.27,.39,.07,.93,-.01,.45,.4,.53,.39,.01,.46,-.33,.02,.06,.94,-.39,-.01,.41,.16,.27,-.06,-.04,.39,.44,.67,.49,.2,.16,-.19,.33,-.32,.55,-.26,.24,.8,.08,.12,.03,.01,.65,.51,.05,-.13,.59,.12,.03,.45,-.21,.23,.41,.15,-.22,.25,-.07,.4,.18,.51,-.09,.03,.26,-.32,-.07,.17,.12,.13,.54,.07,.36,.13,-.06,-.13,-.27,.37,.54,.27,.52,.5,-.55,.35,-.1,-.11,.34,-.09,-.15,.36,.23,.42,-.41,.37,-.56,-.07,-.02,-.18,.14,-.44,.04,.52,.46,.39,.44,-.13,.46,-.04,.17,.07,-.52,.11,.33,-.32,.32,-.04,.26,.02,.47,.28,.07,.47,-.12,.02,.63,-.1,.05,.69,-.09,-.18,-.03,-.15,-.12,-.01,.01,.45,.59,1,-.61,.33,.81,.86,.58,.43,.57,.05,-.17,-.42,.46,0,-.2,.05,-.03,0,-.15,.56,.42,.4,.03,.76,.12,.11,.32,.28,.3,.53,.36,-.11,.09,.13,-.04,-.12,-.09,.44,.17,.39,-.29,.13,-.09,.44,.02,-.11,-.25,-.09,.42,-.03,.51,.24,.53,.46,.08,.15,.54,.51,.25,.11,.09,.5,-.32,-.25,-.12,-.32,-.01,-.52,-.06,.06,-.09,.21,.17,.19,-.21,.64,.58,-.17,.42,-.12,.14,-.03,.17,.43,.54,.53,.25,.59,.35,.05,.21,0,.16,-.13,.58,.57,.42,.1,-.01,-.05,.16,.16,.43,.42,-.39,.29,.29,-.2,.66,.09,-.04,0,.42,.67,.38,.42,.63,.7,.28,.12,.14,.02,-.15,.52,-.44,-.17,-.35,.47,.77,.26,-.01,-.38,.11,-.15,.44,.03,-.08,.04,-.23,-.01,.01,.8,-.55,.16,-.07,.44,-.18,.49,.02,-.41,.25,-.09,-.08,-.1,.67,.03,-.45,.39,-.37,-.05,.38,-.16,-.55,.1,.1,.59,-.24,-.47,.24,-.02,.38,-.05,.64,-.22,.48,.02,.71,-.14,-.13,-.26,.16,.54,.03,.01,.05,-.8,-.26,-.12,.31,.39,.32,.23,-.2,.19,.37,-.22,-.02,.06,.06,.01,.46,.45,-.21,.53,.45,.11,-.11,-.05,.39,.61,.3,-.42,.02,0,.29,.05,-.05,.32,.51,-.1,.06,.53,-.17,.3,.47,-.51,-.13,.25,-.33,.24,-.2,.53,-.08,.75,-.4,.07,-.18,-.04,.57,.02,-.05,0,-.33,-.33,.74,.53,.34,.19,.47,.66,.58,.42,.49,-.22,-.18,.06,.5,-.5,.4,.05,-.06,.07,.64,.48,-.25,.71,.07,.4,.53,.28,0,.02,-.17,-.12,0,.19,.06,.32,.48,.45,.54,-.01,.19,.02,.28,.55,.18,.06,.13,.45,.77,-.04,.25,-.42,-.16,.58,.34,.41,-.2,.61,-.12,-.16,.52,-.38,.54,.32,.56,.24,.34,-.12,.31,.37,-.11,.3,.41,.61,.36,.69,.56,.77,.16,.7,.54,-.2,.04,.76,.59,.59,.56,.56,-.28,.22,.71,.02,-.43,.65,-.01,.55,-.26,-.02,.23,.24,.6,.5,.08,.12,.31,-.41,.48,-.19,.32,.33,.25,-.49,.25,.01,.13,-.03,.2,.33,.33,-.27,.52,0,.17,.17];export{a as rvalData};
