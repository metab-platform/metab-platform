const a=[-.08,.24,.36,-.03,.4,.33,.29,.31,.38,.02,.06,.02,-.18,-.55,.12,.07,.18,-.15,-.15,.12,-.03,-.53,.17,-.04,.44,.58,-.59,-.01,.03,-.54,.65,-.5,.4,.18,.13,.2,.37,.21,.35,.24,-.16,.54,.11,.03,.13,.09,0,-.07,-.44,.57,.23,.08,-.01,.57,.61,.15,.18,.34,.23,.43,.67,.52,.68,-.09,-.2,-.56,.67,.11,-.12,-.04,-.13,.1,.69,-.41,.49,-.04,-.16,.66,.45,-.47,-.28,.4,.1,.57,-.15,-.49,.49,.08,-.54,.45,.38,.03,.5,-.34,.03,.17,-.47,-.16,-.06,.7,-.06,.74,.72,-.03,.79,.07,-.3,-.2,.44,.73,.11,.61,.21,-.36,-.12,.44,.16,-.54,-.26,.54,-.06,-.41,.21,-.07,-.23,.65,.52,.03,-.48,.38,.35,-.09,.07,.51,.02,.08,.41,.37,-.52,-.02,.62,.11,.62,.5,.12,.04,.02,.07,.76,-.05,.73,.34,.15,.15,.32,.39,-.25,.01,-.12,.13,.22,.79,-.04,.61,.51,.64,.35,-.63,.34,.54,.15,-.54,.33,0,.32,-.46,.22,-.51,.67,.5,-.02,.11,.07,.16,.67,.13,.11,.09,.34,-.13,-.02,.6,-.01,.72,.73,.51,.75,.45,.01,-.41,.29,.63,.42,.07,-.3,.52,-.3,.7,.66,-.09,.33,.25,-.06,.4,.32,.37,.11,.33,-.51,-.43,.61,.67,.61,.56,.55,.42,.45,-.49,.56,.17,-.03,.04,.27,.38,-.11,.14,.09,-.12,.25,.05,.66,.18,.25,.3,.38,.19,.11,.23,-.02,-.06,.46,-.47,.61,.31,.59,-.12,0,.6,.25,.24,-.05,.27,.66,.62,.3,.77,-.37,.58,.03,.42,-.18,.06,.45,.42,.61,-.03,-.41,.67,.5,-.45,.51,-.46,.32,-.36,.56,.37,-.38,.35,.53,-.32,.18,.52,.43,.17,.41,.15,-.06,-.19,.29,.42,.1,.29,-.43,-.06,.13,.25,.1,.86,.48,-.12,.49,.01,-.04,.09,.32,.42,.51,.36,.41,.32,.57,-.02,.15,.67,.34,.58,.41,-.12,-.04,.6,-.48,.58,.14,-.12,-.67,-.07,-.62,.51,-.18,-.27,.66,.12,-.13,-.07,.37,.43,.08,.64,.03,.42,.75,.2,.25,.58,-.35,.33,.49,-.22,.6,.32,.35,.09,.47,-.24,-.04,-.22,.25,.4,.46,-.02,-.34,-.28,.29,.3,.53,.43,-.03,.48,-.02,.51,.02,.07,.04,-.04,.16,.28,-.22,.04,.51,.47,.57,-.09,.03,-.11,-.19,.29,-.53,-.08,-.06,-.23,-.21,.36,.53,.45,.39,.08,.16,.57,.79,.65,.42,-.3,.12,.62,.34,.1,.66,.18,.51,-.28,.21,.37,-.3,-.11,.24,.38,.3,-.07,.38,-.05,.21,.31,.53,.16,.42,.4,-.27,.46,.41,.68,.75,.58,.57,-.05,.37,.6,.27,.39,.11,-.5,.38,.71,-.59,.2,.02,.11,-.44,.43,.42,.51,.51,.45,-.43,.67,-.02,.39,-.26,-.12,-.46,.54,-.2,.38,.31,.02,.54,.41,.33,.38,.51,-.49,.68,.32,.57,.5,.41,.3,.51,.08,-.03,.32,.1,.04,.02,-.11,.45,.44,.41,-.16,.49,.34,.49,0,.64,.28,.65,.05,.03,.56,.24,.59,.73,.35,.52,.23,.41,-.32,.32,.47,.66,.52,-.29,.4,.21,.15,.57,.1,.06,.15,.02,.41,.62,.4,-.12,.27,.1,.24,.48,.12,.12,.05,-.06,.39,-.19,-.39,-.37,-.1,.14,-.36,.56,-.03,-.43,.42,.38,.4,.44,-.19,-.47,-.03,-.27,-.06,.55,-.34,.29,.38,-.03,-.12,-.03,-.07,.37,-.18,.48,.38,.21,-.12,.56,.29,-.05,-.46,.47,.12,-.4,.13,.72,.35,.82,.23,.31,.73,-.31,.33,-.05,.06,-.04,.63,.34,-.42,.45,.31,.54,.22,.48,.52,.38,.5,.13,-.56,.33,-.22,.05,-.04,.06,.28,.19,.6,-.07,.05,.33,.21,-.17,.05,.23,0,.37,0,.39,-.09,.09,.44,.69,.11,-.1,-.56,-.43,.63,.37,.67,.41,.35,.23,-.44,.35,.48,-.49,-.03,.17,.67,.17,.57,.07,.81,-.07,-.59,.19,.39,.41,.12,.28,-.16,-.1,.14,.3,.15,.52,.38,.25,.34,.04,.42,.59,.47,.41,-.04,-.16,-.58,.62,.12,.79,.49,-.32,.01,.01,.15,.09,.4,.42,.33,-.41,.58,.53,.29,-.12,-.18,.22,-.16,.09,.1,.16,.43,.53,-.31,.57,.34,.5,.23,.21,-.2,-.12,.16,0,-.59,.66,.23,.29,.27,-.02,-.08,.09,.22,-.21,-.01,.32,.62,.36,-.08,.35,.08,-.22,-.52,-.08,.49,-.49,.46,.48,-.05,.56,.4,.31,-.03,-.05,-.03,.25,.35,-.41,-.43,-.02,-.18,.4,.31,.27,.64,0,-.09,-.22,.15,.59,.02,.02,-.13,.37,-.08,.13,-.57,.41,.44,-.09,.27,.64,-.11,-.37,.26,.23,.46,.49,.12,.55,-.14,.61,.29,.43,.44,.35,-.22,0,.63,.39,.73,.6,.61,.11,-.36,-.54,.26,.68,.1,.47,-.58,.42,.59,-.18,.62,.03,.23,-.39,.67,.38,.56,.39,-.23,.34,-.13,-.01,-.12,.48,-.38,.57,.34,-.49,-.53,-.04,.35,.01,.18,.36,.34,-.14,.44,-.14,.43,-.19,-.12,.25,.41,.46,-.07,-.1,-.18,-.21,.42,.27,-.58,.45,.42,-.1,.34,-.34,.66,-.16,-.46,.6,-.19,.1,-.51,.49,-.09,-.05,.24,.37,.29,.52,-.18,.73,.44,.04,-.4,.2,.23,-.5,.27,.13,.19,-.01,.14,.02,.56,.34,.34,-.05,.33,-.1,.2,-.56,.3,.02,.65,.27,.19,.58,.28,.58,.1,.62,-.31,-.44,.71,.47,-.12,-.31,-.25,.39,.47,.33,-.16,.01,-.16,.03,.33,.02,.46,.12,.32,.08,-.45,-.23,-.17,.61,.41,.2,.27,.21,-.01,.37,-.25,-.33,.43,.56,.37,.21,.31,.6,.35,.6,.3,.28,.47,.45,-.51,.71,-.07,.64,.58,.02,.25,.34,.46,.17,.02,.28,.54,.04,-.16,.22,.09,.31,.07,.24,.08,.6,-.03,.51,.19,.41,.07,.04,.11,.69,.06,.13,.29,-.47,-.11,-.43,.19,0,-.49,.54,-.01,.37,.46,.62,.55,.52,.22,-.57,.33,.31,.21,.04,.18,.14,.66,.55,.25,.58,.17,-.06,.5,-.08,.09,.07,.12,.06,.04,.14,.06,.08,-.17,-.09,.07,-.17,.13,-.19,.6,.42,-.36,.33,-.23,.43,.03,.18,.13,.56,-.07,.18,.59,-.19,.32,.58,-.04,.12,-.28,.28,-.06,.19,.55,.06,.68,.35,.33,.14,.02,.19,.31,-.42,-.06,.12,.55,.07,-.19,-.39,.33,.39,.32,.25,.3,.17,.01,-.28,.21,.32,.38,-.4,-.03,-.13,.38,.55,.48,-.61,.41,.28,-.07,.45,.5,.61,.35,.11,.26,.38,.34,.5,.52,.16,-.39,-.01,.09,.64,-.22,.11,-.33,-.53,.56,-.21,-.05,.49,-.35,.33,.71,.35,.33,.55,.36,.26,-.41,.18,.28,.32,.42,.1,.14,.41,.21,-.29,.61,.71,-.16,-.32,-.39,-.11,.39,.57,.44,-.13,.18,-.09,.14,-.3,.03,.02,.29,.4,-.15,.27,.44,.38,-.36,.2,.4,.52,.16,.2,.25,.44,.04,-.04,.43,.68,.11,.35,.06,.34,-.18,.04,.02,.56,.44,.04,.49,.08,.44,.21,.04,.49,.5,.02,.53,.38,.17,.51,.34,.72,.48,.44,.09,-.4,.55,.71,-.1,.27,.04,.46,-.01,.35,-.13,.1,.16,-.27,.25,.36,.29,-.25,.37,-.05,.18,-.01,.12,.53,.03,-.15,.66,.73,-.35,-.39,.65,.06,.59,.43,.77,.25,.39,.41,.44,.45,0,-.19,.11,.37,.57,-.11,.55,.37,.26,.05,.53,.64,.11,.14,.39,-.01,-.53,.49,.32,-.62,.05,.61,.13,.37,.46,.47,.03,.1,.08,.31,.54,.4,-.11,.12,-.05,-.01,.08,.34,.14,.68,-.05,.11,.35,.1,.11,.58,-.48,.25,.64,-.45,.28,.11,.3,-.33,.62,-.63,-.61,.54,.07,.54,-.02,.82,-.1,.28,.19,.04,-.18,.19,-.06,.7,.34,.36,.38,.11,.03,.31,.12,0,.24,.14,.51,.69,.76,.02,.62,.07,.6,.39,.82,.39,.56,0,.07,-.04,.11,.61,.16,.41,-.14,.75,.28,-.39,.32,.08,-.03,.44,.62,.36,.12,.36,.22,-.3,-.19,.44,.33,.28,.62,.44,-.51,-.15,.52,.1,.33,-.06,.02,.25,-.1,.09,.66,.4,-.23,-.1,.12,.36,.13,-.08,.74,-.11,-.16,.76,.64,.72,.64,.12,.63,.6,.69,.19,.57,.68,.65,-.15,.14,-.11,.27,.7,.65,.26,-.1,-.22,.25,.44,.28,.42,-.05,-.03,-.09,.26,-.09,-.02,.11,.16,-.15,.28,.3,.03,.09,.79,.76,.32,.66,.45,.77,.38,.18,.39,.02,.29,-.33,.4,-.14,-.28,.37,.63,.1,.16,.65,-.6,.05,.62,.46,.35,.23,.08,.29,.24,-.24,.29,-.07,.01,.24,-.01,.33,-.25,.12,.26,-.17,-.18,.41,-.02,.28,.73,.49,.57,.51,.12,-.02,.64,.06,.46,.18,.08,.56,.18,.38,-.04,-.1,.06,.46,-.19,-.19,.05,.54,.56,.54,.41,.36,-.16,-.06,-.05,.36,.27,-.38,.6,.75,.24,-.01,.29,.53,.64,-.18,-.11,-.44,.74,-.04,.76,.66,.79,-.04,.32,.65,.05,.49,.31,.56,.65,.06,.09,.71,.14,.63,.49,.43,.12,.29,.02,.03,.1,.63,-.34,.1,.5,.56,-.44,.66,.38,.44,.16,.18,.6,.02,-.21,.72,.08,-.01,.54,-.1,.54,.24,.33,.43,.51,.4,-.19,.28,.53,.01,.13,-.54,.24,.6,.65,.48,.79,-.08,.39,.49,.73,.35,.53,.59,.52,.82,.59,.38,.19,.44,.48,-.16,.57,.11,.79,.66,.08,.41,.63,.03,.63,.54,.24,-.21,.54,.5,.57,.48,.46,.47,.14,-.07,.5,.43,.54,.61,.16,.33,.59,-.52,.84,.21,.17,.18,.62,.46,.8,.5,.62,-.12,.45,.44,.65,-.24,-.39,.56,.21,.34,.2,.53,.19,.33,-.18,.5,.35,.73,.54,.38,-.08,-.16,.4,.49,.58,.37,-.02,.01,.55,.41,.68,.73,.73,.79,.19,.76,-.22,.77,-.07,.5,-.13,-.02,.1,.41,.36,.23,.66,.12,.73,-.13,.46,.69,.54,.64,.55,.57,.3,.09,.31,.57,.53,-.02,-.18,.57,.7,.61,.06,.47,.28,-.14,.62,.59,.7,.43,.06,.34,.31,.62,.46,.3,.27,.71,.84,.77,-.08,.76,0,.01,.79,-.18,.72,-.06,.41,.72,-.04,.63,-.28,.35,.11,.58,.24,.16,.51,.38,-.29,.43,.26,-.27,.1,.52,.49,.17,.25,.63,.03,.24,.64,.55,.34,-.19,.05,0,.56,-.09,-.35,.04,.44,.4,.54,.34,.45,.01,-.2,.44,.66,-.44,.42,-.23,.65,.44,.41,-.06,-.13,.06,-.23,.34,.43,.45,.59,.49,.31,.6,.6,.46,.15,.23,-.15,.08,.61,-.26,.33,.24,.43,.38,.06,.73,.42,.77,-.63,.08,-.02,.3,-.32,-.11,.17,-.53,-.2,.02,-.11,.13,.03,.16,.78,.69,0,.45,.26,-.21,.35,.12,-.71,-.65,-.02,.53,.31,.49,.32,-.22,.65,.36,.65,.81,.37,.12,.68,.46,.57,.8,.84,.28,-.15,.69,.52,.59,.37,-.47,-.19,.09,.52,.2,.75,.12,.56,.37,.69,.37,.3,.29,.67,.04,.68,.01,-.28,.53,.35,-.09,.24,.46,.32,.76,.51,.38,.28,.55,.4,.16,.15,.18,.11,.1,.14,.25,-.03,.33,.13,.44,-.13,.3,.05,.16,-.09,-.04,-.26,-.13,.36,.05,.4,.42,.4,.06,.56,.09,-.03,-.02,.05,.56,-.07,.37,.79,.68,.43,.11,.52,.02,.56,-.2,.43,.42,.6,.67,.05,.28,.28,.2,.06,-.33,-.28,-.02,.78,.81,.57,.6,-.2,-.25,.57,.69,.16,.18,-.07,.08,.57,.28,0,.63,.59,.05,.38,.12,.52,.58,-.52,.27,.74,.83,.74,.07,-.35,.17,-.03,-.07,-.09,.32,-.07,.09,.52,.49,-.03,.78,.1,.16,-.04,.75,-.39,.26,.4,-.05,.04,-.02,.39,.08,0,-.06,.41,.18,.37,.41,.47,-.36,.37,.3,.39,.59,.44,0,.18,.64,.53,.32,.07,.12,-.11,.09,.5,.58,.04,.38,-.04,.41,.23,-.21,.45,.15,.08,-.59,-.04,-.29,-.01,.61,.34,.4,.39,.73,.08,.61,.3,-.17,.26,.01,.08,.41,.35,.35,-.21,-.52,.46,.22,.11,.55,.39,.51,.54,.1,.56,-.46,.53,.57,.39,.08,.78,.27,.67,.3,.34,.35,.42,.51,.62,.4,.54,.28,-.36,.4,-.05,.59,-.21,.39,.55,.51,.42,.5,.24,.69,.3,.16,-.38,.45,.17,.3,-.08,-.01,.75,.49,.51,.73,-.35,.05,-.33,.35,.46,.38,.37,.45,.57,-.05,-.59,.09,-.09,-.42,.17,.35,.12,.02,.36,.21,.18,1];export{a as rvalData};
