const a=[-.44,.22,.68,-.1,.65,-.12,.23,-.24,.08,.17,.22,-.04,.03,-.64,.37,-.09,.23,-.07,-.04,-.14,-.01,-.42,.15,.21,.3,.54,-.25,.2,.18,-.2,.37,-.36,.52,.04,.01,.17,.56,.3,.3,.54,-.18,.59,.42,-.13,.15,.09,.1,-.35,-.4,.34,.08,-.15,.25,.67,.4,.26,.07,.03,.25,.5,.45,.56,.74,-.17,-.25,-.32,.65,.3,-.24,-.1,.1,.24,.31,-.35,.62,0,-.29,.42,.56,-.27,-.43,.38,-.11,.51,-.23,-.33,.43,.05,-.68,.52,.25,.09,.12,-.57,-.03,-.01,-.63,-.3,-.25,.42,-.12,.74,.48,-.14,.56,.11,-.11,-.01,.46,.65,.07,.31,.11,-.58,-.3,.51,.14,-.41,-.47,.31,.02,-.26,.09,-.18,-.17,.51,.62,-.39,-.2,.56,-.12,-.42,-.03,.27,.11,-.25,.11,.29,-.26,-.14,.64,-.03,.5,.44,-.12,-.15,.04,-.2,.6,-.15,.75,-.02,.05,0,-.15,.13,-.2,-.17,-.14,.34,.01,.66,.01,.25,.11,.36,.33,-.35,.07,.5,-.14,-.33,-.09,-.36,.36,-.35,.05,-.18,.27,.58,-.01,-.07,.23,.63,.47,.17,.03,.02,.13,-.28,-.13,.11,.09,.48,.64,.65,.69,.4,-.16,-.4,.24,.44,.58,-.08,-.51,.49,-.11,.3,.38,0,-.14,.33,-.11,.47,.05,.24,.12,-.08,-.32,-.29,.46,.43,.56,.65,.29,.61,-.05,-.29,.23,.13,.05,-.1,.29,.74,.27,-.09,.29,.01,.12,-.04,.28,.37,-.22,-.14,-.01,-.23,.07,.16,.04,-.16,.14,-.32,.42,-.04,.63,.01,.22,.32,.2,.68,.16,.1,.4,.64,-.13,.53,-.3,.5,-.1,.32,-.19,-.29,.57,.77,.5,.1,-.11,.29,.72,-.41,.2,-.28,.32,-.4,.2,.4,-.13,.44,.27,-.29,-.17,.37,.48,-.17,.07,.44,-.04,-.26,.13,.33,-.11,.61,-.24,-.04,.08,.15,-.1,.62,.09,0,.48,-.03,-.06,-.13,.11,.33,.36,.2,.77,.45,.52,-.14,.33,.67,.1,.22,.5,-.22,-.07,.25,-.63,.39,-.02,.16,-.37,.11,-.35,.33,-.4,-.26,.36,.47,-.13,-.08,.6,.76,.3,.24,.42,.06,.66,-.2,.02,.21,-.41,.36,.28,-.17,.8,.68,.17,.21,.16,-.07,-.12,-.52,-.01,.61,.35,.13,-.18,-.11,.13,-.11,.34,.12,.04,.51,-.08,.22,-.13,.05,-.05,.07,.01,.22,-.05,.01,.59,.57,.81,.11,.09,-.05,-.13,.64,-.51,-.04,-.21,-.08,-.19,-.09,.77,.25,.25,.12,.33,.75,.65,.45,.78,-.52,-.25,.82,.08,-.04,.64,.47,.21,-.41,0,.58,-.36,.2,.05,.59,.54,.17,.13,-.25,-.21,-.11,.25,-.03,.15,.7,-.25,.56,.67,.56,.65,.47,.48,-.27,.46,.41,.6,.5,-.2,-.61,.24,.48,-.66,-.02,-.05,-.14,-.35,.61,-.03,.36,.8,.55,-.66,.32,-.06,.07,-.26,-.14,-.53,.68,.05,.59,.27,-.12,.2,.48,.52,.14,.65,-.32,.62,.5,.61,.13,.45,.06,.37,-.27,.04,.72,.04,-.04,-.2,-.17,.65,.55,.22,.01,.44,-.15,.16,-.12,.69,.46,.62,-.16,-.1,.5,.52,.42,.69,-.07,.54,-.02,.43,-.39,.08,.12,.29,.53,-.19,.69,.01,-.02,.39,-.15,.04,.24,.06,.4,.19,.19,-.07,-.08,-.14,.01,.27,.09,-.29,.05,.05,.27,.06,-.12,-.29,-.24,-.1,-.11,.79,.03,-.14,.61,.71,.71,.43,.08,-.42,-.27,-.31,-.19,.72,-.33,-.04,-.15,-.06,.03,.03,.07,.14,-.07,.73,.76,.1,-.29,.59,.67,-.12,-.44,.27,.21,-.33,-.04,.64,.14,.6,.37,.6,.6,-.38,.54,-.07,.13,.13,.77,-.15,-.58,.54,.69,.21,.06,.4,.64,.67,.17,.42,-.21,.1,-.42,.02,.01,.1,.43,.2,.1,.03,-.04,.65,-.22,-.02,-.18,.12,-.25,.27,.06,.02,-.31,.09,.15,.65,-.3,-.01,-.54,-.34,.38,.29,.46,.48,-.02,-.1,-.23,.14,.48,-.49,.16,.26,.6,-.32,.58,.13,.59,-.26,-.69,-.08,.69,.48,.11,.38,-.1,-.14,.02,.61,.5,.59,.19,.3,.07,.12,.07,.35,.48,.3,-.15,-.02,-.24,.42,-.1,.66,.67,-.49,.04,-.02,-.22,.36,.53,-.03,.08,-.5,.55,.55,-.32,-.02,-.29,-.09,-.03,-.07,-.2,.17,.09,.74,-.58,.49,-.09,.24,.57,.02,-.06,-.25,.41,-.1,-.22,.63,-.16,.14,.09,-.03,-.18,-.17,.07,-.18,-.05,-.11,.64,.53,0,.44,.39,-.32,-.31,-.38,.7,-.6,.18,.58,.04,.34,.12,.53,-.08,.2,.15,.2,.4,-.4,-.17,.02,-.46,.24,.52,0,.37,-.27,-.24,-.22,-.03,.57,.12,-.11,.09,.34,.05,.48,-.31,.49,.4,.17,.63,.64,.08,-.26,-.1,-.18,.03,.61,-.07,.22,-.38,.31,-.2,.61,.32,.67,-.16,-.12,.59,.76,.65,.34,.32,-.06,-.19,-.51,-.07,.65,.3,.57,-.28,.71,.47,-.34,.5,-.18,.18,-.38,.75,.4,.29,.17,-.32,.18,.05,.08,-.11,.58,-.52,.42,-.08,-.49,-.37,.05,.55,-.11,-.1,-.15,.57,.12,.63,-.17,.18,-.11,.04,-.13,.58,.13,-.11,.04,-.17,-.08,.27,.18,-.43,.5,.48,-.01,-.13,-.19,.79,.06,-.36,.34,-.03,-.26,-.33,.25,-.19,-.13,.34,.15,.2,.07,-.28,.51,.66,-.14,-.34,-.17,-.08,-.32,-.12,-.2,-.27,-.36,-.02,.04,.21,0,.22,.16,.15,-.22,-.05,-.21,.45,-.09,.69,.56,-.01,.21,.04,.64,-.23,.67,-.3,-.39,.41,.53,.14,-.34,-.04,.56,.57,.14,-.29,.08,-.04,-.17,.39,-.1,.15,-.16,.06,-.11,-.17,-.26,-.2,.77,.05,-.08,-.07,-.27,-.13,-.04,-.07,-.36,.41,.64,.68,-.02,.67,.58,.23,.1,.67,.48,.59,.52,-.66,.35,-.13,.49,.64,-.14,0,.05,.42,-.21,.23,-.17,.56,-.01,-.01,-.21,.02,-.03,-.13,-.02,.13,.64,-.02,.59,.05,.44,.11,-.28,-.03,.6,.04,.03,-.08,-.54,-.08,-.09,-.32,.3,-.63,.5,.07,0,.26,.19,.52,.74,-.2,-.44,-.08,.11,-.16,-.16,-.13,-.11,.41,.45,-.18,.18,-.19,-.02,.07,.03,-.13,.12,.24,-.09,-.01,.15,.02,-.03,0,-.25,.12,-.12,-.15,-.23,.37,.2,-.16,-.1,-.08,.16,-.32,-.22,-.01,.57,.19,.19,.44,.01,.17,.64,-.1,.01,.03,.06,-.04,.17,.21,.1,.38,.48,-.15,.16,-.05,-.15,.66,-.14,-.04,-.04,.18,-.14,-.19,-.27,.52,.25,.4,.26,.19,.17,-.16,-.34,-.13,.04,.45,-.22,-.24,-.03,.3,.36,.13,-.33,.27,.62,-.05,.15,.15,.26,.63,-.15,.23,.69,-.13,.37,.67,-.09,-.35,0,.11,.33,-.16,.16,-.3,-.41,.39,.04,-.28,.76,-.34,.72,.65,-.15,.02,.6,.53,-.36,-.32,-.2,.13,.57,.05,.45,.06,.51,-.07,-.01,.32,.43,.12,-.41,-.16,-.24,.31,.2,.53,-.3,.43,-.32,.16,-.26,-.1,-.07,.35,.19,-.08,-.1,.57,.71,-.25,-.03,.63,.54,-.16,-.09,-.25,.5,-.16,-.05,.19,.62,-.12,.4,.42,.64,-.32,.09,-.44,.24,.59,.09,.16,-.14,-.08,.05,-.16,.21,.36,-.22,.23,.45,.07,.7,.56,.75,.34,.26,-.01,-.41,.22,.58,.21,.53,.03,.39,.01,-.11,-.06,-.07,0,-.32,.06,.65,.54,-.23,.75,.06,-.23,-.46,-.03,.68,-.2,-.3,.75,.72,-.28,-.32,.45,-.03,.77,.14,.68,-.18,.7,.66,-.04,.72,-.02,-.09,-.23,.45,.21,-.33,.52,.61,.04,-.12,.48,.39,-.14,-.09,.2,-.03,-.3,.17,.13,-.28,-.16,.73,.05,.64,.48,.5,-.06,-.11,-.12,.53,.6,.73,-.19,-.11,-.06,-.18,.13,.4,-.16,.64,-.08,-.16,.17,-.03,-.18,.39,-.31,-.3,.7,-.71,.58,-.19,-.21,-.01,.4,-.27,-.31,.25,-.16,.7,-.14,.66,.06,.32,-.24,.34,-.38,-.28,.01,.52,-.2,.41,.02,-.16,-.16,.64,.11,.1,-.1,.11,.46,.7,.53,-.17,.18,-.13,.72,.32,.69,.46,.33,-.2,.14,.06,.44,.32,-.16,.61,-.14,.56,.58,-.65,.29,-.06,.23,.21,.39,.55,-.02,.16,-.08,-.15,-.25,.13,.08,.67,.69,.74,-.35,-.11,.67,-.11,.12,.02,-.07,-.29,-.22,-.03,.63,.17,-.09,-.28,.1,.22,.01,.14,.56,-.26,-.13,.37,.29,.69,.47,.21,.31,.23,.33,.12,.18,.51,.53,.1,-.19,-.24,-.06,.67,.22,.05,-.03,-.47,.04,.23,.55,.28,-.24,-.41,-.34,.18,-.4,-.06,-.29,-.22,.02,.09,.4,.32,-.01,.54,.72,.13,.55,.07,.47,.54,.1,-.12,-.1,.56,-.35,.13,-.06,.17,.75,.52,.34,-.1,.35,-.41,-.24,.68,.66,.07,-.03,-.05,.49,.21,-.12,.24,-.07,.08,-.1,-.27,.16,-.35,.02,.46,-.14,-.11,.42,-.19,.13,.75,.33,.61,.44,-.16,-.32,.33,.11,.4,.38,-.3,.58,-.05,0,0,-.19,-.09,.39,-.51,-.4,.07,.3,.69,.49,.47,.03,-.16,.06,.05,.17,.1,-.25,.4,.72,.22,-.22,.4,.46,.26,-.37,-.43,-.32,.71,-.23,.67,.55,.46,.1,.04,.55,.09,.44,-.05,.54,.4,-.11,.2,.4,-.27,.64,.24,.28,.05,.31,0,-.07,.07,.47,-.29,-.04,.68,.25,-.4,.5,.61,.27,.14,.11,.44,.12,-.19,.44,-.01,.18,.62,-.11,.61,.27,.22,.32,.24,.35,.16,.2,.62,-.21,.03,-.35,-.1,.48,.34,.1,.77,-.1,.21,.5,.41,.63,.61,.25,.83,.76,.66,.04,-.02,.18,.3,.27,.36,-.22,.62,.88,-.08,.28,.52,.44,.58,.34,.08,-.15,1,.36,.39,.1,.41,.49,.34,-.03,.65,.79,.21,.52,-.08,.49,.27,-.33,.67,.38,-.23,.17,.8,.44,.72,.17,.33,.23,.7,.52,.73,-.33,-.28,.26,.02,-.08,.53,.25,.2,.33,-.34,.25,.29,.37,.71,.72,-.07,-.3,.61,.11,.35,.68,-.02,-.13,.35,.29,.42,.57,.44,.69,-.04,.68,-.18,.49,-.1,.28,-.13,.02,.1,.11,.67,.15,.48,.17,.54,-.11,.28,.83,.44,.57,.47,.52,-.05,-.14,-.11,.3,.35,-.06,-.32,.5,.77,.51,-.06,.77,-.07,.21,.58,.07,.53,.08,.49,.58,.6,.68,.59,.06,.66,.44,.71,.42,-.25,.51,-.02,-.39,.59,-.02,.72,.11,.74,.65,.02,.61,-.14,-.02,.12,.45,.18,.22,.24,-.16,.07,.36,.07,-.19,-.01,.6,.66,.3,-.03,.53,.32,.37,.47,.49,.56,-.16,-.17,-.23,.47,.03,-.43,-.11,.41,.45,.33,.66,.73,.44,-.24,.52,.7,-.27,.24,-.08,.62,.49,.19,-.44,-.02,0,-.18,.11,.09,.75,.47,.56,-.15,.27,.37,.6,-.15,.09,-.18,.09,.82,-.13,.69,.32,.5,.63,.21,.69,.43,.67,-.22,.12,-.02,.07,-.48,-.1,-.19,-.59,-.11,-.19,.15,.03,-.1,-.06,.6,.68,.05,.53,.64,-.51,.74,-.34,-.24,-.6,0,.7,.63,.68,.42,-.11,.48,.28,.49,.49,.26,.03,.62,.55,.47,.45,.47,.28,-.06,.7,.57,.76,.14,-.28,.05,-.03,.54,.05,.49,.05,.36,.57,.63,.72,.66,.59,.74,-.1,.69,-.04,-.27,.68,.15,-.14,-.03,.52,.58,.63,.24,.28,.45,.32,.71,.58,-.04,.03,-.02,-.12,-.15,.37,-.37,.09,-.18,.56,0,.24,-.34,-.05,-.05,-.03,-.29,-.34,.57,.05,.14,.35,.31,.18,.54,-.34,-.41,-.28,.07,.46,.06,.01,.63,.46,.38,-.1,.65,-.15,.55,-.18,.59,.15,.35,.35,-.07,.17,.03,.28,.03,-.38,-.2,-.24,.66,.67,.57,.58,-.07,-.1,.48,.35,.24,-.01,-.08,-.2,.56,.62,.11,.42,.62,.16,.23,.17,.69,.66,-.35,-.17,.43,.46,.43,.06,-.36,.35,-.1,-.19,-.15,.64,-.03,.11,.53,.2,.42,.62,.08,-.07,-.08,.73,-.44,.38,.14,.01,-.2,.08,.6,.08,-.25,-.05,.28,.03,.57,.66,.73,-.25,.72,.69,.55,.46,.53,.17,.15,.4,.59,.15,-.01,.04,-.14,.15,.69,.49,-.37,.42,-.15,.36,.56,.1,.07,-.08,-.03,-.36,-.33,.01,.24,.53,.66,.47,.7,.49,.01,.34,.39,0,.11,-.12,.34,.56,.48,-.01,-.2,-.61,.24,.56,-.04,.79,.32,.59,.22,.13,.47,-.57,.57,.63,.67,.03,.69,.22,.72,.44,-.1,.21,.71,.43,.55,.59,.62,.57,-.28,.6,.19,.4,.02,.53,.61,.59,.61,.7,-.27,.66,.53,.03,-.37,.55,-.11,.65,-.38,.07,.66,.38,.68,.73,-.26,.04,-.19,-.05,.72,.07,.45,.45,.56,-.25,-.31,.12,-.13,-.13,-.08,.3,.04,-.04,.55,-.09,.19,.54];export{a as rvalData};
