const a=[-.23,.24,.66,-.07,.57,.25,.22,.2,.38,.11,.65,.05,-.08,-.61,.67,-.09,.19,-.04,-.29,.05,-.01,-.36,.12,.43,.6,.65,-.31,.16,.33,-.26,.56,-.15,.75,.02,.33,.2,.66,.49,.17,.53,.06,.6,.52,-.11,-.02,.35,-.05,.15,.04,.21,.13,-.02,.18,.65,.58,.52,.54,.17,-.02,.65,.58,.67,.66,-.13,.25,-.28,.71,.5,-.04,-.09,0,.33,.5,-.18,.54,.08,-.15,.51,.33,.17,-.37,.5,-.09,.58,-.15,-.13,.69,.17,-.54,.51,.2,.07,.43,-.71,.17,.13,-.61,-.16,-.06,.51,-.17,.73,.47,-.13,.54,.06,-.31,-.19,.86,.54,-.03,.35,-.03,-.57,.09,.47,.17,-.3,.06,.6,-.18,-.19,.32,-.16,.09,.45,.54,-.09,-.26,.65,.22,-.02,-.08,.19,.27,-.18,.21,.2,-.23,-.06,.68,.01,.5,.69,.09,-.01,.07,.03,.83,-.07,.73,.27,.04,.11,.19,.2,-.13,.06,-.12,.6,.08,.57,.07,.29,.43,.41,.45,-.19,.19,.68,.06,-.12,.15,-.12,.57,-.03,.08,-.22,.32,.68,0,.18,.06,.39,.64,.01,.18,.14,.12,-.14,-.11,.42,.15,.67,.78,.81,.65,.32,.04,-.14,.21,.76,.64,.1,-.32,.68,0,.33,.54,-.15,.15,.52,.03,.61,.18,.32,-.05,.29,-.08,-.29,.64,.39,.39,.74,.54,.67,.24,-.14,.46,.02,-.05,-.1,.43,.6,.02,.12,.46,.13,-.05,.08,.31,.49,.15,.05,.39,.13,.19,.12,.13,-.08,.11,-.22,.56,.29,.7,.01,.12,.56,0,.37,.07,-.01,.66,.68,.11,.5,-.11,.59,.24,.41,-.01,-.37,.66,.58,.46,-.09,-.06,.4,.71,.03,.3,-.3,.38,-.49,.41,.8,-.17,.63,.11,-.03,.23,.32,.74,.12,.2,.54,.41,-.18,.13,.45,.15,.58,-.12,-.23,.18,.4,.22,.57,.11,.35,.51,-.09,-.24,.04,.32,.44,.06,.1,.54,.24,.53,.03,.45,.71,-.05,.34,.79,-.18,.23,.36,-.47,.55,.47,-.05,-.45,-.08,-.17,.65,.07,0,.59,.47,-.19,-.14,.63,.72,.04,.37,.46,.26,.78,-.15,.27,.39,-.46,.43,.34,-.02,.65,.43,.36,.13,.31,-.18,.09,-.51,.02,.68,.32,0,.06,-.29,.23,.13,.46,.25,0,.58,-.04,.24,.1,.14,.1,.09,.04,.5,-.04,0,.83,.8,.73,-.15,.13,.18,.14,.6,-.48,-.2,-.18,.08,-.16,.22,.68,.47,.25,.16,.41,.69,.62,.58,.55,-.49,-.17,.73,.21,-.02,.64,.56,.3,-.28,.18,.66,-.19,-.1,.08,.66,.68,-.03,.29,-.17,.13,.09,.55,.23,.12,.49,-.05,.77,.66,.73,.64,.52,.53,-.08,.08,.53,.64,.78,-.07,-.45,.58,.4,-.74,.22,-.12,.15,-.09,.67,.19,.52,.54,.82,-.51,.41,.09,.39,-.36,-.03,-.44,.65,-.14,.64,.55,0,.24,.87,.77,.29,.78,-.3,.71,.58,.55,.46,.06,.26,.44,-.23,.44,.5,.15,.03,-.04,-.25,.64,.67,-.14,-.15,.68,.11,.36,-.12,.65,.49,.52,-.12,.05,.96,.66,.43,.74,.13,.55,.2,.11,-.02,.21,.33,.38,.54,-.09,.66,.37,-.05,.32,.04,.2,.21,.08,.79,.39,-.14,-.16,.02,.08,.18,.35,.5,-.1,.18,.07,.18,-.19,-.09,.06,-.19,.26,-.04,.46,-.09,-.2,.66,.69,.53,.43,-.17,-.34,-.07,-.32,-.07,.4,-.21,.09,.21,-.19,-.21,-.1,-.05,.25,-.09,.57,.55,.19,-.25,.51,.61,-.19,-.16,.23,.13,.04,.25,.62,.32,.61,.52,.67,.48,-.24,.63,-.2,.15,.01,.65,.2,-.62,.84,.51,.4,.41,.7,.56,.56,.32,.34,-.31,.23,-.01,.12,-.19,.07,.6,.04,.42,-.19,-.09,.65,.14,-.12,.12,.08,-.04,.46,0,.24,-.06,.08,.18,.68,.03,-.14,-.35,-.21,.32,.54,.43,.88,.11,.12,-.14,.14,.74,-.36,.16,.19,.67,-.14,.57,.14,.58,-.08,-.7,.18,.72,.87,.26,.29,-.1,-.27,0,.59,.54,.64,.2,.22,.21,.02,.27,.59,.56,.4,.13,-.17,-.29,.44,-.1,.68,.56,-.31,.2,-.08,-.08,.42,.67,.19,.28,-.45,.6,.83,.13,-.12,-.19,-.06,-.23,-.06,-.07,.37,.21,.46,-.35,.54,.3,.47,.47,.23,-.1,-.19,.42,.08,-.28,.83,.04,.17,.5,-.06,-.17,.12,.19,-.18,-.12,.31,.71,.66,-.02,.63,.42,-.18,-.18,-.17,.48,-.43,.4,.82,.08,.52,.2,.63,-.08,.2,-.05,.57,.72,-.14,-.16,-.15,-.27,.34,.63,.04,.42,-.04,.21,-.15,.19,.46,.33,.14,.06,.76,-.1,.24,-.29,.85,.28,.12,.52,.61,-.18,-.07,.1,-.06,.17,.59,.07,.25,-.33,.32,.22,.61,.23,.67,.14,.06,.59,.6,.66,.56,.46,.39,-.09,-.33,.14,.63,.4,.73,-.21,.68,.5,-.18,.49,.07,.18,-.52,.72,.58,.57,.56,-.22,.15,-.04,.11,-.07,.78,-.19,.53,.16,-.67,-.11,0,.64,-.01,.15,.19,.53,-.11,.65,-.05,.35,-.15,-.01,.04,.63,.09,-.07,-.04,-.09,-.18,.36,.2,-.15,.72,.68,-.14,.11,-.04,.6,-.12,-.22,.56,.03,-.03,-.15,.43,-.07,.09,.31,.19,.06,.45,.23,.69,.64,.12,-.28,-.05,-.02,-.38,.25,.04,.07,-.11,.28,-.17,.26,.11,.15,.12,.25,-.05,.16,-.28,.78,.2,.66,.52,.01,.33,.43,.73,.08,.66,-.52,-.47,.52,.57,-.14,-.33,-.31,.44,.67,.72,-.22,.06,-.04,.01,.74,0,.28,.04,.11,-.06,-.16,.07,-.24,.56,.46,.1,.14,.04,-.03,.12,-.16,-.26,.51,.72,.55,.08,.62,.51,.11,.41,.53,.54,.62,.48,-.68,.44,-.16,.47,.59,-.01,.3,.13,.47,.22,.17,.21,.76,.13,-.02,.17,.1,.22,.16,.14,-.01,.65,-.06,.57,.53,.84,.16,.02,.06,.6,.04,-.04,.32,-.49,-.18,-.33,-.09,.48,-.6,.54,.05,.07,.2,.33,1,.65,.12,-.4,.29,.52,.19,-.19,.15,.15,.29,.45,.11,.3,.1,-.23,.19,-.02,.03,.09,.2,-.07,-.05,.05,-.02,.16,.08,-.1,.11,-.19,.08,-.04,.56,.35,-.16,.18,-.22,.56,-.22,-.1,0,.49,.09,.33,.54,.01,.18,.82,-.04,.18,-.11,.07,-.09,.35,.4,.01,.63,.66,.18,.35,-.01,.28,.65,-.3,-.25,.01,.25,.08,-.2,-.19,.46,.19,.72,.24,.4,.27,.03,-.29,.07,.14,.84,-.18,.05,.16,.56,.1,.3,-.16,.47,.56,-.18,.32,.23,.46,.59,.08,.66,.64,.14,.55,.62,.11,-.03,0,-.13,.48,-.13,-.02,-.23,-.33,.65,-.01,-.14,.64,-.07,.47,.59,.18,.28,.83,.76,.05,-.34,-.19,.26,.63,.42,.55,.13,.8,.12,-.22,.37,.44,-.07,-.04,-.19,-.23,.54,.29,.69,-.13,.5,-.17,.12,-.18,.08,-.03,.35,.09,-.13,-.06,.77,.63,-.28,.17,.51,.83,.01,.12,0,.71,.19,-.05,.4,.66,.06,.72,.21,.69,-.2,.1,-.12,.28,.64,.11,.22,.05,.25,.15,.05,.54,.54,-.12,.25,.83,.39,.63,.59,.62,.52,-.02,.24,-.63,.37,.58,.02,.59,.08,.37,-.16,.13,-.02,.18,-.19,-.34,.15,.59,.63,-.14,.55,-.09,.25,-.08,.23,.78,.13,-.26,.74,.74,-.43,.04,.68,.12,.77,.35,.71,.01,.56,.21,.25,.74,-.04,-.37,-.2,.56,.19,-.16,.58,.23,.19,.08,.52,.75,.04,.09,.21,-.03,-.32,.19,.03,-.39,-.36,.8,.21,.51,.77,.38,.12,-.06,.05,.62,.57,.74,-.08,.07,-.08,-.04,.23,.75,.16,.75,-.07,-.16,.15,.18,-.05,.47,-.43,.14,.77,-.51,.66,-.06,.08,-.24,.27,-.39,-.22,.43,.06,.64,-.13,.77,.24,.43,.08,.58,-.17,0,-.11,.6,.16,.72,.15,.21,-.02,.65,.02,-.02,.1,-.31,.59,.68,.58,-.11,.29,.18,.69,.37,.51,.84,.61,-.03,.16,.05,.47,.39,.02,.68,-.15,.28,.63,-.55,.23,.11,.16,.25,.8,.62,.02,.24,.16,-.34,-.21,.14,.02,.41,.62,.54,-.31,-.12,.79,-.17,.36,-.2,.09,.08,-.05,-.05,.81,.54,-.27,-.42,.4,.56,.08,.03,.68,-.04,-.19,.53,.44,.68,.59,.12,.55,.18,.46,.2,.34,.77,.64,-.09,.34,-.12,.45,.7,.34,.1,-.17,-.17,.54,.52,.49,.22,.29,.09,-.09,.31,-.03,-.13,.18,.26,-.03,.33,.55,.09,-.07,.6,.72,.24,.78,.27,.52,.64,.41,.13,0,.59,-.33,.2,-.15,-.01,.62,.61,.5,.08,.38,-.54,-.09,.79,.65,.28,.26,-.11,.6,.09,-.09,.44,.01,.63,.08,.04,.28,.08,.04,.58,-.23,-.09,.65,.01,.16,.73,.22,.51,.71,.03,-.03,.48,.09,.29,.48,.01,.57,.1,.24,-.16,-.15,-.03,.77,-.32,-.07,.17,.58,.6,.67,.74,.02,.03,.04,-.02,-.03,.42,-.12,.57,.7,.34,-.16,.38,.69,.3,-.3,-.08,-.25,.65,-.07,.73,.79,.57,-.17,.38,.61,-.12,.43,.15,.66,.48,.32,.04,.44,-.03,.77,.39,-.03,-.05,.25,-.07,.03,.07,.69,.05,.34,.57,.36,-.41,.72,.63,.4,-.06,.52,.58,.08,-.1,.47,-.14,.1,.51,-.1,.44,.55,.05,.25,.38,.38,-.03,.2,.67,.02,.08,-.2,-.09,.73,.3,.5,.68,-.09,.12,.83,.52,.65,.8,.2,.62,.69,.76,.46,-.15,.09,.44,.05,.52,.2,.72,.56,.02,.17,.7,.27,.72,.32,.15,-.17,.52,.24,.4,.2,.48,.15,.5,.12,.71,.58,.51,.7,.09,.81,.14,-.36,.63,.52,-.13,.04,.76,.46,.57,.36,.58,-.03,.69,.67,.66,.12,-.1,.28,.02,.09,.54,.17,.12,.69,-.08,.36,.26,.53,.67,.66,-.21,-.22,.65,.44,.48,.64,-.2,-.15,.56,.6,.38,.64,.4,.78,.16,.77,-.31,.65,-.21,-.07,.05,.1,-.07,.23,.59,.26,.62,.06,.47,0,.02,.7,.83,.7,.84,.63,-.04,.01,.1,.32,.51,-.08,-.11,.65,.5,.53,.08,.42,-.06,-.15,.34,.36,.66,-.05,.03,.58,.59,.79,.73,0,.45,.62,.66,.44,-.42,.64,.09,-.08,.68,-.24,.6,-.13,.62,.76,.16,.64,-.25,.29,.66,.23,.03,.4,.4,.19,-.1,.02,.47,-.08,-.11,.67,.79,.51,.04,.64,.54,.58,.64,.59,.66,.03,-.03,.02,.67,.09,-.43,-.01,.13,.11,.02,.68,.57,.22,-.17,.57,.37,-.19,.44,.08,.53,.76,.57,-.24,-.03,-.11,-.14,.41,.3,.61,.44,.82,.07,.38,.33,.78,.08,.09,-.2,-.01,.76,-.02,.57,.34,.75,.68,.07,.48,.77,.77,-.37,.03,-.16,.56,-.24,-.26,.13,-.66,-.1,-.23,-.05,.12,-.17,.11,.61,.63,-.15,.53,.63,-.28,.55,.13,-.44,-.5,-.16,.75,.64,.65,.32,.1,.63,.45,.6,.51,.34,-.02,.83,.74,.6,.51,.52,.32,.13,.48,.51,.72,.06,-.12,-.13,.17,.67,.61,.63,.13,.68,.72,.64,.58,.64,.61,.65,-.02,.64,.03,-.3,.86,.27,-.18,.16,.85,.77,.77,.41,.14,.47,.43,.61,.06,-.01,.09,-.1,.05,.07,.77,-.27,.53,.29,.77,-.22,.34,.2,.04,-.14,-.16,-.24,-.07,.59,0,.25,.57,.14,.23,.46,.15,-.23,.11,-.06,.81,-.03,.02,.66,.65,.62,.27,.56,.06,.65,.01,.67,.36,.52,.46,.06,.46,.24,.3,-.05,-.6,-.3,-.25,.7,.75,.67,.6,-.28,-.18,.56,.5,.12,.13,-.23,.18,.62,.54,-.12,.65,.57,.14,.27,.32,.62,.61,-.29,.03,.49,.58,.74,.02,-.24,.33,.3,-.1,0,.62,-.17,.14,.53,.32,-.1,.63,-.02,.08,-.13,.73,-.38,.53,.09,-.06,-.17,.03,.59,.36,-.05,.1,.19,-.01,.67,.67,.49,.03,.53,.58,.57,.59,.77,0,.08,.46,.56,.18,.31,.06,-.24,.01,.6,.69,0,.54,.04,.61,.58,-.07,.37,.06,.11,-.51,-.02,-.18,-.06,.58,.6,.33,.7,.47,-.02,.51,.43,.21,.36,-.09,.22,.57,.64,.32,.05,-.55,.45,.54,.37,.67,.29,.68,.32,.08,.84,-.57,.59,.7,.64,.2,.62,.28,.68,.23,.3,.31,.55,.7,.57,.67,.6,.53,.06,.66,.28,.34,-.22,.67,.59,.58,.52,.56,.01,.66,.61,.5,-.65,.57,.09,.64,.02,-.08,.66,.42,.57,.71,-.17,.06,-.01,.05,.65,.22,.71,.46,.53,-.14,-.34,.12,-.01,0,.13,.42,.18,.16,.65,.13,.03,.55];export{a as rvalData};
