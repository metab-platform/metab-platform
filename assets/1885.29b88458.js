const a=[-.21,.37,.62,.02,.63,.21,.34,.14,.39,.01,.2,-.07,-.1,-.68,.35,-.03,.23,-.09,-.24,.03,-.06,-.48,.14,.17,.48,.76,-.46,.14,.34,-.42,.58,-.41,.57,.14,.06,.25,.56,.33,.37,.53,-.06,.71,.36,0,.13,.16,-.02,-.18,-.31,.45,.18,.04,.14,.81,.64,.24,.25,.3,.3,.57,.54,.59,.88,-.11,-.05,-.46,.79,.28,-.12,-.07,0,.2,.57,-.3,.7,-.03,-.16,.5,.52,-.3,-.37,.53,-.02,.74,-.26,-.4,.69,.05,-.67,.59,.33,.06,.44,-.54,-.04,.11,-.68,-.19,-.17,.62,-.16,.89,.71,-.15,.83,.08,.01,.09,.67,.8,.03,.41,.19,-.54,-.21,.58,.15,-.54,-.33,.54,-.03,-.28,.12,-.1,-.09,.64,.65,-.09,-.46,.55,.17,-.25,-.04,.33,.13,.06,.26,.46,-.48,-.01,.76,.14,.73,.67,.11,-.01,.02,.06,.85,-.12,.89,.16,.07,-.04,.15,.25,-.13,-.04,-.22,.33,.09,.85,-.01,.39,.42,.46,.34,-.57,.21,.73,.09,-.46,.13,-.19,.58,-.35,.08,-.32,.48,.63,.06,.08,.05,.44,.74,.07,.11,.09,.11,-.28,-.08,.35,.01,.81,.79,.65,.87,.43,.05,-.45,.26,.62,.58,.08,-.46,.61,-.14,.61,.59,-.06,.1,.36,-.18,.49,.28,.33,.13,.19,-.44,-.33,.82,.66,.59,.77,.58,.6,.23,-.49,.44,.2,0,-.04,.39,.64,-.01,.13,.26,-.08,.11,.04,.37,.38,.06,.1,.27,-.09,.14,.23,.09,-.05,.2,-.37,.62,.12,.74,-.07,.08,.52,.2,.49,.13,.18,.61,.75,.17,.78,-.31,.72,-.03,.49,-.17,-.27,.56,.64,.68,0,-.25,.49,.66,-.31,.37,-.37,.39,-.42,.58,.56,-.34,.49,.42,-.27,.03,.45,.62,-.11,.3,.39,-.02,-.25,.22,.54,.02,.51,-.42,-.09,.09,.28,.08,.8,.34,-.07,.59,-.07,-.12,.1,.29,.54,.53,.23,.64,.33,.75,-.11,.3,.84,.21,.59,.69,-.09,-.01,.64,-.58,.61,.23,.02,-.51,-.02,-.49,.6,-.35,-.33,.61,.34,-.12,-.11,.58,.66,.07,.57,.26,.36,.9,.01,.19,.58,-.51,.44,.41,-.11,.75,.54,.39,.15,.5,.02,-.07,-.38,.24,.6,.36,.08,-.11,-.26,.37,.19,.38,.35,-.05,.73,-.11,.47,.03,.1,.05,.08,.07,.4,-.2,-.01,.67,.64,.73,-.07,.05,-.13,-.21,.54,-.65,-.06,-.04,-.1,-.28,.36,.7,.58,.29,.06,.32,.7,.9,.77,.65,-.52,-.15,.76,.23,.05,.78,.48,.38,-.41,.16,.56,-.38,-.06,.23,.6,.53,.03,.4,-.24,.03,.16,.52,.09,.37,.67,-.33,.7,.65,.71,.86,.66,.68,-.08,.29,.55,.52,.67,.03,-.56,.29,.63,-.7,.23,-.07,.11,-.32,.62,.31,.35,.75,.67,-.53,.54,.01,.31,-.21,-.32,-.59,.77,.11,.57,.42,.01,.45,.63,.49,.19,.64,-.43,.87,.48,.66,.44,.28,.31,.53,-.21,.2,.59,.14,-.08,.07,-.22,.64,.62,.28,-.16,.4,.09,.44,.08,.74,.56,.74,-.08,.09,.7,.54,.45,.83,.21,.69,.15,.29,-.31,.12,.4,.49,.76,-.25,.62,.15,.03,.59,.08,.12,.2,.1,.58,.5,.28,-.09,.12,.08,.25,.49,.25,.02,.01,-.04,.32,-.14,-.15,-.41,-.19,.22,-.11,.71,.13,-.33,.59,.64,.6,.44,-.14,-.51,-.14,-.3,-.07,.65,-.3,.28,.12,-.08,-.09,-.02,-.07,.18,-.29,.65,.64,.17,-.33,.66,.58,-.13,-.53,.36,.22,-.43,.09,.87,.43,.8,.38,.55,.78,-.42,.55,-.11,.08,.06,.75,.11,-.51,.64,.57,.5,.11,.4,.72,.59,.34,.29,-.45,.21,-.31,.09,.11,.15,.51,.21,.34,-.06,.02,.56,-.08,-.13,.01,.16,-.2,.39,-.05,.36,-.23,.07,.28,.84,-.11,-.01,-.61,-.43,.49,.39,.61,.63,.16,.07,-.37,.32,.65,-.62,.1,.25,.78,.03,.82,.11,.79,-.03,-.7,.19,.63,.64,.05,.34,-.17,-.19,0,.52,.41,.63,.31,.19,.16,.07,.43,.66,.63,.59,-.05,-.15,-.42,.6,-.1,.83,.7,-.39,.12,.05,.08,.29,.7,.27,.27,-.43,.75,.74,.03,-.07,-.25,.12,-.17,.09,.02,.22,.27,.68,-.46,.75,.21,.53,.44,.09,-.13,-.21,.49,-.01,-.38,.76,-.06,.2,.12,-.06,-.13,.15,.08,-.26,-.07,.21,.79,.55,-.07,.56,.3,-.33,-.49,-.15,.7,-.57,.3,.65,.01,.59,.25,.51,-.08,.13,-.01,.36,.45,-.43,-.21,-.08,-.31,.55,.5,.15,.55,-.06,-.07,-.26,.29,.68,.07,.02,.02,.56,-.1,.26,-.53,.66,.42,.04,.53,.79,-.12,-.28,.22,.08,.39,.62,.11,.46,-.31,.52,.09,.58,.41,.64,-.22,-.1,.75,.64,.84,.66,.43,.19,-.38,-.5,.19,.83,.26,.72,-.55,.65,.69,-.25,.69,.06,.32,-.45,.82,.5,.65,.28,-.37,.28,-.06,.03,-.09,.64,-.37,.63,.17,-.59,-.43,.04,.57,0,.2,.08,.48,-.08,.62,-.17,.36,-.18,-.06,.14,.56,.43,-.13,-.09,-.18,-.11,.33,.26,-.44,.61,.58,-.09,.15,-.3,.81,.13,-.47,.6,-.14,-.08,-.4,.63,-.19,-.03,.28,.28,.22,.44,-.08,.83,.66,-.02,-.38,.1,.11,-.44,.2,.1,-.01,-.18,-.01,0,.46,.24,.29,.22,.23,-.17,.17,-.42,.47,-.03,.79,.42,.12,.51,.37,.71,-.09,.8,-.43,-.5,.65,.61,.03,-.38,-.26,.49,.6,.41,-.23,.08,-.15,.02,.46,.06,.34,.07,.24,.06,-.21,-.28,-.29,.78,.28,.12,.15,.05,-.14,.22,-.16,-.33,.46,.71,.62,.15,.57,.66,.29,.34,.54,.49,.68,.56,-.64,.55,-.1,.65,.69,-.06,.23,.27,.51,.06,.15,.08,.6,0,-.05,.07,.04,.35,.01,.18,.03,.74,.11,.7,.19,.66,.05,-.15,.06,.76,.03,.02,.09,-.61,-.04,-.28,-.01,.24,-.66,.79,-.03,.32,.47,.4,.7,.74,.07,-.57,.21,.17,.07,-.15,.08,.06,.62,.49,-.03,.48,-.07,-.09,.39,-.08,.08,.12,.18,.05,.04,.06,-.02,.12,-.04,-.13,.08,-.11,-.01,-.21,.6,.39,-.25,.26,-.26,.33,-.18,.06,.15,.71,.05,.34,.62,.03,.37,.71,-.17,.14,-.18,.13,-.07,.16,.58,.07,.62,.51,.03,.27,.01,.03,.56,-.21,-.04,0,.45,.01,-.23,-.36,.54,.34,.47,.22,.24,.21,-.14,-.22,.17,.27,.64,-.3,-.06,-.13,.49,.34,.56,-.52,.51,.49,-.04,.46,.43,.54,.54,.01,.44,.61,.17,.59,.73,.14,-.34,-.02,.02,.49,-.16,.11,-.29,-.47,.69,.12,-.13,.72,-.37,.55,.89,.09,.41,.76,.62,-.03,-.38,-.02,.27,.54,.47,.22,.1,.64,.04,-.21,.5,.55,-.04,-.35,-.26,-.18,.45,.47,.64,-.26,.39,-.18,.19,-.33,.03,.08,.42,.27,-.03,.09,.7,.66,-.32,.15,.6,.76,.12,.19,.05,.68,-.06,-.2,.22,.8,.12,.55,.18,.63,-.35,.09,-.12,.49,.75,-.04,.47,.1,.32,.16,.03,.46,.32,-.04,.42,.61,.12,.71,.68,.9,.4,.29,.04,-.52,.57,.79,.08,.47,.1,.52,-.07,.12,-.14,-.02,.12,-.3,.15,.61,.48,-.16,.62,.17,-.07,-.26,.08,.71,-.08,-.26,.87,.83,-.36,-.42,.74,-.01,.79,.52,.9,.09,.62,.58,.22,.68,.09,-.22,-.16,.49,.53,-.14,.76,.55,.15,-.04,.61,.66,.12,.15,.3,-.06,-.42,.44,.2,-.46,-.1,.84,.14,.58,.54,.58,.03,-.01,.09,.47,.71,.68,-.08,.14,-.18,-.05,.22,.58,.09,.89,-.02,.07,.25,.05,.05,.66,-.44,.04,.89,-.58,.55,.02,.04,-.2,.59,-.53,-.56,.44,.02,.78,-.08,.94,.13,.53,-.05,.42,-.25,-.09,-.09,.81,.16,.58,.32,.08,0,.56,.1,.05,.12,-.03,.65,.8,.77,-.04,.5,.04,.79,.35,.83,.65,.63,-.01,.2,.06,.35,.45,.07,.6,-.18,.72,.5,-.6,.43,.12,.13,.36,.62,.54,.11,.44,.18,-.31,-.31,.29,.17,.49,.79,.69,-.44,-.1,.7,-.1,.34,.09,-.08,.03,-.05,.01,.76,.26,-.27,-.13,.2,.38,.1,-.05,.8,-.06,-.24,.65,.61,.79,.74,.16,.69,.43,.62,.21,.46,.75,.77,-.11,.05,-.16,.24,.78,.55,.24,-.04,-.36,.24,.39,.42,.44,-.15,-.22,-.24,.29,-.32,-.1,-.14,-.01,-.05,.17,.24,.12,-.04,.82,.88,.35,.78,.5,.76,.54,.13,.17,.07,.49,-.4,.25,-.22,-.14,.63,.77,.28,.26,.51,-.64,-.06,.71,.64,.33,.25,0,.46,.19,-.17,.37,.06,.3,.09,-.1,.29,-.33,.11,.45,-.18,-.21,.54,-.15,.16,.89,.41,.66,.69,-.03,-.1,.51,.03,.44,.41,-.12,.71,.16,.27,-.11,-.12,.1,.61,-.28,-.32,.09,.53,.75,.67,.65,.3,-.08,-.04,-.04,.29,.26,-.29,.68,.88,.3,-.05,.37,.66,.53,-.18,-.28,-.36,.84,-.17,.89,.79,.77,-.01,.36,.75,.02,.58,.22,.7,.66,.02,.08,.71,-.05,.72,.5,.29,.09,.37,.04,0,.12,.64,-.24,.03,.71,.59,-.33,.69,.64,.47,.05,.27,.62,.16,-.25,.54,0,.04,.67,-.12,.57,.39,.27,.41,.45,.44,-.08,.22,.65,-.01,.18,-.48,.15,.72,.55,.49,.86,-.11,.35,.67,.7,.56,.68,.43,.71,.85,.69,.45,.1,.41,.54,.01,.64,.07,.9,.8,.09,.37,.81,.32,.75,.49,.21,-.07,.66,.44,.72,.28,.43,.34,.3,-.06,.69,.66,.56,.81,.16,.51,.41,-.49,.84,.36,-.12,.11,.76,.62,.76,.36,.51,-.01,.65,.52,.82,-.15,-.27,.39,.1,.17,.48,.36,.23,.46,-.2,.5,.55,.66,.78,.64,-.13,-.05,.57,.43,.51,.61,-.04,-.03,.57,.52,.63,.83,.64,.9,.12,.91,-.2,.79,-.1,.37,-.08,-.01,.14,.48,.6,.21,.77,.09,.64,-.15,.28,.81,.73,.79,.74,.77,.21,.07,-.03,.41,.56,-.1,-.23,.8,.71,.69,.13,.62,.17,-.14,.62,.31,.86,.28,.12,.49,.54,.71,.62,-.02,.51,.68,.86,.61,-.29,.85,.13,-.23,.89,-.14,.79,-.04,.66,.83,0,.76,-.14,.12,.3,.46,.28,.24,.41,.1,-.09,.39,.35,-.27,-.06,.63,.64,.31,.12,.75,.26,.32,.69,.8,.59,-.08,.05,.05,.76,-.1,-.44,.01,.31,.33,.33,.57,.66,.2,-.17,.55,.72,-.39,.53,-.05,.74,.53,.28,-.16,-.17,-.04,-.25,.42,.41,.65,.57,.53,.07,.46,.44,.72,.09,.15,-.25,-.09,.77,-.22,.6,.31,.58,.58,.13,.78,.45,.92,-.5,.15,-.01,.47,-.45,-.17,.07,-.59,-.13,-.11,0,.05,-.08,.04,.84,.83,-.01,.57,.56,-.29,.61,-.11,-.54,-.62,-.07,.7,.58,.7,.44,-.21,.74,.41,.72,.74,.41,.24,.77,.6,.71,.65,.73,.32,-.06,.79,.67,.79,.26,-.41,.12,.23,.69,.28,.77,.17,.66,.56,.77,.63,.57,.55,.76,-.02,.84,.14,-.19,.64,.33,-.16,.24,.69,.51,.9,.66,.34,.55,.52,.63,.12,.03,.13,.05,.11,.1,.36,-.24,.18,.04,.7,-.11,.32,-.13,.04,.13,.02,-.28,-.2,.57,.06,.37,.59,.34,.27,.69,-.16,-.28,-.21,.06,.72,-.06,.18,.86,.74,.52,.03,.7,.09,.82,-.09,.6,.3,.66,.64,-.01,.35,.22,.13,.07,-.41,-.33,-.15,1,.95,.68,.64,-.22,-.16,.68,.66,.31,.18,-.09,.12,.8,.48,-.03,.67,.71,.29,.36,.39,.68,.73,-.46,.06,.65,.7,.78,.04,-.32,.26,-.02,-.13,-.08,.55,-.15,.12,.69,.47,-.01,.89,.19,.09,-.07,.9,-.39,.42,.3,-.05,-.18,.06,.58,.1,.04,.04,.38,.09,.57,.65,.63,-.38,.61,.58,.59,.74,.71,.01,.2,.64,.7,.28,.04,.09,-.08,.19,.72,.75,-.16,.53,.01,.55,.53,.16,.36,.11,.12,-.5,-.09,.07,-.01,.76,.56,.55,.63,.58,.1,.55,.36,-.04,.21,-.06,.09,.67,.5,.37,-.3,-.62,.53,.54,.22,.76,.42,.71,.6,.11,.75,-.56,.68,.72,.64,.17,.92,.23,.78,.41,.21,.32,.6,.69,.61,.59,.73,.51,-.37,.59,.12,.59,-.18,.57,.71,.7,.57,.72,-.03,.8,.51,.18,-.44,.59,.15,.55,-.24,-.03,.85,.58,.71,.87,-.27,.05,-.21,.14,.7,.37,.54,.54,.8,-.01,-.5,.13,-.1,-.37,.09,.51,.22,.12,.6,.16,.09,.78];export{a as rvalData};
