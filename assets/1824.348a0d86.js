const a=[-.31,.3,.66,-.05,.67,.28,.29,.03,.39,.02,.6,.07,-.05,-.66,.67,-.09,.2,-.01,-.21,-.05,-.03,-.2,.08,.4,.6,.74,-.13,.35,.35,-.09,.51,-.05,.79,.01,.36,.18,.69,.47,.28,.66,-.02,.69,.62,-.13,.05,.35,.03,.18,.09,.19,.08,.01,.23,.66,.57,.47,.59,.15,.11,.66,.45,.74,.68,-.11,.28,-.22,.76,.48,-.06,-.19,-.05,.35,.36,-.23,.59,.05,-.02,.37,.34,.1,-.41,.58,-.12,.67,-.08,-.07,.7,.15,-.63,.52,.18,.09,.33,-.65,.11,.18,-.67,-.16,-.04,.43,-.01,.72,.54,-.07,.6,.19,-.09,-.03,.88,.53,0,.3,.03,-.58,.13,.61,.08,-.2,.07,.57,-.16,-.13,.29,-.06,.1,.51,.53,-.1,-.26,.7,.05,-.14,-.12,.1,.31,-.01,.15,.24,-.16,-.13,.76,0,.56,.7,.06,-.06,.02,.04,.74,-.14,.73,-.01,-.05,.03,.03,.18,-.08,.07,-.19,.6,.04,.62,-.01,.2,.3,.26,.5,-.18,.16,.71,.08,-.07,-.06,-.24,.65,-.04,.06,-.03,.19,.71,.02,.14,-.04,.54,.6,.01,.18,.14,-.01,-.16,-.1,.18,.08,.67,.73,.76,.69,.22,.02,-.12,.07,.67,.7,.06,-.33,.72,-.01,.3,.48,-.13,-.11,.56,-.02,.61,.14,.3,-.01,.07,-.08,-.2,.55,.44,.44,.75,.43,.71,.01,-.09,.44,.19,-.01,-.04,.49,.61,.05,.12,.47,.1,-.05,0,.2,.54,.04,-.02,.19,-.18,.11,.16,.09,-.15,.03,-.06,.53,.3,.73,0,.16,.4,.05,.49,.12,.03,.46,.74,.02,.56,-.11,.68,.13,.43,.04,-.38,.69,.59,.51,-.08,.06,.27,.69,.08,.23,-.22,.27,-.49,.38,.77,-.07,.68,.09,.05,.07,.3,.85,-.13,.17,.62,.25,-.24,.04,.27,.03,.69,-.05,-.33,.19,.32,.23,.54,.12,.2,.55,-.06,-.11,.01,.33,.28,.03,.09,.58,.2,.63,.06,.51,.76,-.1,.34,.87,-.31,.23,.36,-.5,.48,.4,.05,-.18,-.01,-.18,.54,-.12,.04,.46,.59,-.13,-.05,.68,.74,.06,.27,.58,.23,.77,-.26,.26,.36,-.57,.33,.31,0,.67,.53,.35,.06,.3,-.05,.13,-.59,.1,.7,.32,.05,.2,-.21,.27,.15,.27,.22,.05,.69,-.06,.23,.14,.15,.09,.07,.08,.49,-.14,.07,.81,.84,.71,-.17,.15,0,-.03,.71,-.29,-.24,-.3,.08,-.11,.25,.67,.5,.2,.11,.48,.69,.62,.53,.57,-.55,-.16,.69,.22,.03,.69,.7,.23,-.29,.16,.69,-.08,-.1,.13,.74,.78,.06,.22,-.19,-.01,.1,.52,.18,0,.56,-.3,.85,.76,.69,.7,.57,.56,-.07,.07,.53,.73,.84,-.06,-.41,.43,.37,-.76,.21,-.09,.06,0,.72,.12,.4,.57,.84,-.57,.28,-.01,.32,-.4,-.11,-.49,.66,.03,.7,.54,0,.21,.89,.67,.1,.75,-.19,.74,.59,.6,.35,.01,.25,.43,-.32,.45,.54,.15,.09,-.08,-.24,.69,.73,-.12,-.19,.54,.01,.24,-.28,.64,.58,.57,-.03,.17,.89,.79,.3,.75,.15,.59,.1,.1,-.12,.08,.25,.26,.65,-.07,.72,.33,-.09,.37,.06,.34,.22,.07,.8,.24,-.1,-.11,-.12,.08,.16,.32,.54,-.17,.21,.05,.19,-.18,.07,.12,-.13,.17,.11,.54,.02,-.11,.71,.73,.55,.5,-.14,-.34,-.1,-.37,-.06,.45,-.1,.18,-.04,-.22,-.27,-.12,-.02,.14,-.14,.57,.61,.03,-.29,.61,.69,-.17,-.2,.21,.23,.08,.21,.65,.32,.55,.57,.74,.48,-.17,.68,-.29,.13,.04,.67,-.03,-.62,.72,.59,.36,.25,.55,.62,.63,.23,.43,-.14,.18,.1,.09,-.05,.1,.68,-.03,.16,-.13,-.1,.73,-.16,-.13,.14,0,.01,.48,-.04,.22,-.08,.09,.14,.71,-.28,-.19,-.42,-.19,.19,.45,.44,.89,.01,-.04,-.01,.17,.73,-.21,.35,.16,.74,-.19,.67,.16,.54,-.04,-.69,.18,.78,.9,.18,.32,-.17,-.23,-.03,.7,.64,.71,.18,.27,.12,.05,.28,.62,.57,.48,.12,-.08,-.12,.46,-.15,.65,.62,-.31,.15,-.08,-.11,.59,.78,.11,.31,-.38,.68,.88,-.07,-.16,-.25,0,-.21,-.09,-.18,.33,.26,.54,-.46,.63,.09,.46,.54,.11,-.06,-.15,.57,.06,-.07,.79,-.02,.12,.33,-.08,-.19,.13,.21,-.26,-.07,.12,.74,.69,-.14,.64,.54,-.16,-.17,-.17,.51,-.44,.26,.84,.07,.46,.13,.68,-.15,.4,-.04,.63,.65,-.09,.02,-.15,-.34,.4,.68,.04,.34,-.05,.25,-.08,.29,.51,.23,.15,.16,.75,-.03,.27,-.23,.87,.2,.21,.51,.66,-.14,-.12,.2,-.12,.15,.64,.09,.24,-.31,.13,.03,.73,.21,.68,.19,.01,.64,.6,.69,.48,.28,.34,.01,-.19,.17,.67,.41,.83,-.22,.74,.53,-.25,.52,-.03,.23,-.46,.72,.57,.51,.41,-.14,.16,-.01,.08,-.12,.83,-.12,.54,.05,-.66,-.05,.06,.75,.07,.2,-.07,.57,-.1,.71,.01,.32,-.01,-.05,.03,.7,.09,-.06,-.03,0,-.15,.24,.23,-.1,.75,.71,-.13,.03,-.01,.6,.04,-.02,.44,.07,-.06,-.05,.5,-.08,.14,.43,.19,.05,.29,.31,.67,.72,.11,-.29,-.06,-.1,-.3,.27,.11,-.09,-.12,.18,-.08,.23,.06,.15,.21,.21,-.07,.15,-.11,.65,.24,.69,.57,-.06,.21,.35,.75,-.17,.71,-.56,-.51,.45,.62,-.08,-.45,-.29,.48,.64,.64,-.1,.13,-.03,.03,.74,.04,.22,-.02,.1,-.11,.02,-.04,-.31,.6,.43,.07,.13,-.05,-.1,.05,-.11,-.3,.34,.75,.64,.01,.72,.57,.14,.15,.61,.6,.71,.56,-.71,.3,-.1,.47,.69,.01,.32,.06,.57,.06,.34,.02,.72,.05,-.02,.03,.11,.27,.17,.14,.05,.73,.13,.65,.45,.86,.12,-.17,.09,.63,.01,-.01,.2,-.57,-.16,-.22,-.05,.47,-.61,.67,-.08,-.04,.29,.17,.85,.72,-.04,-.24,.08,.34,.05,-.23,.15,.15,.27,.44,-.15,.25,-.18,-.32,.13,-.01,-.01,.09,.16,-.01,0,.04,.02,.1,.14,-.08,.18,-.19,.02,-.13,.55,.39,-.05,.14,-.19,.42,-.24,-.1,.09,.6,.26,.39,.53,.08,.19,.82,-.06,.16,-.08,.03,-.12,.38,.38,.07,.53,.7,-.01,.36,-.06,.12,.74,-.13,-.21,-.06,.21,.05,-.25,-.18,.45,.17,.61,.25,.32,.33,-.11,-.22,.11,.12,.85,-.08,.05,-.01,.55,-.01,.45,-.15,.42,.57,-.18,.36,.16,.4,.64,.11,.6,.63,.1,.5,.67,.06,.04,.02,-.03,.36,-.03,.02,-.27,-.18,.65,-.04,-.25,.74,-.01,.47,.61,-.08,.31,.85,.81,-.09,-.26,-.28,.25,.7,.43,.55,.18,.8,.09,-.19,.26,.32,-.03,-.14,-.1,-.23,.56,.27,.75,-.16,.56,-.17,.09,-.14,.11,-.14,.42,.1,-.05,-.05,.83,.72,-.32,.24,.62,.89,-.08,.1,-.08,.73,.2,-.06,.29,.71,.06,.69,.4,.7,-.38,.06,-.15,.21,.68,.12,.22,.04,.2,.17,.01,.48,.37,-.1,.09,.85,.38,.73,.71,.6,.53,-.01,.22,-.67,.37,.6,.1,.65,.16,.43,-.14,.01,-.07,.2,-.28,-.32,.04,.71,.67,-.12,.58,.05,0,-.23,.22,.8,.14,-.19,.71,.71,-.32,.09,.71,.02,.76,.36,.72,.05,.57,.38,.01,.74,.11,-.35,-.25,.57,.21,-.12,.68,.34,.22,.06,.52,.58,.04,.09,.21,-.07,-.16,.25,.05,-.27,-.38,.75,.21,.58,.62,.47,.05,-.06,.04,.68,.68,.7,-.05,.07,-.21,-.04,.24,.77,.16,.78,-.14,-.09,.14,.14,-.03,.45,-.37,.01,.76,-.54,.76,-.05,-.06,-.07,.26,-.21,-.19,.24,.05,.63,-.12,.75,.31,.26,-.21,.61,-.11,-.06,-.07,.59,.18,.68,.07,.21,.02,.72,.06,-.03,.09,-.35,.68,.69,.56,-.19,.15,.16,.71,.42,.45,.86,.58,-.11,.15,.14,.53,.23,-.06,.71,-.11,.28,.75,-.63,.42,.11,.33,.19,.68,.68,-.03,.33,.18,-.32,-.38,.16,-.03,.5,.66,.64,-.19,-.13,.82,-.16,.39,-.06,.18,-.15,-.01,-.11,.8,.37,-.3,-.28,.47,.37,.05,.03,.67,-.08,-.18,.38,.37,.64,.63,.07,.46,.12,.42,.26,.29,.68,.61,-.1,.21,-.19,.32,.72,.34,.14,-.1,-.25,.39,.4,.45,.28,.13,-.06,-.18,.34,-.2,-.13,-.01,.12,.09,.18,.33,.12,-.1,.61,.75,.27,.74,.34,.47,.69,.39,.02,.08,.67,-.24,.14,-.12,.02,.67,.67,.48,.26,.32,-.5,-.09,.81,.71,.26,.24,-.07,.63,.03,-.05,.5,-.05,.64,.16,.04,.21,-.13,.07,.63,-.22,-.11,.68,-.13,.11,.71,.21,.61,.72,.01,-.07,.39,.09,.27,.5,-.15,.65,.06,.17,-.15,-.13,.08,.63,-.39,-.12,.17,.55,.66,.75,.85,.01,.11,.06,-.04,.06,.41,-.1,.54,.74,.32,-.14,.25,.65,.31,-.13,-.25,-.09,.69,-.08,.77,.74,.55,-.1,.32,.51,-.17,.45,.1,.69,.45,.1,.01,.52,-.09,.69,.46,-.03,-.01,.38,-.05,.04,.17,.53,.06,.23,.6,.35,-.31,.63,.72,.32,-.02,.53,.49,.1,-.02,.38,-.09,.16,.63,-.14,.51,.58,.11,.24,.37,.3,-.05,.25,.75,-.02,.1,-.11,.01,.73,.23,.37,.66,-.18,.14,.84,.37,.74,.84,.23,.6,.69,.79,.41,-.1,.07,.48,-.03,.51,.14,.71,.57,.01,.17,.71,.33,.73,.34,.07,-.22,.52,.29,.47,.08,.45,.14,.51,.13,.77,.59,.51,.72,.1,.7,.1,-.27,.59,.5,-.26,.05,.75,.54,.53,.21,.47,.12,.71,.63,.67,.28,-.07,.2,0,.06,.72,.06,.07,.68,-.04,.37,.42,.45,.66,.69,-.27,-.03,.55,.32,.34,.67,-.14,-.18,.53,.53,.37,.61,.36,.79,.14,.75,-.41,.63,-.2,-.02,.01,.14,-.09,.31,.59,.27,.68,.1,.42,-.05,-.03,.69,.84,.69,.84,.7,.04,.01,-.09,.25,.5,-.12,-.11,.73,.47,.6,.2,.46,0,-.14,.31,.12,.57,-.01,.09,.66,.7,.8,.78,-.1,.56,.52,.61,.45,-.37,.64,.11,-.21,.67,-.31,.62,-.22,.65,.77,.14,.7,-.24,.12,.66,.19,.12,.35,.31,-.07,-.15,.03,.53,-.01,-.04,.74,.78,.47,0,.65,.54,.6,.61,.73,.76,0,-.07,.12,.74,.05,-.4,-.08,.11,.17,-.01,.75,.57,.29,-.13,.58,.34,-.07,.52,.17,.62,.6,.4,-.23,.06,-.13,-.11,.41,.25,.62,.43,.72,-.05,.35,.24,.84,.07,.22,-.22,-.01,.72,-.15,.63,.43,.77,.74,.09,.45,.74,.76,-.18,.11,-.15,.53,-.35,-.18,.01,-.66,-.07,-.28,-.06,.12,-.24,.15,.63,.62,-.11,.58,.71,-.25,.55,-.12,-.26,-.48,-.14,.77,.73,.73,.42,-.03,.67,.43,.66,.5,.43,.11,.77,.77,.66,.43,.46,.33,.03,.47,.62,.7,.07,-.09,.04,.24,.7,.56,.6,.15,.68,.76,.66,.61,.69,.68,.68,-.12,.68,-.12,-.31,.79,.26,-.1,.12,1,.77,.8,.58,.16,.57,.42,.62,.16,-.08,.15,-.02,.04,.02,.68,-.35,.34,.15,.84,-.14,.47,.03,-.1,.01,-.06,-.25,-.1,.64,-.07,.23,.56,.16,.24,.55,-.02,-.35,-.07,-.02,.79,-.12,-.1,.69,.6,.49,.08,.59,.14,.74,0,.71,.2,.45,.38,0,.36,.24,.34,-.09,-.63,-.31,-.15,.69,.74,.67,.67,-.23,-.01,.64,.41,.26,.13,-.24,.13,.72,.6,-.15,.67,.68,.25,.33,.22,.69,.66,-.16,-.08,.44,.43,.59,.03,-.2,.23,.28,-.08,-.01,.7,-.33,.03,.64,.31,-.14,.66,.05,.11,-.08,.72,-.34,.5,.09,-.03,-.18,.05,.61,.39,-.05,.03,.21,-.02,.71,.76,.52,.1,.56,.64,.69,.6,.85,-.05,-.03,.4,.63,.2,.32,-.03,-.25,.08,.65,.75,-.13,.54,.09,.57,.67,.13,.22,.05,.07,-.46,-.04,.04,-.07,.61,.7,.34,.76,.42,.04,.38,.33,.32,.22,-.02,.29,.69,.68,.27,-.13,-.59,.42,.69,.4,.66,.28,.73,.38,.14,.84,-.59,.65,.74,.75,.17,.62,.26,.7,.26,.11,.42,.57,.71,.41,.71,.68,.6,.12,.7,.36,.37,-.15,.71,.68,.63,.65,.63,-.12,.73,.65,.41,-.6,.65,.11,.73,-.17,-.04,.71,.49,.63,.7,-.19,0,.09,-.09,.7,.17,.75,.52,.64,-.1,-.18,.14,.06,.06,.03,.48,.19,.23,.75,.12,0,.46];export{a as rvalData};
