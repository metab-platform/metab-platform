const a=[-.18,.29,.41,-.02,.52,.27,.31,.41,.45,.09,.12,-.05,-.06,-.55,.19,.03,.08,-.02,-.18,.14,-.05,-.62,.16,.02,.41,.73,-.63,.19,.45,-.64,.61,-.52,.54,.15,-.16,.29,.39,.14,.42,.46,-.01,.69,.39,-.05,.14,.02,-.14,-.15,-.34,.63,.18,.06,.07,.6,.76,.2,.29,.4,.38,.5,.7,.63,.82,-.01,.05,-.67,.76,.08,-.06,-.06,.02,.21,.74,-.36,.58,-.06,-.21,.66,.22,-.38,-.37,.47,-.07,.74,-.25,-.54,.7,.03,-.57,.38,.53,.12,.62,-.36,-.09,.29,-.58,-.32,-.03,.78,-.1,.78,.73,-.09,.88,.07,-.08,-.02,.65,.73,.02,.63,.19,-.39,-.17,.46,-.05,-.63,-.22,.53,.03,-.33,.16,.01,.16,.75,.51,-.09,-.62,.43,.46,-.04,-.03,.51,0,.08,.57,.49,-.65,-.05,.79,.11,.84,.7,.13,.01,.03,.2,.85,-.15,.76,.28,.09,.02,.48,.46,.06,-.07,-.28,.17,.33,.81,.02,.5,.6,.62,.33,-.69,.36,.65,.11,-.56,.39,.11,.63,-.56,.07,-.48,.68,.53,-.08,.11,.03,.21,.83,.16,-.02,.08,.34,-.22,-.05,.53,-.01,.88,.82,.49,.8,.29,-.02,-.49,.18,.69,.48,.03,-.35,.65,.08,.76,.73,.05,.4,.21,-.17,.38,.37,.48,.13,.47,-.61,-.36,.79,.74,.53,.59,.64,.48,.5,-.61,.52,.34,.02,-.04,.36,.39,-.03,.15,.12,-.14,.19,-.04,.64,.15,.41,.47,.52,.16,.06,.27,.05,-.06,.36,-.26,.77,.28,.72,-.04,.08,.47,.21,.24,.06,.39,.57,.76,.3,.83,-.35,.75,-.02,.55,-.24,-.31,.44,.44,.48,.06,-.42,.68,.55,-.34,.65,-.47,.19,-.32,.72,.59,-.46,.37,.47,-.35,.16,.69,.62,.14,.46,.41,.03,-.32,.21,.59,.05,.38,-.49,-.1,.12,.44,.09,.85,.52,-.06,.65,-.06,-.17,.09,.23,.59,.48,.47,.43,.35,.78,-.08,.13,.76,.37,.77,.68,0,.1,.79,-.45,.68,.37,.01,-.6,-.08,-.62,.73,-.12,-.37,.81,.31,-.09,-.03,.41,.5,.08,.74,.34,.64,.9,.32,.19,.74,-.35,.23,.46,-.18,.6,.29,.43,.13,.67,-.05,-.01,-.32,.29,.47,.5,.07,-.24,-.21,.39,.33,.48,.51,.12,.74,-.1,.64,.03,.1,-.03,.15,.02,.43,-.28,-.04,.61,.61,.58,-.03,.03,.01,-.07,.4,-.69,-.13,.03,.14,-.27,.52,.52,.63,.49,0,.16,.59,.8,.69,.44,-.43,-.01,.61,.29,-.01,.78,.34,.65,-.25,.18,.44,-.41,-.01,.23,.5,.42,-.03,.61,.09,.37,.28,.52,.09,.54,.46,-.19,.69,.56,.71,.84,.7,.8,.03,.41,.67,.4,.7,.19,-.62,.42,.75,-.65,.38,-.09,.17,-.47,.49,.45,.44,.56,.7,-.44,.72,.01,.22,-.19,-.19,-.6,.56,0,.41,.33,-.08,.69,.6,.5,.28,.46,-.53,.85,.3,.52,.61,.37,.48,.57,.03,.2,.33,.02,-.07,.12,-.02,.52,.54,.35,-.16,.37,.41,.69,.12,.61,.48,.72,.03,.24,.62,.45,.61,.79,.4,.75,.29,.39,-.39,.26,.62,.72,.67,-.28,.47,.18,.01,.57,.05,.22,.2,.15,.66,.68,.36,0,.4,.12,.29,.59,.27,.19,.04,-.04,.54,-.13,-.34,-.4,-.11,.33,-.32,.56,.33,-.47,.48,.52,.33,.6,-.12,-.53,.25,-.36,.01,.42,-.47,.54,.39,-.04,-.06,.03,-.16,.35,-.2,.49,.42,.1,-.02,.57,.42,-.15,-.49,.56,.17,-.44,.13,.86,.57,.83,.21,.42,.74,-.45,.36,-.07,.07,.02,.66,.38,-.49,.57,.4,.59,.24,.35,.59,.43,.49,.26,-.64,.52,-.22,.04,.27,.09,.31,.18,.52,.03,-.01,.43,.17,-.22,.06,.28,.11,.54,-.04,.55,-.3,.3,.42,.81,.12,-.06,-.55,-.37,.64,.33,.65,.59,.49,.23,-.5,.37,.64,-.63,.11,.1,.77,.23,.76,.06,.82,-.14,-.68,.49,.53,.6,.1,.07,-.21,-.11,.03,.39,.42,.55,.5,.16,.13,.07,.57,.76,.63,.63,-.06,-.15,-.61,.65,.22,.83,.57,-.33,.17,.06,.2,.29,.65,.44,.38,-.36,.75,.72,.2,-.05,-.16,.31,-.11,.08,.09,.17,.23,.55,-.42,.74,.42,.68,.38,.14,-.16,-.15,.26,.01,-.57,.71,.31,.28,.28,-.03,-.12,.36,.12,-.21,-.08,.41,.73,.36,-.07,.52,.19,-.31,-.64,-.24,.53,-.53,.44,.62,-.09,.76,.57,.36,-.07,.11,.06,.2,.38,-.5,-.41,-.02,-.26,.58,.3,.33,.72,-.14,-.12,-.28,.49,.44,.1,.04,-.12,.56,-.16,.11,-.67,.6,.33,-.04,.33,.72,-.05,-.28,.31,.3,.54,.54,.13,.7,-.3,.5,.34,.52,.62,.44,-.2,-.07,.76,.38,.8,.81,.59,.08,-.5,-.59,.43,.71,.04,.68,-.66,.48,.81,-.05,.68,.22,.34,-.43,.72,.31,.71,.42,-.36,.49,-.04,.08,-.03,.61,-.47,.69,.5,-.47,-.45,0,.51,-.08,.31,.37,.41,-.04,.47,-.16,.38,-.19,-.09,.22,.46,.48,-.11,.02,-.24,-.16,.39,.21,-.57,.62,.52,0,.5,-.46,.6,.02,-.52,.8,-.13,.03,-.58,.68,-.1,-.05,.38,.49,.42,.61,-.18,.87,.56,.02,-.31,.27,.35,-.46,.18,.45,.35,.07,.06,.11,.7,.42,.5,.33,.33,-.13,.2,-.58,.42,.06,.76,.28,.18,.61,.47,.69,.23,.76,-.29,-.43,.8,.61,-.05,-.39,-.18,.42,.53,.4,-.19,.05,-.08,.03,.51,.11,.63,-.01,.56,.05,-.4,-.46,-.03,.72,.45,.07,.44,.4,-.09,.4,-.18,-.15,.4,.68,.49,.12,.44,.55,.49,.52,.33,.32,.65,.61,-.51,.72,-.08,.59,.64,-.19,.24,.37,.59,.29,.2,.35,.46,-.08,-.02,.37,.02,.48,.03,.51,.1,.7,.15,.69,.22,.64,.06,.19,-.01,.73,.09,.09,.15,-.5,-.06,-.34,.08,-.02,-.55,.74,-.05,.32,.54,.64,.64,.64,.39,-.69,.48,.35,.38,.17,.08,.03,.61,.72,.26,.7,.22,-.09,.66,-.1,.09,.12,.12,.05,.05,-.03,.03,.07,-.25,-.14,.05,-.16,-.02,-.22,.73,.58,-.35,.38,-.12,.47,.01,.23,.02,.72,.09,.36,.75,.05,.5,.69,-.05,.11,-.18,.44,-.11,.16,.7,.11,.79,.41,.28,.23,.02,.31,.43,-.4,-.01,0,.68,-.01,-.13,-.34,.44,.52,.51,.25,.35,.27,-.15,-.29,.27,.43,.63,-.42,-.04,-.01,.4,.54,.59,-.67,.53,.33,-.02,.59,.57,.64,.35,-.02,.55,.36,.4,.64,.6,.12,-.43,.03,.05,.68,-.24,.13,-.14,-.6,.75,.13,.04,.63,-.45,.28,.88,.37,.55,.72,.62,.17,-.38,.3,.4,.42,.54,.26,.08,.62,.08,-.2,.68,.71,0,-.4,-.32,-.1,.37,.54,.58,-.34,.16,-.31,.04,-.33,.07,-.03,.12,.48,-.07,.35,.66,.52,-.2,.1,.48,.74,.39,.21,.14,.64,-.25,-.09,.29,.79,.13,.5,.01,.46,-.17,.12,-.15,.62,.58,.01,.65,.1,.52,.19,.06,.41,.39,0,.6,.58,.21,.62,.58,.69,.66,.38,-.05,-.53,.73,.83,.02,.3,.1,.53,0,.45,-.07,.03,.24,-.28,.12,.5,.33,0,.35,.3,.06,-.1,.11,.63,-.05,-.23,.73,.77,-.43,-.42,.72,-.03,.66,.66,.88,.25,.38,.36,.5,.51,-.06,-.27,.16,.37,.58,-.06,.76,.4,.32,.07,.66,.48,.13,.16,.52,-.01,-.54,.58,.4,-.66,.03,.74,.12,.43,.53,.51,.04,-.03,.11,.33,.65,.48,.01,.15,-.18,-.16,.22,.68,.17,.79,-.05,.15,.46,0,.19,.78,-.39,.36,.76,-.54,.45,.19,.31,-.32,.56,-.7,-.68,.63,-.01,.54,-.02,.83,-.07,.4,.2,.44,-.25,.26,-.06,.89,.22,.48,.55,.22,.02,.43,-.05,-.01,.11,-.03,.67,.79,.82,.14,.63,.06,.65,.5,.77,.63,.66,.15,.24,.01,.09,.6,.37,.49,-.32,.63,.42,-.45,.49,.26,.17,.44,.55,.4,.11,.53,.38,-.21,-.21,.47,.3,.26,.74,.52,-.5,-.11,.65,.12,.59,.25,.03,.28,-.06,-.03,.81,.45,-.15,-.13,.14,.25,.16,-.15,.92,-.08,-.09,.75,.65,.69,.66,.28,.69,.56,.81,.28,.62,.63,.72,-.05,.17,.08,.4,.81,.76,.06,-.26,-.39,.26,.45,.26,.63,-.09,-.01,0,.4,-.12,-.18,.05,.2,-.06,.31,.18,.12,-.04,.91,.79,.42,.67,.74,.91,.42,-.12,.49,.13,.43,-.33,.56,-.15,-.3,.46,.68,.08,.34,.68,-.64,.01,.7,.59,.37,.43,.11,.3,.24,-.29,.36,-.02,.28,.12,-.13,.45,-.21,.08,.4,-.11,-.25,.46,-.14,.3,.78,.62,.64,.71,.07,-.12,.67,.08,.65,.16,.19,.7,.09,.46,-.08,-.18,.14,.41,-.26,.03,.06,.52,.66,.69,.63,.42,-.21,.05,-.15,.42,.2,-.45,.76,.79,.37,-.01,.12,.49,.75,-.2,-.08,-.52,.74,-.26,.9,.66,.86,0,.55,.5,.01,.6,.39,.6,.83,-.01,.09,.82,.22,.59,.63,.4,.12,.61,.02,.05,.13,.48,-.03,.21,.59,.73,-.23,.72,.54,.66,.29,.28,.53,.19,-.2,.74,.04,.06,.66,-.01,.56,.23,.5,.64,.65,.41,-.14,.25,.69,.02,.16,-.63,.35,.69,.66,.57,.76,-.13,.55,.63,.82,.44,.67,.69,.53,.82,.67,.58,.27,.56,.59,-.2,.76,.3,.9,.66,.03,.59,.83,.11,.72,.63,.07,-.24,.51,.6,.73,.54,.54,.46,.08,.02,.64,.49,.56,.82,.17,.5,.58,-.64,.87,.13,.15,.03,.65,.55,.71,.58,.67,.04,.52,.46,.77,-.17,-.36,.58,.27,.53,.32,.55,.2,.39,-.18,.54,.51,.64,.54,.48,-.15,-.06,.32,.6,.7,.44,.02,.16,.7,.53,.79,.89,.66,.88,.11,.82,-.18,.85,0,.42,-.04,.04,.1,.65,.35,.21,.66,.06,.77,-.1,.43,.69,.73,.85,.76,.79,.42,.19,.23,.59,.45,-.08,-.11,.86,.68,.71,.27,.5,.38,-.18,.6,.5,.88,.46,.07,.41,.41,.7,.6,.22,.31,.77,.85,.7,-.15,1,.12,.12,.9,-.15,.7,-.07,.43,.83,-.02,.73,-.18,.37,.22,.57,.31,.14,.56,.37,-.13,.46,.38,-.24,.03,.66,.52,.11,.33,.76,.03,.23,.62,.76,.53,-.13,.11,.31,.8,-.11,-.46,-.06,.45,.42,.42,.45,.41,-.01,-.13,.43,.58,-.45,.66,-.23,.68,.49,.42,-.16,-.34,-.06,-.2,.46,.56,.4,.63,.51,.34,.65,.61,.71,.11,.26,-.12,.02,.64,-.26,.39,.41,.52,.5,.04,.71,.37,.82,-.64,.07,-.02,.55,-.26,-.14,.4,-.56,-.16,.02,-.03,.05,-.11,-.01,.77,.74,.04,.46,.38,-.01,.4,.13,-.69,-.66,-.03,.65,.45,.64,.29,-.2,.62,.35,.71,.82,.61,.25,.72,.5,.64,.78,.77,.53,-.22,.71,.63,.65,.48,-.61,.01,.31,.67,.29,.86,.11,.71,.42,.81,.39,.39,.41,.66,-.03,.72,.07,-.3,.55,.53,-.08,.44,.64,.4,.87,.64,.57,.37,.68,.41,.11,.02,.12,.1,.13,.11,.21,.04,.31,.17,.7,-.04,.36,-.07,.33,.05,-.07,-.22,-.14,.44,-.03,.59,.5,.57,.44,.76,.03,-.04,-.25,-.04,.73,-.03,.44,.8,.87,.31,.08,.58,.2,.76,-.12,.48,.4,.83,.84,-.06,.22,.31,.19,.01,-.28,-.25,-.14,.85,.83,.61,.46,-.17,-.31,.76,.82,.52,.2,-.07,.04,.76,.35,.05,.54,.7,.3,.59,.27,.61,.67,-.61,.39,.63,.79,.73,.12,-.35,.25,-.02,-.06,-.15,.43,-.11,-.04,.68,.62,-.05,.86,.16,0,-.11,.79,-.51,.18,.51,-.08,-.06,.06,.33,.22,.02,-.06,.59,.06,.41,.57,.36,-.45,.33,.36,.52,.76,.7,.14,.26,.71,.69,.48,-.18,.04,-.08,.12,.6,.72,.17,.45,-.06,.31,.35,0,.6,.05,.19,-.57,-.09,-.07,.01,.63,.43,.57,.51,.74,-.04,.74,.15,-.2,.13,-.01,-.17,.69,.41,.59,-.27,-.61,.68,.34,.19,.57,.6,.65,.66,.19,.76,-.59,.66,.7,.54,.07,.82,.15,.72,.35,.5,.49,.33,.72,.42,.46,.69,.27,-.39,.46,-.1,.75,-.23,.49,.66,.61,.49,.61,.23,.81,.24,.44,-.46,.49,.16,.4,-.02,-.03,.82,.55,.6,.75,-.41,.01,-.43,.43,.53,.52,.51,.52,.76,.12,-.66,.1,-.29,-.32,.05,.58,.09,.23,.52,.21,.11,.76];export{a as rvalData};
