const a=[-.36,.3,.63,.04,.66,.09,.25,.06,.31,.04,.35,.02,-.02,-.6,.43,-.1,.05,-.04,-.16,-.02,-.08,-.37,.12,.2,.49,.73,-.33,.19,.32,-.28,.6,-.3,.7,.05,.15,.1,.63,.37,.35,.62,.01,.72,.43,-.08,.17,.26,-.03,-.09,-.1,.31,.05,-.03,.19,.67,.58,.22,.35,.12,.26,.64,.5,.74,.74,-.09,.17,-.31,.76,.35,-.06,-.13,-.06,.45,.46,-.22,.65,-.01,-.16,.43,.37,-.18,-.46,.55,-.16,.71,-.15,-.21,.65,.02,-.66,.51,.23,.08,.28,-.57,-.01,.17,-.67,-.23,-.07,.48,-.02,.76,.63,-.06,.68,.08,-.1,-.03,.73,.68,-.11,.48,.07,-.62,-.02,.6,.1,-.32,-.14,.49,-.05,-.21,.2,-.13,.04,.57,.65,-.16,-.3,.66,.04,-.25,-.17,.28,.18,-.08,.22,.31,-.31,-.15,.81,-.03,.65,.63,-.03,-.15,0,.06,.74,-.05,.75,-.04,.07,0,.03,.22,-.08,-.05,-.23,.37,.09,.73,.02,.34,.23,.39,.45,-.38,.16,.69,-.03,-.3,.04,-.14,.61,-.21,0,-.17,.36,.75,.02,.11,.1,.54,.72,.09,.06,.15,.15,-.28,-.1,.17,.16,.63,.75,.73,.77,.19,0,-.22,.08,.6,.67,-.03,-.34,.65,-.09,.42,.5,.09,-.01,.45,-.14,.56,.11,.37,.05,.08,-.25,-.24,.64,.61,.46,.7,.62,.68,.09,-.26,.44,.25,-.13,.05,.44,.61,.1,.01,.36,-.08,.05,-.06,.4,.4,.02,.1,.16,-.16,.02,.24,.11,.02,.13,-.16,.57,.33,.77,.1,.18,.35,.05,.5,.02,.13,.4,.79,.09,.66,-.18,.7,.09,.41,-.04,-.36,.66,.61,.62,.08,-.09,.36,.64,-.11,.33,-.21,.19,-.43,.44,.63,-.15,.59,.2,-.11,-.04,.45,.73,-.13,.14,.45,.09,-.26,.02,.38,-.03,.65,-.23,-.28,.11,.35,.16,.71,.25,.07,.62,.03,-.14,-.07,.34,.38,.19,.19,.58,.4,.69,-.05,.33,.78,.11,.47,.75,-.14,.1,.49,-.53,.54,.38,.06,-.34,-.15,-.32,.54,-.21,-.18,.53,.44,-.23,-.16,.61,.7,.12,.42,.37,.39,.81,-.1,.14,.45,-.53,.25,.42,-.02,.67,.55,.28,.09,.43,-.06,.08,-.52,.14,.68,.36,.06,.03,-.27,.22,.04,.37,.32,.09,.67,-.05,.33,.05,.16,-.02,.06,-.01,.41,-.09,.1,.8,.8,.68,-.02,.15,-.03,-.09,.65,-.46,-.24,-.12,.05,-.16,.3,.68,.43,.3,.18,.3,.72,.73,.67,.59,-.46,-.02,.69,.2,.01,.77,.54,.34,-.32,.02,.66,-.14,-.02,.06,.67,.68,.15,.3,-.14,0,0,.45,.12,.14,.57,-.41,.78,.7,.63,.76,.61,.65,-.21,.21,.5,.66,.75,-.14,-.54,.34,.48,-.78,.22,-.11,.13,-.18,.69,.15,.39,.61,.75,-.61,.42,.08,.24,-.3,-.07,-.5,.65,.01,.66,.41,-.09,.35,.7,.52,.01,.72,-.23,.78,.48,.67,.27,.18,.27,.43,-.18,.38,.52,.01,0,-.17,-.16,.65,.7,.11,-.22,.51,.11,.39,-.1,.67,.51,.69,-.03,.12,.71,.7,.42,.77,.22,.69,.21,.24,-.13,.11,.24,.39,.63,-.1,.68,.2,-.02,.51,-.05,.26,.16,.11,.66,.34,.1,-.14,.06,-.04,.06,.41,.47,-.08,.14,-.03,.29,-.08,-.05,-.15,-.17,.18,-.01,.58,.11,-.16,.68,.67,.59,.52,-.13,-.34,-.06,-.31,-.01,.57,-.18,.3,.02,-.21,-.26,.06,-.12,.2,-.11,.65,.55,-.03,-.25,.69,.65,-.1,-.32,.33,.19,-.19,.17,.74,.31,.64,.43,.67,.69,-.24,.6,-.26,.02,.06,.75,.03,-.64,.62,.59,.38,.12,.51,.66,.62,.26,.42,-.31,.25,-.17,.08,.05,.11,.57,.1,.18,-.09,-.03,.68,-.16,-.14,.02,.07,-.07,.37,-.02,.29,-.15,.07,.29,.76,-.18,-.09,-.52,-.31,.32,.45,.47,.71,.13,-.05,-.21,.19,.69,-.39,.15,.05,.76,-.07,.71,.19,.63,-.12,-.73,.18,.7,.7,.06,.29,-.15,-.08,-.04,.65,.48,.73,.24,.23,.12,-.08,.35,.57,.6,.39,.06,-.17,-.28,.51,-.03,.77,.66,-.28,.13,-.05,-.05,.53,.69,.09,.27,-.52,.71,.75,-.09,-.15,-.23,.08,-.09,-.09,-.22,.25,.26,.54,-.52,.71,.06,.36,.53,.14,-.05,-.1,.39,-.16,-.3,.74,.1,.21,.13,-.01,-.17,.04,.17,-.28,-.03,.03,.72,.6,-.1,.6,.43,-.23,-.37,-.24,.58,-.59,.31,.81,.01,.48,.23,.61,-.17,.19,-.06,.44,.57,-.32,-.09,-.19,-.38,.36,.6,.1,.46,-.15,.09,-.14,.26,.6,.07,.12,.1,.64,-.09,.23,-.35,.69,.17,.19,.43,.79,-.11,-.27,.07,.06,.28,.65,-.05,.36,-.45,.29,-.02,.73,.3,.69,-.01,-.06,.74,.59,.75,.62,.36,.23,-.13,-.37,.18,.71,.26,.77,-.34,.7,.65,-.22,.58,-.08,.27,-.37,.73,.48,.63,.25,-.14,.26,-.06,.03,-.02,.8,-.26,.64,.2,-.59,-.21,.1,.71,-.05,.06,.01,.61,-.13,.69,-.1,.32,-.12,-.1,.17,.66,.18,-.05,-.02,-.13,-.28,.26,.18,-.26,.65,.65,-.01,.13,-.25,.67,.02,-.24,.49,-.01,-.06,-.28,.46,-.13,-.03,.25,.27,.14,.26,.01,.65,.68,.13,-.35,-.02,.03,-.46,.1,.16,-.06,-.12,.12,-.07,.36,.1,.22,.18,.18,-.17,.01,-.25,.47,.18,.8,.56,-.04,.29,.35,.77,-.15,.79,-.45,-.51,.51,.69,-.08,-.46,-.28,.52,.6,.42,-.19,.06,-.03,-.1,.59,-.05,.32,.02,.16,-.12,-.1,-.11,-.11,.67,.45,.06,.22,.05,-.05,.07,-.19,-.34,.44,.77,.64,-.09,.66,.65,.19,.18,.59,.55,.7,.61,-.68,.42,-.14,.5,.73,-.1,.26,.1,.58,.17,.19,-.01,.68,-.01,-.05,-.01,.09,.29,.09,.13,.02,.77,.17,.69,.28,.71,.08,-.17,.08,.71,.01,.13,.15,-.6,-.13,-.09,-.06,.28,-.64,.66,-.14,.09,.37,.36,.72,.71,.01,-.4,.09,.17,.04,-.09,.04,.02,.32,.51,-.07,.34,-.11,-.29,.27,-.07,.03,.05,.22,-.02,-.02,.08,.07,.13,-.05,-.17,.13,-.15,-.02,-.15,.48,.3,-.05,.08,-.21,.3,-.2,-.05,.04,.64,.13,.4,.57,-.03,.3,.77,-.05,.04,-.05,.09,0,.24,.44,-.02,.54,.6,.01,.27,-.02,.17,.67,-.21,-.04,-.07,.35,.06,-.2,-.13,.34,.17,.46,.24,.16,.31,-.22,-.24,.01,.14,.71,-.11,-.08,-.05,.51,.21,.4,-.35,.29,.53,-.05,.39,.23,.39,.66,.07,.49,.6,.19,.53,.69,0,-.19,.02,-.05,.39,.04,.02,-.24,-.33,.61,-.05,-.08,.67,-.19,.47,.7,.02,.35,.81,.73,-.15,-.38,-.1,.19,.67,.42,.42,0,.72,.06,-.08,.37,.49,-.07,-.14,-.24,-.19,.49,.31,.72,-.17,.44,-.22,.05,-.22,.01,-.15,.38,.2,-.11,.04,.73,.67,-.31,.07,.63,.78,.04,-.03,-.09,.69,.05,-.06,.3,.77,-.06,.62,.38,.56,-.28,.15,-.2,.3,.66,.15,.33,-.05,.23,.02,-.11,.39,.38,-.11,.29,.7,.29,.69,.66,.71,.53,.18,.07,-.63,.49,.65,.06,.57,.07,.44,-.18,.13,-.08,.06,-.07,-.35,.02,.69,.6,-.07,.6,.09,-.09,-.33,.22,.8,-.05,-.26,.72,.81,-.34,-.17,.59,-.06,.76,.45,.79,.05,.57,.48,.1,.73,-.01,-.19,-.09,.56,.38,-.3,.72,.43,.25,-.04,.63,.5,-.06,-.02,.25,-.05,-.24,.34,.14,-.32,-.23,.78,.2,.6,.46,.42,.06,-.09,-.07,.6,.71,.69,-.13,-.04,-.09,-.12,.22,.67,.03,.8,-.1,-.03,.21,.03,-.13,.53,-.31,-.04,.74,-.62,.67,-.14,.04,.02,.29,-.33,-.34,.26,-.04,.65,-.16,.8,.09,.31,-.14,.47,-.28,.01,-.09,.67,.08,.46,.05,.11,-.09,.66,.11,-.08,.02,-.17,.63,.79,.63,-.03,.33,.1,.69,.43,.63,.71,.44,-.15,.1,.16,.39,.31,0,.7,-.14,.51,.69,-.62,.43,.14,.2,.25,.59,.64,-.02,.34,.16,-.3,-.28,.16,.19,.52,.75,.59,-.24,-.17,.79,-.09,.45,.02,.12,-.08,-.05,-.06,.79,.25,-.21,-.32,.35,.24,.09,-.02,.68,-.14,-.07,.52,.4,.62,.6,.22,.48,.4,.47,.25,.34,.64,.64,-.01,.03,-.17,.18,.65,.45,.15,-.17,-.37,.17,.33,.32,.41,-.07,-.16,-.13,.35,-.3,-.18,-.09,.02,-.09,.08,.22,.23,-.08,.67,.74,.22,.66,.4,.6,.64,.25,.14,-.06,.6,-.23,.24,-.13,-.08,.64,.6,.32,.09,.48,-.62,-.08,.83,.72,.18,.18,.04,.53,.15,-.12,.32,-.03,.31,.02,-.03,.19,-.23,-.01,.59,-.3,-.1,.6,-.15,.17,.76,.33,.65,.65,.03,-.17,.43,.06,.37,.44,-.11,.67,-.02,.13,-.1,-.09,.07,.52,-.4,-.14,.04,.47,.69,.65,.76,.14,-.02,.11,-.13,.19,.31,-.24,.57,.72,.4,-.03,.25,.55,.42,-.22,-.3,-.28,.68,-.2,.78,.66,.62,-.07,.25,.56,-.13,.46,.14,.58,.52,-.04,.06,.58,-.06,.65,.43,.18,.13,.39,-.02,.07,.02,.48,-.06,.13,.63,.44,-.33,.61,.67,.44,.11,.27,.45,.15,-.13,.5,0,.21,.69,-.12,.5,.38,.19,.31,.49,.28,-.07,.28,.79,-.18,.17,-.29,.05,.64,.4,.44,.7,-.24,.25,.75,.53,.68,.82,.34,.65,.79,.82,.41,.04,.21,.5,.02,.63,.02,.81,.66,-.06,.27,.78,.25,1,.5,.14,-.26,.58,.41,.55,.17,.57,.28,.35,.06,.76,.61,.46,.76,-.04,.54,.22,-.34,.69,.39,-.1,.09,.74,.56,.62,.21,.5,.09,.71,.61,.76,0,-.11,.33,.04,.19,.57,.21,-.02,.52,.02,.44,.46,.49,.68,.65,-.33,-.04,.56,.24,.46,.68,-.13,-.13,.52,.45,.5,.74,.47,.86,.06,.8,-.37,.64,-.19,.2,.02,.06,-.11,.46,.57,.26,.6,.11,.53,-.04,.17,.73,.67,.77,.67,.73,.12,-.1,-.06,.42,.44,-.01,-.04,.75,.61,.68,.15,.53,.1,-.12,.45,.15,.69,.15,.12,.6,.65,.83,.78,.08,.52,.62,.71,.57,-.31,.72,.14,-.18,.78,-.3,.69,-.12,.62,.71,.04,.78,-.21,.04,.41,.31,.15,.28,.36,.02,-.06,.19,.32,-.06,-.07,.75,.75,.33,.1,.74,.32,.43,.61,.68,.7,.01,-.13,.09,.71,0,-.41,-.16,.25,.28,.27,.68,.6,.22,-.16,.54,.5,-.27,.41,-.03,.71,.44,.23,-.25,-.03,-.12,-.1,.19,.3,.63,.55,.54,.07,.44,.4,.8,-.04,.07,-.11,-.01,.72,-.09,.61,.48,.73,.73,.03,.57,.57,.81,-.35,.13,-.24,.45,-.42,-.07,-.01,-.69,-.13,-.18,-.02,.12,-.21,.07,.68,.65,-.08,.57,.64,-.27,.58,-.17,-.41,-.62,-.21,.78,.65,.71,.44,-.11,.57,.45,.56,.65,.5,.08,.74,.76,.59,.56,.62,.41,-.12,.57,.71,.71,.18,-.21,.02,.1,.68,.31,.64,.01,.52,.68,.7,.6,.64,.63,.75,-.08,.7,-.06,-.26,.69,.29,-.06,.16,.73,.62,.79,.51,.28,.49,.47,.66,.15,.07,.09,.01,-.03,-.04,.46,-.19,.16,-.02,.78,-.12,.43,-.15,.05,.03,-.06,-.19,-.18,.62,-.12,.32,.44,.28,.23,.67,-.13,-.24,-.2,.04,.67,0,.11,.73,.6,.4,-.06,.65,.02,.72,0,.69,.2,.52,.48,-.1,.25,.22,.32,-.02,-.49,-.2,-.13,.75,.79,.67,.6,-.3,-.12,.68,.51,.32,.03,-.23,.09,.73,.58,-.01,.58,.75,.22,.35,.16,.65,.71,-.29,.08,.47,.6,.62,.01,-.35,.18,.15,0,-.13,.65,-.24,-.08,.63,.35,-.03,.67,.2,0,-.03,.75,-.44,.48,.19,-.05,-.21,.01,.6,.27,-.15,-.1,.27,-.02,.65,.71,.58,-.16,.58,.61,.65,.69,.78,.02,.08,.55,.7,.23,.17,.07,-.1,-.03,.66,.74,-.1,.48,-.03,.44,.58,.06,.27,.01,-.04,-.5,-.12,-.03,-.01,.66,.61,.41,.67,.53,.01,.52,.34,.06,.1,-.1,.19,.59,.59,.28,-.18,-.63,.44,.62,.26,.66,.36,.71,.44,.06,.69,-.63,.67,.76,.7,.07,.72,.19,.79,.35,.11,.53,.6,.64,.4,.67,.72,.52,-.14,.68,.2,.46,-.21,.65,.72,.62,.68,.66,0,.75,.56,.34,-.51,.66,-.02,.68,-.23,.01,.76,.44,.68,.75,-.24,.01,-.07,.06,.61,.35,.62,.36,.69,-.01,-.35,.02,-.03,-.12,-.05,.42,.15,.28,.67,.03,.07,.63];export{a as rvalData};
