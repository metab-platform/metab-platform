const a=[-.32,.31,.47,.03,.61,.07,.44,-.07,.39,-.07,.51,-.02,.01,-.44,.5,-.09,.23,.12,-.1,.02,-.19,-.3,-.04,.44,.62,.72,-.26,.08,.37,-.18,.56,-.27,.61,.14,.33,.08,.55,.46,.37,.33,.09,.71,.36,-.12,.07,.3,.24,.07,.19,.09,.13,-.16,-.1,.63,.19,.41,.39,.03,-.08,.91,.33,.55,.58,.01,.37,-.29,.68,.42,-.05,-.01,-.2,.39,.37,-.13,.67,.04,.03,.3,.19,.05,-.34,1,-.01,.77,-.08,-.12,.74,.04,-.66,.41,-.1,-.04,.17,-.67,.04,.1,-.58,-.17,-.04,.42,.01,.62,.39,.09,.42,.2,.15,.16,.66,.45,0,.12,.04,-.47,-.19,.6,.33,-.29,-.01,.65,-.07,-.08,.12,0,-.28,.37,.52,-.07,-.21,.63,-.25,-.64,-.06,-.11,.2,.04,-.14,.27,-.32,-.07,.63,.04,.62,.69,-.04,-.28,-.1,.09,.57,-.21,.67,-.08,-.01,.07,-.18,-.14,-.05,-.09,-.23,.48,-.4,.4,.01,.3,.2,.31,.53,-.3,-.05,.86,0,-.11,-.25,-.38,.44,-.09,.09,-.05,.24,.74,.08,.25,-.05,.39,.39,.05,-.01,-.05,-.12,-.17,-.04,.04,.13,.56,.58,.48,.61,-.03,-.05,-.21,.24,.62,.66,-.09,-.27,.39,-.3,.08,.27,0,-.28,.6,-.21,.63,.03,.61,-.03,-.09,-.12,-.18,.34,.36,.4,.64,.39,.65,-.22,-.27,.04,-.06,-.17,.02,.55,.36,.01,.03,.5,.11,-.07,.1,.15,.62,-.09,-.11,.1,-.32,.02,.06,.02,-.07,-.1,-.03,.22,.28,.6,.04,.01,.45,-.05,.33,.01,-.14,.31,.6,.14,.42,.02,.6,.14,.54,-.17,-.26,.6,.3,.51,.05,-.06,.2,.54,.17,-.04,-.16,.32,-.35,.05,.48,-.05,.62,-.08,-.15,-.17,.17,.65,-.25,.07,.39,.21,-.35,-.14,-.02,.01,.53,-.22,-.2,.09,.33,-.15,.43,.07,.19,.79,-.01,.05,-.02,.04,-.03,-.24,-.12,.31,.04,.74,-.13,.42,.72,-.32,.09,.59,-.33,-.13,.11,-.43,.37,.33,.2,-.27,.09,-.15,.26,-.31,-.27,.37,.43,-.15,-.07,.58,.47,-.05,.12,.31,.06,.6,-.38,.1,.08,-.44,.37,.13,-.06,.51,.4,.5,.06,.05,.1,-.12,-.35,-.07,.62,.33,.2,.11,-.21,.34,.02,.28,.12,.11,.6,-.07,-.06,-.01,.06,.17,-.01,-.09,.34,-.19,-.02,.51,.58,.4,.07,.2,-.23,-.2,.52,-.29,-.12,-.31,-.28,-.08,.13,.39,.48,.03,.12,.49,.43,.58,.46,.31,-.39,-.14,.42,-.09,0,.62,.49,-.04,-.09,-.09,.6,-.11,-.02,.48,.63,.55,.05,.11,-.46,-.13,-.03,.61,-.01,-.28,.6,-.52,.59,.65,.43,.44,.75,.64,.04,-.04,.29,.56,.61,.1,-.4,.21,.35,-.69,.11,.08,.02,.02,.62,.03,.49,.49,.52,-.49,.29,-.32,.01,-.19,-.08,-.55,.58,.16,.65,.28,-.09,-.02,.61,.35,.03,.46,-.19,.53,.56,.43,.28,-.05,.08,.06,-.35,.49,.22,.01,-.01,-.22,-.45,.47,.75,-.37,.03,.46,-.11,-.02,-.26,.4,.54,.73,-.09,.13,.5,.53,.26,.61,-.01,.65,.3,-.04,.1,-.26,-.11,.17,.66,-.01,.51,.02,-.03,.7,-.05,-.05,.01,-.06,.47,-.04,-.38,-.1,-.38,-.02,.06,.04,.28,-.16,.04,-.19,-.08,-.06,-.05,.07,-.06,.04,-.02,.38,.1,-.07,.64,.52,.31,.53,-.21,-.22,-.2,-.1,-.05,.31,-.06,.1,-.18,-.03,-.17,-.16,.03,-.2,-.04,.32,.39,.05,-.56,.62,.55,.1,-.51,.08,.46,.04,-.06,.55,.14,.3,.67,.57,.72,-.13,.54,-.15,.06,-.13,.48,-.15,-.61,.51,.49,.22,-.08,.5,.68,.45,-.02,.22,-.23,-.11,.05,.04,.07,.16,.52,0,0,-.07,-.23,.55,-.33,-.08,-.03,-.1,-.15,.12,.01,.02,-.21,.18,.05,.56,-.37,-.06,-.34,-.26,.14,.14,.2,.6,-.2,-.2,-.17,.05,.88,-.32,.02,.07,.59,-.16,.71,.08,.26,-.07,-.64,-.17,.61,.61,.01,.3,-.08,-.01,.06,.52,.42,.63,-.13,.2,.03,.01,.18,.72,.71,.44,.04,-.01,-.24,.25,-.41,.67,.71,-.28,.14,-.15,-.09,.61,.58,.04,.17,-.38,.71,.69,-.24,-.15,-.13,-.08,.02,-.07,-.27,.13,.17,.35,-.44,.75,-.01,.34,.49,-.01,.04,-.06,.36,-.08,-.21,.71,-.14,-.11,-.13,-.1,-.04,.09,.04,-.25,.04,-.06,.46,.51,-.07,.83,.55,-.29,-.07,-.27,.3,-.44,.01,.57,-.17,.3,-.19,.6,-.03,.05,.04,.59,.33,-.28,-.02,-.05,-.37,.45,.54,-.08,.32,-.18,.03,-.08,.34,.5,.04,-.09,.15,.51,-.05,.45,-.35,.62,-.06,.23,.36,.49,-.07,-.09,.22,-.1,.16,.63,-.03,-.01,-.24,-.05,-.07,.63,.01,.52,-.16,-.17,.6,.28,.35,.28,.23,.03,-.09,-.15,.06,.34,.36,.75,-.27,.55,.63,-.09,.43,.01,.25,-.33,.6,.39,.5,.22,-.2,-.12,.05,0,-.1,.56,-.06,.52,.04,-.48,.13,.29,.67,-.02,.3,-.2,.62,.13,.71,-.18,-.03,.11,-.11,.01,.66,.1,-.11,.01,.02,-.24,-.01,.1,-.25,.43,.89,.15,.01,-.02,.49,.2,-.21,.4,-.02,-.03,-.14,.47,-.14,-.03,.24,-.1,-.17,.1,.1,.58,.66,-.05,-.33,-.07,-.31,-.26,.07,.2,-.32,-.1,.04,.03,-.02,.15,-.11,.19,.07,-.09,.07,-.28,.34,.19,.72,.53,-.01,.21,.27,.52,-.27,.72,-.4,-.4,.11,.44,-.04,-.38,-.16,.34,.66,.23,-.12,.06,.07,-.08,.51,.06,-.16,.06,-.23,-.08,-.03,.1,-.41,.41,.36,-.08,-.12,-.24,-.02,.13,-.02,-.41,.41,.52,.54,-.09,.61,.44,-.07,0,.34,.56,.68,.73,-.56,.18,-.08,.45,.67,-.06,-.02,-.05,.7,.01,.07,-.06,.5,.12,.12,-.06,.06,.2,-.1,-.19,.33,.74,.15,.66,.18,.66,.03,-.24,-.01,.5,.05,.1,-.2,-.47,-.12,-.08,-.05,.48,-.48,.67,.06,-.3,-.11,.19,.5,.66,-.36,-.22,-.02,-.1,-.11,-.41,.03,-.02,-.03,.34,-.36,-.07,-.34,-.2,.08,.07,-.27,.21,0,.07,.1,.07,-.06,.17,.18,-.19,.26,0,-.14,-.01,.36,.16,0,.06,-.21,.26,-.25,-.12,.14,.69,.02,.31,.26,-.11,.18,.59,.01,.06,.05,-.22,.01,.12,.1,-.05,.39,.65,.04,.29,.09,-.29,.61,.14,.02,-.03,-.02,.09,-.24,-.19,.33,-.05,.34,.28,-.22,.42,-.21,-.25,.01,.15,.67,-.03,-.08,-.18,.71,.02,.44,-.23,.35,.42,-.09,.12,.09,.28,.49,-.04,.35,.47,-.22,.42,.75,.07,-.17,.04,.02,.2,.14,.14,-.25,-.28,.74,.06,-.13,.54,-.19,.19,.53,-.2,.23,.62,.61,-.3,-.18,-.38,.43,.56,.39,.36,.05,.49,-.09,-.04,.11,.25,.02,.07,.01,-.11,.73,.11,.75,.15,.57,-.14,.01,-.09,.03,-.06,.43,-.12,-.03,-.05,.6,.64,-.23,.25,.56,.69,-.14,.03,0,.67,.14,.05,.63,.61,-.02,.69,.07,.4,-.32,.04,-.09,.14,.43,.08,.04,-.03,.14,-.01,-.07,.59,.41,-.22,.19,.67,.32,.62,.57,.48,.35,-.34,-.01,-.57,.07,.39,.19,.56,.17,.74,-.01,-.12,-.22,-.02,-.53,-.21,.09,.66,.6,-.05,.33,.13,-.24,-.34,.05,.64,.02,-.2,.58,.51,.18,.05,.48,-.18,.61,.11,.52,.02,.34,.21,-.22,.5,.22,-.17,-.45,.37,.25,.05,.75,.44,.23,.06,.74,.46,-.02,.02,-.09,.04,-.12,.21,-.14,-.25,-.55,.54,.1,.53,.42,.54,-.08,-.1,-.04,.61,.67,.5,-.17,-.01,-.05,-.1,.11,.53,.01,.72,-.32,-.17,-.12,.13,.03,.21,-.32,-.13,.5,-.57,.55,.11,-.37,-.1,-.02,-.29,-.33,.09,-.06,.6,-.2,.59,.6,.09,-.38,.39,-.29,-.19,-.03,.44,-.01,.44,-.08,.25,-.05,.54,.16,-.11,.01,-.45,.77,.65,.39,-.49,.19,-.15,.46,.52,.32,.67,.45,.06,.14,.29,.38,.26,-.19,.65,-.21,.1,.55,-.5,.14,.01,.06,.01,.47,.61,.05,.22,.04,-.22,-.41,-.17,.05,.33,.72,.19,-.15,-.09,.63,-.54,.3,.07,.47,-.4,.08,.1,.56,.2,-.13,.05,.56,-.03,.11,.09,.38,-.11,-.04,.25,-.04,.19,.39,.14,.04,.04,.15,-.09,-.13,.23,.42,.01,-.34,-.56,-.26,.47,.05,.31,-.04,-.14,-.19,0,.27,.01,-.48,-.54,-.68,-.01,-.61,.06,-.45,-.41,.12,-.28,-.03,-.06,.02,.31,.46,-.24,.22,.08,.27,.63,.41,-.03,.11,.53,-.05,-.16,.03,.07,.45,.33,.41,.29,.23,-.21,-.04,.53,.54,.03,.04,.06,.57,.04,-.06,.09,.02,.32,.03,.21,.25,-.02,.12,.35,-.13,-.07,.69,-.15,-.03,.62,.03,.76,.71,.01,-.23,.13,-.01,.03,.34,-.4,.66,.08,-.29,-.14,-.06,.11,.12,-.3,-.36,.07,.64,.68,.59,.48,-.03,-.03,.11,-.15,-.02,.24,-.23,.14,.44,.33,.09,-.02,.11,.21,-.22,-.68,-.22,.42,-.21,.48,.23,.26,.03,-.02,.2,.11,.34,-.4,.35,.17,-.36,.03,.39,-.52,.47,.17,-.2,-.07,.37,.04,.04,.11,.37,-.23,.21,.65,.31,-.17,.23,.62,.12,-.13,.55,.52,.27,.25,.17,-.01,.36,.74,-.12,.42,.55,-.05,-.02,.21,.15,-.05,.34,.63,.03,.17,-.11,.08,.5,-.02,.34,.47,-.09,-.13,.47,.31,.56,.58,.14,.32,.5,.54,.41,-.17,-.07,.62,-.01,.57,.22,.62,.36,.02,-.04,.63,.31,.55,.48,.22,-.21,.38,.53,.25,-.12,.41,.06,.49,.07,.54,.31,.56,.62,0,.4,-.14,-.12,.34,.46,-.35,.12,.43,.42,.43,.13,.16,.37,.46,.59,.63,.19,-.1,-.06,.28,-.09,.52,-.09,.01,.64,.14,.45,.32,.43,.57,.46,-.17,.12,.31,.24,.28,.43,-.08,.01,.61,.25,.28,.54,.07,.63,-.04,.68,-.26,.23,.08,-.29,-.04,.11,-.04,.31,.42,.15,.3,.14,.16,-.04,-.2,.55,.63,.55,.64,.69,.03,.14,-.23,.05,.09,.06,.15,.65,.3,.72,.19,.27,-.02,-.1,.07,-.01,.36,-.32,-.03,.61,.53,.51,.53,-.25,.29,.22,.39,.26,-.44,.47,.35,-.42,.59,-.17,.37,-.17,.41,.49,-.04,.77,-.04,.04,.54,-.02,-.03,.58,.21,-.2,.06,-.09,.28,.02,.03,.59,.53,.41,-.39,.66,.53,.54,.64,.7,.63,-.02,-.04,.17,.73,-.08,-.07,.03,-.02,-.01,-.12,.59,.39,.14,0,.72,.21,0,.42,.07,.53,.38,.23,-.2,.14,.03,-.01,.05,-.02,.3,.48,.25,-.37,.41,.09,.62,-.02,.1,-.19,.01,.43,-.24,.38,.48,.53,.54,-.03,.33,.32,.67,-.38,.14,-.14,.5,-.66,-.08,-.07,-.39,-.01,-.03,-.01,.09,-.21,.04,.42,.39,-.07,.72,.54,-.06,.28,-.44,-.4,-.33,-.01,.62,.6,.7,.82,0,.27,.54,.42,.33,.49,.51,.7,.58,.4,.54,.27,.26,-.09,.31,.61,.5,-.11,-.08,.17,.1,.74,.22,.24,-.08,.51,.52,.72,.39,.53,.65,.48,.05,.35,-.05,-.25,.45,-.14,.1,-.14,.58,.57,.54,.48,-.04,.54,.05,.4,-.02,-.04,.15,.17,-.02,-.08,.47,-.41,-.05,-.4,.58,-.05,.68,-.43,-.34,.29,.09,-.22,.03,.63,-.12,-.08,.24,-.01,.04,.64,-.48,-.36,-.44,0,.67,-.08,-.32,.48,.24,.11,-.32,.65,.26,.71,-.03,.65,-.12,.18,.13,.06,.32,.17,.45,-.11,-.69,-.1,.02,.53,.55,.7,.31,-.08,.05,.79,.13,.22,-.01,-.06,-.11,.7,.48,-.1,.34,.64,.35,.02,-.06,.49,.7,-.17,-.19,.44,.31,.33,.06,-.15,.2,.53,.22,.1,.56,-.42,0,.66,.12,0,.5,.09,.02,0,.61,-.39,.49,-.12,0,-.18,-.07,.31,.36,-.07,-.26,.01,.17,.58,.66,.29,.05,.33,.42,.71,.65,.63,-.01,-.12,.31,.7,-.07,.36,-.06,-.09,.06,.66,.77,-.4,.6,-.17,.01,.47,.27,.16,-.01,-.13,-.28,-.14,.2,.19,.73,.52,.5,.54,.22,-.04,.3,-.1,.12,-.19,.01,.07,.56,.72,-.05,-.23,-.61,.12,.44,.27,.49,-.07,.7,.23,-.13,.63,-.63,.75,.55,.66,.07,.65,-.02,.5,.56,-.03,.6,.31,.71,.14,.63,.71,.45,.1,.65,.43,.26,.1,.7,.76,.66,.64,.66,-.43,.53,.37,-.08,-.38,.72,-.01,.54,-.66,.05,.53,.35,.69,.64,-.1,.01,.05,-.27,.53,0,.65,.24,.57,.07,-.17,.08,-.09,.1,.04,.4,-.16,-.12,.69,-.01,.13,.4];export{a as rvalData};
