const a=[-.08,.05,.12,-.08,.21,.3,.16,.6,.28,.16,-.21,-.12,0,-.36,-.18,.05,-.06,0,-.16,0,.03,-.45,.23,-.42,.1,.36,-.67,.14,.12,-.74,.38,-.51,.23,.07,-.23,.17,.01,-.2,.25,.09,-.15,.27,.17,.01,.19,-.22,-.29,-.2,-.53,.76,.2,.06,-.12,.24,.73,-.12,.07,.32,.35,.09,.53,.28,.5,.01,-.26,-.66,.39,-.31,-.15,.03,.01,-.08,.72,-.29,.17,-.1,-.27,.55,.16,-.61,-.2,.08,.06,.3,-.22,-.54,.26,.07,-.26,.12,.55,.06,.69,.02,-.16,.34,-.28,-.28,-.06,.67,-.04,.43,.6,-.04,.77,.04,-.24,-.22,.23,.58,0,.65,.23,-.16,-.1,.12,-.12,-.58,-.21,.25,.13,-.32,.14,.14,.27,.7,.15,.12,-.67,.04,.7,.23,.08,.69,-.19,.07,.69,.46,-.67,-.09,.46,.03,.56,.26,.08,.17,0,.17,.5,.03,.41,.41,.07,-.01,.67,.58,-.13,-.13,-.24,-.23,.69,.73,.1,.5,.66,.6,.13,-.74,.52,.26,.07,-.56,.63,.37,.5,-.58,.1,-.63,.78,.16,-.16,-.03,.13,-.06,.67,.26,-.03,.06,.6,-.15,-.06,.69,-.07,.7,.59,.17,.63,.31,-.08,-.45,-.07,.38,.11,.02,-.15,.53,.18,1,.73,.13,.64,-.2,-.17,-.05,.28,.32,.06,.61,-.67,-.41,.6,.65,.4,.2,.49,.08,.75,-.63,.48,.52,.04,.13,-.11,.14,0,.07,-.27,-.31,.25,-.05,.64,-.28,.54,.62,.57,.34,-.03,.25,-.08,-.07,.58,-.23,.73,.31,.42,-.1,.16,.31,.33,.01,-.1,.46,.48,.46,.36,.72,-.4,.39,-.09,.12,-.33,-.11,.11,.21,.36,-.02,-.63,.65,.24,-.51,.8,-.59,0,-.16,.72,.31,-.57,-.01,.59,-.34,.44,.7,.29,.29,.58,.2,-.23,-.32,.33,.57,.06,.09,-.56,.02,-.05,.21,.21,.67,.62,-.32,.26,.01,-.07,.07,.3,.57,.68,.53,.23,.37,.39,-.12,-.2,.39,.66,.76,.29,.05,.25,.78,-.18,.51,.07,-.01,-.51,-.14,-.7,.49,.09,-.22,.7,.12,-.04,-.11,-.01,.17,.11,.8,.16,.62,.65,.53,.08,.72,-.32,.02,.45,-.22,.33,.05,.06,.19,.7,-.21,.01,-.11,.3,.08,.45,-.04,-.39,-.14,.21,.5,.4,.46,-.01,.42,-.13,.75,-.06,.03,-.06,.08,.11,.32,-.27,-.08,.27,.26,.34,.05,-.07,.24,.13,.09,-.52,-.05,.12,.24,-.26,.44,.27,.4,.64,-.1,-.23,.36,.61,.48,.21,-.22,.21,.35,.34,-.02,.48,.07,.8,-.07,.18,.1,-.36,.06,.17,.07,.1,-.02,.64,.33,.53,.46,.25,.09,.79,.05,-.04,.38,.18,.54,.66,.3,.44,-.11,.44,.57,.04,.33,.13,-.51,.28,.77,-.31,.28,-.05,.3,-.55,.08,.48,.37,.27,.4,-.19,.66,.19,.26,-.11,-.06,-.4,.21,-.23,.01,.08,-.1,.81,.28,.24,.33,.15,-.62,.65,-.13,.36,.62,.42,.43,.75,.43,-.04,.14,-.03,-.09,.2,.28,.28,.15,.72,-.12,.23,.56,.65,.17,.41,.15,.32,.24,.21,.32,.12,.58,.51,.41,.34,.27,.43,-.46,.43,.67,.67,.37,-.35,.2,.21,.15,.32,0,.21,.06,.08,.35,.84,.73,.06,.56,.02,.24,.62,.19,.46,-.05,.03,.56,-.08,-.51,-.45,-.03,.28,-.52,.3,.13,-.64,.08,.16,.07,.38,-.04,-.39,.36,-.29,-.02,.3,-.39,.49,.59,.03,.04,.08,-.13,.52,-.08,.29,.16,.07,.18,.34,.06,-.08,-.27,.63,.05,-.51,-.01,.67,.46,.81,-.23,.07,.4,-.34,-.01,.05,.05,-.03,.34,.61,-.23,.36,.11,.45,.37,.18,.18,.21,.47,.2,-.67,.58,-.19,-.08,.1,.05,-.05,.3,.67,.11,.03,.11,.35,-.26,-.08,.48,.22,.52,-.01,.59,-.27,.16,.45,.58,.34,-.05,-.41,-.22,.67,.29,.58,.26,.61,.37,-.52,.43,.18,-.47,.08,.03,.47,.54,.41,.15,.82,-.2,-.39,.66,.16,.28,.04,-.18,-.21,-.02,.02,.1,.19,.18,.51,.05,.02,-.03,.52,.4,.2,.39,-.13,-.1,-.7,.56,.47,.55,.16,-.21,.05,.11,.38,-.06,.29,.54,.25,-.23,.35,.35,.51,-.03,-.05,.48,-.03,.08,.28,.03,.27,.34,-.23,.35,.56,.65,.09,.08,-.25,-.14,.14,.02,-.6,.37,.47,.39,.39,.04,-.09,.26,.13,-.15,-.05,.53,.5,0,-.03,.04,.02,-.14,-.61,-.2,.35,-.42,.43,.26,-.12,.7,.75,-.05,.02,.06,.05,-.11,.18,-.38,-.59,.04,-.07,.37,-.06,.38,.7,-.14,-.14,-.26,.35,.25,.13,.11,-.39,.24,-.16,-.07,-.67,.26,.4,-.32,-.01,.44,.06,-.39,.24,.52,.65,.23,.09,.8,-.24,.67,.5,.18,.57,.13,-.2,-.04,.44,.17,.67,.69,.54,.12,-.49,-.49,.48,.63,-.35,.28,-.73,.15,.44,-.15,.63,.17,.14,-.19,.43,.01,.48,.32,-.17,.47,-.07,.05,-.04,.25,-.34,.43,.56,-.2,-.65,-.25,.15,-.23,.1,.59,.11,-.15,.06,-.14,.42,-.26,-.07,.31,.1,.55,-.1,.05,-.32,-.18,.5,.11,-.59,.43,.07,.07,.64,-.51,.37,-.23,-.45,.71,-.15,.15,-.63,.49,.04,-.07,.3,.49,.48,.7,-.25,.65,.13,.09,-.17,.4,.56,-.41,.14,.43,.54,.16,-.07,.05,.81,.53,.52,.05,.49,-.16,.13,-.63,.15,.01,.33,-.05,.29,.67,.26,.43,.35,.33,.03,-.14,.75,.35,.05,-.28,-.03,.13,.19,.31,-.13,.08,-.19,-.02,.17,-.06,.79,-.06,.77,.03,-.59,-.55,.21,.4,.45,.09,.59,.62,.04,.53,-.17,.02,.01,.43,.2,.15,.03,.42,.49,.69,.11,.03,.24,.24,-.19,.74,.04,.38,.33,-.29,.3,.52,.23,.26,.16,.5,.19,-.11,-.25,.51,.03,.39,.13,.69,-.06,.36,.25,.31,.21,.23,.08,.28,.18,.53,.06,.07,.49,-.22,-.02,-.3,.28,-.41,-.32,.45,-.16,.58,.76,.74,.33,.26,.64,-.59,.59,.49,.53,.38,.01,-.06,.7,.6,.5,.88,.38,.02,.81,-.14,.19,.11,.04,.07,.05,.03,-.03,-.07,-.48,-.18,-.08,-.13,-.06,-.35,.67,.66,-.5,.54,-.07,.37,.16,.42,-.01,.36,.14,.08,.69,.03,.53,.39,.1,-.03,-.25,.64,-.02,.1,.67,.18,.64,.01,.46,-.01,-.01,.41,.05,-.54,-.02,-.05,.8,-.04,-.11,-.28,.19,.59,.29,.1,.58,.12,-.06,-.2,.27,.54,.22,-.56,-.12,.19,.04,.62,.62,-.75,.22,.05,-.02,.7,.5,.51,.06,.07,.33,.01,.57,.42,.15,.04,-.36,-.08,.16,.62,-.37,.04,-.04,-.43,.36,-.05,.04,.27,-.34,.1,.66,.59,.43,.36,.27,.5,-.27,.5,.13,.17,.34,.02,.19,.33,.23,-.15,.82,.7,-.01,-.48,-.38,.02,.03,.63,.22,-.3,-.28,-.3,.02,-.27,-.02,.01,-.17,.48,-.17,.53,.32,.12,-.07,0,.22,.38,.6,.15,.37,.26,-.3,.04,.15,.49,.08,.11,-.19,.18,-.1,.04,.04,.54,.45,.03,.72,.05,.54,.13,-.01,.26,.39,.04,.66,.2,.19,.28,.2,.52,.42,.72,-.13,-.26,.72,.74,-.1,-.09,-.08,.23,.03,.59,-.01,-.02,.52,-.13,-.01,.1,-.08,-.22,.09,.08,.36,.22,.13,.27,-.15,-.05,.45,.54,-.4,-.48,.51,-.05,.31,.62,.65,.42,.15,.22,.75,.2,-.29,-.1,.36,.11,.69,-.14,.35,.18,.39,.14,.29,.26,.09,.1,.5,.04,-.66,.56,.42,-.67,.48,.46,.05,.17,.27,.35,-.07,.01,.07,-.06,.31,.15,.08,.08,-.05,-.2,.06,.34,.08,.5,.05,.25,.47,-.07,.13,.69,-.27,.51,.55,-.29,.16,.12,.54,-.32,.64,-.7,-.7,.65,-.09,.19,.03,.59,-.46,.37,.43,.12,-.17,.37,.06,.71,.28,.17,.71,.1,-.05,.12,-.15,-.05,.05,.36,.22,.4,.74,.45,.77,.18,.47,.34,.75,.22,.52,.01,.17,-.21,-.22,.56,.61,.08,-.25,.76,.06,-.15,.57,.27,.13,.56,.31,.02,.01,.4,.39,-.1,.02,.65,.52,.02,.32,.34,-.59,-.17,.24,.57,.31,.06,-.15,.59,-.1,.02,.49,.34,.07,-.08,-.2,.39,.22,-.23,.78,-.13,-.12,.78,.81,.56,.48,.33,.68,.63,.83,.44,.78,.55,.52,.07,.35,.26,.46,.55,.89,.18,-.15,-.14,.39,.57,.11,.7,.12,.27,.35,.4,.24,-.17,.38,.49,-.1,.61,.19,.13,-.03,.83,.54,.5,.58,.7,.89,.03,-.23,.61,-.06,.15,-.22,.72,-.09,-.51,.11,.49,-.3,.23,.71,-.6,.05,.41,.21,.25,.44,.14,-.11,.32,-.4,.3,-.03,-.09,.12,-.08,.46,-.31,0,.17,-.06,-.25,.08,-.06,.45,.46,.59,.28,.28,.04,-.13,.71,.2,.59,-.12,.45,.33,-.01,.65,-.03,-.15,.07,.37,-.11,.13,-.08,.24,.24,.32,.36,.64,-.24,-.01,-.1,.59,.06,-.43,.73,.55,.16,.01,.09,.42,.8,-.14,.23,-.36,.57,-.04,.71,.57,.79,.03,.66,.47,.05,.47,.63,.39,.82,.24,.02,.72,.59,.39,.74,.58,.14,.36,-.02,.03,.12,.29,.03,.28,.22,.77,-.23,.72,.12,.62,.37,-.03,.23,.01,-.36,.8,.23,-.08,.29,.08,.39,-.08,.54,.58,.66,.31,-.24,.18,.35,-.06,.01,-.65,.47,.42,.79,.43,.6,-.07,.58,.32,.79,.13,.33,.77,.32,.63,.37,.34,.52,.6,.37,-.28,.48,.19,.63,.42,-.02,.55,.52,-.18,.42,.44,-.02,-.22,.3,.36,.69,.79,.28,.44,-.33,-.08,.28,.26,.37,.5,.1,.24,.83,-.59,.8,-.25,.42,.04,.39,.38,.59,.69,.74,-.31,.2,.13,.36,-.32,-.42,.73,.11,.66,.03,.77,.19,0,-.09,.41,.4,.64,.19,.14,-.05,0,.06,.64,.69,.14,.1,.03,.47,.49,.74,.65,.82,.57,.13,.5,-.05,.75,-.12,.76,-.05,-.07,.16,.47,.08,.2,.45,-.02,.81,-.07,.69,.42,.41,.55,.42,.39,.54,.02,.41,.69,.33,-.08,-.13,.47,.52,.43,.2,.29,.51,-.13,.64,.69,.65,.77,.07,.11,.1,.4,.24,.32,.06,.83,.75,.75,.03,.76,-.05,.31,.64,-.06,.54,.02,.13,.63,-.02,.37,-.18,.52,-.21,.63,.32,-.29,.55,.6,-.2,.61,.38,-.28,.09,.3,.18,-.27,.7,.45,-.38,-.2,.39,.42,.13,-.17,.13,.31,.36,-.09,-.34,-.09,.49,.42,.67,.09,.19,-.14,-.21,.01,.48,-.6,.44,-.31,.46,.24,.32,-.13,-.23,-.03,-.19,.45,.61,.19,.43,.33,.55,.55,.71,.38,.08,.34,-.01,.08,.38,-.25,.06,.13,.17,.1,-.02,.64,.12,.51,-.68,0,-.03,.21,-.02,-.03,.53,-.37,-.25,.19,-.07,.06,.08,-.11,.64,.63,.1,.13,.04,.03,.17,.35,-.7,-.62,0,.32,.09,.24,-.05,-.35,.47,.23,.57,.86,.36,.13,.39,.17,.39,.64,.78,.4,-.17,.63,.3,.35,.5,-.66,-.23,.29,.21,.22,.79,.13,.5,.06,.41,.15,.02,0,.45,-.06,.59,-.01,-.17,.25,.66,-.04,.57,.3,-.03,.68,.63,.58,.23,.61,.18,.1,0,.02,.13,.07,.12,-.12,.31,.38,.43,.38,0,.03,.22,.53,-.14,-.1,-.08,-.16,.11,.07,.69,.3,.56,.22,.39,.35,.31,-.12,-.1,.36,.05,.7,.65,.75,.26,.33,.19,.11,.41,-.18,.08,.63,.83,.91,0,.08,.3,-.03,-.03,.12,-.14,-.11,.61,.62,.33,.37,-.14,-.36,.38,.9,.31,.11,-.01,.11,.41,.11,.18,.28,.34,.17,.49,.2,.37,.24,-.66,.58,.63,.78,.58,.17,-.29,.14,-.23,-.08,-.13,.1,.13,.03,.28,.76,.05,.67,.15,-.12,-.03,.45,-.42,-.11,.55,.01,.09,.05,.14,.29,-.06,.02,.55,.26,.02,.19,.23,-.48,.07,0,.15,.43,.33,.23,.34,.55,.27,.61,-.3,.03,-.09,.04,.2,.34,.4,.04,-.03,.21,.04,-.29,.65,.07,.4,-.54,-.12,-.33,.01,.32,.13,.12,.14,.64,-.04,.7,.12,-.37,.33,.05,-.22,.36,-.01,.41,-.24,-.29,.67,.02,.02,.31,.57,.26,.49,.23,.43,-.31,.27,.44,.15,-.07,.55,.31,.47,.09,.58,.2,.17,.28,.4,.06,.27,-.09,-.49,.05,-.44,.61,-.26,.07,.23,.23,.17,.24,.49,.55,-.02,.38,-.31,.14,.12,.06,.23,-.02,.58,.34,.2,.41,-.41,.03,-.52,.6,.23,.45,.25,.36,.58,.2,-.67,.07,-.3,-.33,-.03,.41,-.02,.37,.19,.15,.08,.7];export{a as rvalData};
