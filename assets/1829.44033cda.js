const a=[-.26,.16,.72,.12,.7,.16,.29,-.2,-.06,.19,.24,.02,-.02,-.62,.37,-.08,.26,.08,-.23,-.09,-.12,-.01,.09,.13,.24,.51,-.1,.25,.4,-.16,.29,-.19,.57,.27,.26,.04,.47,.1,.16,.38,-.13,.52,.64,-.05,.07,-.06,-.04,-.05,-.05,-.05,-.02,.02,.1,.52,.38,.03,.12,.15,.12,.56,.22,.46,.54,.03,.14,0,.54,.13,-.15,-.09,-.07,.18,.25,.02,.57,.09,-.11,.24,.36,.16,-.37,.54,-.11,.48,-.04,-.04,.43,.01,-.51,.31,.21,.02,-.02,-.55,.01,-.02,-.66,-.07,-.04,.37,-.04,.53,.39,-.12,.41,.04,-.09,-.17,.48,.46,-.06,-.05,-.07,-.53,-.07,.47,.33,-.13,-.12,.21,-.18,-.02,.28,-.04,.03,.38,.51,.19,-.03,.45,-.21,-.51,-.12,-.15,.29,.05,-.12,.11,-.17,.13,.59,.21,.43,.4,.1,-.09,-.02,.22,.44,-.14,.58,-.23,-.02,-.15,-.27,.19,-.1,.01,-.21,.22,.02,.62,-.08,.12,.06,.24,.32,-.15,.12,.55,.11,.09,-.12,-.34,.57,0,-.02,-.11,.18,.56,.04,.05,.07,.55,.38,-.02,.1,.11,.08,-.09,-.08,.04,.03,.46,.53,.55,.71,.36,.03,-.18,-.19,.23,.47,-.06,-.43,.65,-.04,.23,.19,-.15,-.3,.21,-.15,.26,.13,.24,-.03,-.19,-.08,-.47,.44,.31,.34,.59,.29,.47,-.19,-.14,.22,.29,-.08,.09,.06,.67,.14,.16,.25,-.26,-.03,.04,-.08,.29,-.34,-.21,-.12,-.5,.09,.02,.2,-.05,0,-.04,.35,.15,.66,-.14,.22,.21,.01,.61,-.1,.08,.24,.6,.21,.39,-.05,.45,0,.2,-.13,-.31,.44,.57,.44,-.03,-.01,.13,.6,-.04,.08,-.46,.11,-.41,.15,.31,-.29,.39,.17,-.07,-.11,.15,.55,-.5,.02,.71,-.17,-.21,-.06,.2,-.02,.7,-.17,-.21,.05,.11,-.06,.24,.27,-.17,.5,-.08,-.06,.12,.41,.2,.07,.07,.64,.1,.47,-.16,.27,.56,-.23,.12,.57,-.06,.09,.15,-.51,.29,.06,.14,-.02,-.01,.07,.24,-.4,-.19,.13,.76,-.04,-.24,.41,.63,.11,.23,.54,-.17,.59,-.36,.09,.13,-.77,.14,.22,.03,.64,.64,.02,.13,.18,-.21,-.05,-.44,.12,.5,.45,.01,.3,-.1,-.11,.1,.32,.04,.07,.6,-.14,.24,-.02,.05,.05,.02,.01,.29,-.06,.02,.49,.53,.58,-.06,.1,-.13,-.18,.7,-.28,-.13,.04,.02,-.01,.11,.62,.13,.1,.08,.25,.62,.52,.48,.57,-.5,-.13,.56,.15,-.02,.6,.73,.09,-.39,.1,.41,-.06,-.09,.28,.54,.57,.03,.23,-.44,-.37,.04,.19,.1,.05,.5,-.41,.64,.66,.57,.61,.38,.36,-.17,-.12,.35,.62,.53,-.24,-.36,-.03,.22,-.54,.01,-.11,.28,-.1,.5,.13,.19,.67,.57,-.51,.23,0,.08,-.28,-.08,-.34,.51,-.15,.51,.43,.04,.16,.54,.34,-.24,.55,-.39,.61,.3,.67,.09,-.12,.07,.47,-.25,.47,.65,-.01,.04,-.36,-.18,.74,.53,-.09,-.26,.44,-.27,-.01,.07,.53,.45,.42,-.07,.41,.48,.57,.3,.62,-.07,.41,.08,-.14,.01,.12,-.23,.11,.64,.07,.75,.1,-.08,.47,.1,-.07,.19,-.17,.41,-.01,-.09,-.14,-.44,.07,.15,.28,.35,.16,.04,.03,.19,-.1,-.09,.03,-.06,.06,-.04,.41,.07,-.33,.47,.61,.53,.31,-.12,-.2,-.31,-.24,-.23,.45,-.02,-.05,-.35,-.2,-.2,-.05,-.04,.15,-.1,.59,.7,-.09,-.62,.66,.68,-.13,-.34,.11,.3,.02,.07,.63,.16,.35,.33,.66,.48,-.1,.46,-.2,.03,.02,.56,-.31,-.38,.54,.67,.3,-.13,.48,.57,.78,-.06,.58,-.1,-.06,-.04,.07,.07,.16,.44,.13,.02,-.17,-.21,.69,-.5,-.07,.01,.03,-.12,.26,-.08,.1,-.04,-.07,.17,.68,-.56,-.05,-.61,-.31,.12,.32,.17,.54,-.34,-.29,-.1,.14,.56,-.29,.23,.34,.58,.07,.54,.05,.35,.09,-.52,-.1,.66,.53,.06,.14,-.08,-.18,-.15,.7,.73,.48,.16,.08,-.06,-.05,.15,.32,.43,.08,.11,-.05,-.21,.32,-.24,.46,.6,-.17,.15,-.11,.19,.52,.57,.14,.14,-.43,.44,.56,-.25,-.04,-.05,.19,-.18,.15,-.36,.26,.2,.46,-.37,.49,-.13,.27,.5,-.06,-.08,0,.78,0,-.02,.53,-.4,.08,-.11,-.05,-.05,-.25,.08,-.34,-.06,-.15,.6,.44,-.11,.49,.65,-.26,-.03,-.15,.69,-.45,-.1,.53,.07,.14,-.1,.42,0,.3,-.16,.19,.48,-.17,-.07,-.22,-.33,.09,.41,-.09,.37,-.08,-.01,.05,.24,.43,.11,-.08,.27,.53,-.02,.58,-.24,.58,.32,.27,.43,.49,-.1,-.27,.16,.13,.27,.55,.15,.18,-.19,.01,-.32,.57,.19,.69,-.07,-.12,.47,.65,.65,.24,.15,.4,-.1,-.03,.08,.69,.03,.62,-.15,.64,.33,-.41,.56,-.38,.17,-.42,.68,.36,.28,-.05,-.07,.18,-.05,-.02,-.07,.52,.14,.33,-.22,-.57,-.12,.1,.65,-.03,-.02,-.38,.38,-.05,.52,-.2,.2,-.08,.03,.17,.47,.24,-.07,.02,-.17,-.06,.04,.21,-.16,.63,.55,-.12,-.26,-.06,.66,-.14,-.1,.14,-.01,-.16,.04,.18,-.11,-.03,.22,.2,.1,.01,.11,.48,.56,-.11,-.31,.18,.02,-.19,.18,-.15,-.5,-.31,-.04,-.09,.17,.27,.17,.22,.05,-.27,.14,-.12,.28,-.02,.5,.35,-.11,.32,.07,.7,-.46,.47,-.4,-.44,.29,.48,.04,-.4,-.16,.43,.46,.25,-.24,.19,-.11,.08,.33,.05,-.03,.14,-.1,.1,-.08,-.01,-.18,.53,.24,.07,-.16,-.37,-.09,.2,-.04,-.46,.2,.69,.74,.08,.63,.61,.16,.02,.59,.5,.6,.47,-.64,.11,0,.38,.62,.01,.08,.13,.3,-.18,.22,-.34,.47,.06,-.08,-.33,.02,.1,-.06,-.16,-.01,.62,.5,.57,.27,.49,.06,-.45,.08,.61,-.06,-.02,.05,-.49,-.15,-.1,.1,.35,-.64,.6,-.31,-.11,.32,.07,.47,.61,-.25,-.13,-.21,-.06,-.33,-.4,.07,.05,.32,.04,-.47,.04,-.5,-.21,.18,.04,-.05,.21,.14,.03,-.01,.1,.01,.14,.1,-.11,.23,-.01,-.01,-.32,.42,.22,-.26,.15,-.17,.01,-.33,.13,.17,.53,.18,.26,.39,.02,.29,.5,.07,.1,-.03,-.22,-.13,.28,.15,.12,.18,.4,-.2,.1,-.13,-.39,.65,-.16,-.15,-.13,.16,.08,-.32,0,.41,0,.29,.25,.05,.16,-.23,-.12,-.08,.36,.48,-.32,.02,-.12,.31,.06,.46,-.04,-.09,.56,-.07,.26,.08,.36,.56,.1,.2,.47,-.29,.51,.56,.08,-.01,0,.01,.17,-.05,.03,-.34,-.02,.35,.05,-.22,.63,0,.57,.6,-.38,.13,.61,.63,-.28,-.18,-.35,-.06,.7,.1,.37,.11,.55,-.02,-.12,.25,.2,-.08,-.1,-.13,-.12,.29,.24,.6,.08,.28,-.1,.11,-.25,-.06,-.13,.24,.1,-.03,-.1,.61,.63,-.34,.08,.73,.58,.16,.16,.11,.55,.17,-.08,.35,.62,.11,.45,.18,.7,-.69,0,.12,.18,.82,-.03,.2,.1,-.03,.16,.05,.27,.23,-.06,.06,.48,.28,.62,.52,.67,.01,-.09,.19,-.44,.17,.41,.15,.39,.02,.28,-.2,-.26,-.22,-.08,-.2,-.28,.06,.58,.41,-.17,.57,.1,-.18,-.33,-.02,.64,-.05,-.04,.71,.6,.12,.03,.5,.01,.61,.21,.61,.05,.67,.52,-.18,.71,.22,-.22,-.5,.35,.36,-.17,.53,.57,.27,.14,.42,.26,.1,.13,.17,-.01,-.35,.41,.12,-.05,-.17,.56,.17,.74,.32,.43,-.01,-.03,.11,.42,.53,.64,-.15,.11,-.03,.04,.17,.41,.05,.63,-.07,-.01,.13,.11,-.22,.34,-.33,-.38,.76,-.52,.74,-.21,-.45,-.06,.35,-.13,-.17,.08,.01,.5,-.11,.57,.28,.44,-.48,.52,-.07,-.5,.02,.5,.08,.23,-.01,-.03,.01,.7,.01,-.06,0,-.04,.46,.46,.48,-.02,.14,-.08,.78,.27,.5,.49,.41,-.29,.01,.05,.32,.21,.14,.48,-.06,.29,.63,-.57,.49,-.03,.21,.25,.23,.48,.18,.14,.03,-.26,-.39,.06,.08,.59,.5,.53,-.4,-.23,.56,-.15,-.09,.05,.22,-.32,.02,-.08,.43,-.11,-.26,-.14,.1,.2,.03,-.06,.51,-.08,-.1,.22,.14,.44,.21,.04,.09,-.15,.1,.3,-.12,.44,.43,-.05,-.22,-.45,-.19,.38,.13,.23,.04,-.23,.04,.03,.47,.03,-.26,-.4,-.41,.12,-.49,-.08,-.36,-.25,.1,-.08,.16,-.12,-.18,.38,.48,.16,.45,.15,.36,.45,.32,-.27,.03,.63,-.18,-.13,-.09,.07,.56,.35,.13,.19,.14,-.31,0,.48,.47,.08,.18,.06,.35,.1,.03,.22,.19,.27,.03,.08,.14,-.39,-.09,.36,-.29,-.19,.34,-.17,.12,.53,.19,.46,.42,.03,-.11,.17,.11,.22,.25,-.5,.54,.05,-.26,-.09,.15,-.05,.34,-.34,-.57,.05,.2,.48,.28,.51,.13,.05,-.04,-.06,.24,.24,.04,.32,.51,.21,-.04,.18,.39,.27,-.2,-.57,.11,.61,-.08,.61,.45,.3,-.13,.23,.34,-.02,.21,-.25,.37,.32,-.12,-.16,.43,-.33,.68,.36,-.21,.18,.29,-.04,-.11,.15,.4,-.08,.09,.55,.43,-.22,.3,.55,.15,.05,.25,.15,.12,-.1,.07,-.06,.13,.52,-.16,.25,.17,.14,.2,.16,.22,-.19,.23,.52,0,.15,.07,.25,.46,-.03,.04,.57,-.19,.11,.47,.37,.7,.51,.12,.57,.54,.49,.05,.09,-.05,.31,.21,.3,-.12,.52,.43,.23,.16,.48,.38,.49,.14,.08,.01,.45,.12,.43,-.12,.15,-.12,.22,.1,.51,.59,.22,.55,.13,.39,-.07,.02,.4,.17,-.42,.12,.56,.56,.3,.06,.11,.14,.58,.36,.45,.1,-.24,-.13,-.18,-.3,.68,-.12,-.01,.31,-.08,.31,.63,.28,.51,.57,-.18,.2,.52,.08,.13,.6,-.18,-.43,.21,.27,.36,.45,.21,.5,.07,.53,-.26,.38,-.27,-.02,.01,-.02,-.05,.08,.68,.2,.36,.14,.2,-.08,-.16,.6,.38,.46,.39,.45,.22,-.13,-.34,0,.12,-.07,-.23,.48,.26,.47,.44,.34,.19,-.06,.2,-.01,.38,-.11,.09,.6,.69,.47,.49,-.37,.55,.28,.4,.1,-.34,.37,.13,-.65,.46,-.17,.61,-.17,.65,.46,.05,.55,-.03,-.1,.14,-.06,-.02,.17,.11,-.36,.01,-.12,.48,.01,-.11,.5,.59,.11,.1,.5,.39,.11,.38,.53,.64,.08,-.09,.21,.46,.06,-.26,-.07,-.12,-.06,-.13,.66,.7,.54,-.14,.39,.41,-.02,.1,.1,.64,.3,-.05,-.21,.06,-.14,-.12,.17,.11,.59,.3,.34,-.38,.15,-.07,.56,.09,.06,-.21,-.07,.58,-.1,.59,.3,.52,.53,.12,.41,.31,.54,-.23,.18,-.19,.19,-.65,-.12,-.23,-.42,-.1,-.1,-.02,-.02,-.21,0,.51,.52,-.19,.46,.69,-.36,.54,-.48,-.22,-.35,-.2,.63,.68,.61,.6,-.39,.33,.56,.33,.37,.26,.52,.53,.59,.36,.28,.2,.24,.01,.42,.47,.64,.1,-.09,-.14,.27,.45,.27,.37,.12,.31,.54,.44,.69,.62,.54,.67,-.14,.66,-.1,-.08,.54,.22,-.14,.18,.57,.44,.64,.55,.15,1,.22,.7,.04,-.01,.08,.03,.12,.06,.33,-.29,-.11,-.19,.63,-.22,.29,-.26,-.13,-.09,.17,-.2,.04,.46,.09,.18,.22,.19,.13,.41,-.36,-.23,-.26,0,.39,-.11,-.17,.54,.45,.23,-.17,.53,.22,.61,.08,.48,-.03,.37,.29,-.05,.17,.03,.2,.01,-.41,-.21,-.08,.55,.56,.7,.45,-.14,.1,.52,.31,.24,.13,-.22,-.01,.58,.68,-.12,.26,.44,.43,.2,.33,.66,.45,-.13,-.29,.27,.28,.34,-.11,-.19,.3,.11,-.09,.14,.62,-.35,.02,.53,.38,-.01,.49,.46,.02,-.02,.55,-.25,.34,.09,.03,-.12,.05,.36,.44,.07,.16,.2,.26,.48,.66,.68,.05,.56,.52,.57,.44,.56,-.06,.08,.18,.47,.16,.3,.01,-.13,.21,.53,.57,-.52,.35,-.03,.31,.67,.06,-.08,.29,.21,-.25,-.15,.02,-.04,.61,.71,.11,.64,.05,.08,.12,.16,.26,-.01,-.25,.3,.37,.43,-.17,-.45,-.44,.34,.48,.33,.72,.25,.57,.16,-.19,.4,-.45,.51,.7,.64,.11,.55,.44,.6,.39,-.2,.19,.68,.41,.38,.51,.51,.41,.08,.51,.31,.34,-.06,.49,.52,.55,.52,.57,-.5,.62,.36,-.09,-.39,.52,.15,.65,-.57,.04,.65,.26,.55,.55,.03,-.02,.17,-.31,.76,-.16,.59,.21,.62,.22,-.14,.16,.03,-.03,.04,.09,-.12,.22,.66,.13,-.13,.28];export{a as rvalData};
