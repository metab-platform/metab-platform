const a=[-.39,.39,.51,-.02,.71,.13,.32,.06,.49,.01,.26,-.11,.04,-.62,.43,-.04,.19,.08,-.13,0,-.05,-.19,.06,.26,.62,.91,-.25,.07,.52,-.22,.48,-.29,.66,.01,.03,.22,.58,.4,.39,.49,-.07,.85,.38,-.01,.15,.26,.03,-.15,.08,.31,.14,.05,.12,.76,.42,.24,.38,.11,.44,.67,.23,.64,.8,-.02,.3,-.22,.84,.4,.02,-.02,-.08,.32,.33,-.24,.79,-.09,-.07,.23,.34,-.15,-.4,.67,-.07,.91,-.21,-.16,.85,.1,-.69,.54,.09,.09,.36,-.54,-.06,.21,-.74,-.29,-.05,.42,-.08,.79,.56,-.13,.68,.19,.13,.21,.74,.61,-.03,.21,.1,-.55,-.12,.78,.01,-.23,-.23,.66,-.01,-.07,.07,.07,.05,.61,.63,0,-.34,.66,0,-.37,-.09,.03,.1,.25,.03,.39,-.3,-.06,.8,.06,.86,.83,0,-.12,-.03,.15,.73,-.13,.78,-.1,.07,-.12,.07,.07,.21,-.14,-.32,.4,-.05,.76,.03,.27,.36,.23,.28,-.39,.11,.82,.02,-.24,-.02,-.22,.73,-.1,.03,-.01,.27,.71,.08,.09,-.01,.49,.6,.13,.03,-.05,-.03,-.32,-.15,.1,.09,.72,.65,.57,.73,.23,0,-.29,.2,.5,.69,-.03,-.45,.43,-.01,.45,.27,.08,-.07,.52,-.23,.6,.09,.27,.06,.09,-.18,-.13,.74,.54,.41,.72,.61,.69,0,-.29,.26,.32,-.06,-.03,.57,.47,.18,.05,.41,.04,.02,-.01,.16,.51,0,-.05,.22,-.29,.07,.12,.18,-.12,.04,.05,.43,.25,.78,.06,.12,.37,.08,.51,.06,.07,.36,.8,.13,.64,-.2,.88,-.03,.62,-.09,-.42,.6,.47,.72,.09,.03,.23,.47,.09,.16,-.2,.34,-.35,.48,.52,-.14,.61,.2,-.03,-.06,.32,.71,-.26,.25,.41,-.01,-.37,-.01,.24,-.1,.61,-.28,-.13,-.05,.49,.13,.54,.24,-.05,.76,-.12,-.01,0,.3,.24,.22,.08,.46,.11,.91,-.16,.47,.85,.04,.51,.78,-.03,.11,.56,-.47,.65,.27,.17,-.24,-.02,-.21,.48,-.27,-.25,.43,.39,-.13,-.04,.63,.51,.07,.34,.3,.33,.8,-.22,.1,.49,-.49,.38,.33,-.1,.54,.53,.54,.11,.47,.19,-.09,-.42,.27,.66,.21,.12,.31,-.29,.47,.11,.12,.24,.25,.91,-.07,.26,.09,.07,.03,.1,.03,.44,-.24,-.01,.59,.65,.51,.06,0,-.17,-.2,.62,-.4,-.17,0,.08,-.17,.39,.49,.64,.13,.04,.47,.51,.8,.74,.47,-.45,-.15,.53,.1,-.03,.84,.69,.17,-.18,.04,.67,-.06,-.01,.5,.72,.6,.06,.36,-.34,-.03,.09,.64,-.06,.08,.66,-.39,.8,.74,.54,.77,.82,.81,.11,.04,.43,.6,.76,.2,-.47,.12,.51,-.75,.26,-.07,.07,-.05,.67,.2,.35,.68,.64,-.6,.31,-.08,.23,-.26,-.2,-.66,.69,.21,.64,.28,-.03,.26,.67,.31,-.04,.55,-.17,.76,.55,.7,.44,.01,.32,.47,-.2,.43,.4,.06,-.11,.11,-.24,.6,.79,.11,-.09,.34,-.1,.32,.08,.56,.68,.8,-.07,.16,.56,.66,.19,.75,.24,.79,.13,-.01,-.06,-.11,.17,.27,.94,-.14,.62,.09,-.04,.5,-.01,.12,.14,.01,.57,.26,.12,-.12,-.11,-.02,.06,.28,.31,.07,.07,-.05,.17,.03,.11,-.2,-.05,.09,.13,.54,.37,-.2,.68,.56,.41,.53,-.06,-.41,-.09,-.28,-.05,.52,-.04,.52,.01,-.03,-.12,-.1,-.08,-.03,-.15,.5,.53,.12,-.32,.82,.6,-.08,-.39,.18,.36,-.24,.02,.86,.41,.53,.55,.61,.67,-.08,.58,-.11,.05,.03,.56,.03,-.66,.56,.59,.38,-.09,.36,.79,.61,.1,.48,-.21,.06,-.17,0,.36,.15,.57,.12,.07,-.04,-.04,.63,-.29,-.04,-.08,.05,-.07,.23,-.09,.29,-.37,.17,.15,.83,-.27,-.01,-.52,-.35,.19,.32,.38,.68,-.1,-.16,-.18,.12,.72,-.39,0,.23,.83,.07,.89,.2,.52,-.1,-.75,.16,.68,.67,-.04,.39,-.11,-.04,0,.62,.45,.74,.07,.18,0,.09,.39,.79,.77,.63,-.04,-.13,-.23,.43,-.29,.7,.79,-.35,.09,0,.14,.38,.77,.14,.16,-.43,.88,.81,-.09,-.12,-.12,.15,-.04,-.04,.04,.06,.13,.56,-.51,.91,.18,.57,.54,-.06,-.06,-.22,.56,-.12,-.14,.74,-.16,.07,-.11,-.12,-.11,.33,0,-.18,-.04,.14,.74,.55,-.12,.66,.51,-.31,-.32,-.31,.63,-.57,.06,.65,-.01,.46,.04,.61,-.12,.08,-.05,.45,.3,-.32,.08,0,-.4,.66,.54,.19,.5,-.24,.11,-.19,.49,.67,.01,.15,.31,.54,-.15,.18,-.33,.76,.27,.4,.51,.77,-.03,-.01,.26,.04,.25,.65,.04,.27,-.32,.25,-.02,.7,.2,.57,-.07,-.18,.84,.45,.72,.51,.14,.18,-.22,-.15,.26,.64,.31,.86,-.38,.62,.81,-.2,.46,.2,.3,-.25,.73,.43,.75,.15,-.29,.12,0,.02,-.17,.64,-.12,.67,.07,-.56,-.04,.13,.74,-.09,.39,-.02,.6,-.06,.68,-.14,.11,-.02,-.12,.18,.68,.22,-.13,-.04,-.04,-.13,.15,.16,-.22,.41,.67,.09,.02,-.31,.65,.24,-.16,.48,-.08,.02,-.16,.67,-.06,-.02,.31,.09,.07,.29,.02,.75,.72,.11,-.34,.12,.03,-.34,.06,.28,-.12,-.1,-.05,.11,.27,.13,.1,.42,.16,-.19,.06,-.16,.25,.11,.79,.55,.05,.27,.57,.71,-.14,.82,-.39,-.41,.44,.68,.04,-.49,-.16,.38,.71,.2,-.12,.09,-.06,-.05,.53,.2,.13,-.03,.08,-.09,.07,-.18,-.25,.62,.39,-.11,.01,-.06,-.09,.11,0,-.31,.48,.72,.66,-.03,.62,.77,.14,.07,.44,.61,.82,.75,-.64,.3,0,.49,.82,-.13,.24,.16,.7,.1,.06,.01,.53,-.04,.11,-.01,0,.42,.09,.16,.23,.84,.22,.85,.03,.77,.03,-.14,-.03,.74,.09,.05,-.07,-.49,-.07,.01,-.04,.32,-.59,1,-.21,.26,.4,.17,.54,.78,-.03,-.21,.15,-.07,.01,-.31,.02,-.06,.36,.38,-.24,.29,-.25,-.13,.27,0,.04,.22,.14,.1,.08,0,-.12,.1,.02,-.18,.13,-.07,-.13,-.1,.52,.29,-.01,.14,-.26,.19,-.26,.08,.16,.85,.02,.33,.48,.01,.42,.58,-.02,.03,-.03,-.02,-.04,.15,.51,.13,.44,.66,-.09,.34,0,-.14,.62,0,.05,-.16,.25,.01,-.26,-.22,.44,-.01,.32,.23,-.02,.5,-.31,-.29,.18,.13,.75,-.1,-.1,-.18,.71,.1,.52,-.33,.4,.4,-.06,.36,.29,.38,.51,.09,.47,.51,0,.58,.77,.03,-.14,-.02,.08,.19,.19,.11,-.15,-.15,.83,.28,-.12,.69,-.17,.33,.86,-.01,.48,.78,.72,-.08,-.18,-.23,.42,.64,.57,.32,.11,.59,.07,-.03,.32,.3,.01,-.08,-.04,-.08,.67,.31,.8,-.25,.49,-.28,-.02,-.26,-.01,-.02,.47,.06,-.01,.01,.71,.69,-.19,.12,.71,.83,.15,.11,.05,.85,-.08,-.06,.25,.84,.01,.73,.14,.45,-.31,0,-.05,.25,.75,.06,.27,0,.17,.03,-.07,.57,.29,-.01,.18,.67,.17,.78,.72,.71,.31,.04,-.1,-.51,.48,.65,.13,.59,.12,.64,.08,-.07,-.1,.01,-.11,-.32,0,.71,.59,.14,.44,.39,-.25,-.35,.2,.71,-.15,-.22,.74,.71,-.29,-.23,.64,-.19,.67,.48,.8,.03,.49,.55,.01,.57,.07,-.25,-.25,.54,.42,.07,.92,.58,-.01,-.07,.75,.39,.02,.04,.11,.08,-.13,.39,.02,-.16,-.2,.66,.17,.65,.43,.76,-.02,-.07,-.01,.59,.87,.55,-.05,.04,-.16,-.17,.35,.65,.02,.89,-.13,.15,.04,.04,.25,.57,-.23,-.07,.73,-.66,.67,.19,-.09,.05,.38,-.3,-.35,.29,-.08,.71,-.02,.82,.24,.29,-.27,.49,-.35,-.14,-.07,.81,.01,.48,.28,.34,-.04,.62,.04,-.03,.02,-.16,.81,.79,.62,-.16,.36,.11,.65,.52,.58,.77,.63,.11,.22,.13,.45,.17,.08,.67,-.13,.5,.58,-.61,.52,.24,.05,.22,.43,.66,.04,.38,.23,-.1,-.38,.13,.19,.49,.79,.43,-.18,.01,.61,-.21,.42,.34,.18,-.14,-.03,-.05,.6,.16,-.16,.13,.45,.12,.09,.04,.64,-.15,-.14,.3,.36,.5,.61,.27,.39,.21,.42,.02,.17,.5,.68,.04,-.09,-.32,.03,.62,.4,.08,-.16,-.44,.04,.15,.42,.38,-.28,-.27,-.34,.25,-.4,0,-.27,-.13,.04,-.05,-.07,.15,-.03,.6,.75,.13,.51,.47,.56,.64,.13,-.04,.21,.58,-.28,.05,-.12,-.18,.49,.71,.37,.47,.31,-.4,-.04,.56,.59,.17,.32,.05,.55,.04,-.1,.15,.06,.45,.11,-.04,.2,-.35,.14,.45,-.05,-.09,.72,-.25,.14,.8,.25,.79,.84,.01,-.28,.24,.07,.28,.44,-.24,.87,.01,.01,-.08,-.01,.18,.34,-.4,-.32,.06,.64,.8,.69,.68,.25,.02,-.01,-.13,.21,.21,-.14,.46,.76,.21,-.01,.09,.37,.33,-.14,-.42,-.06,.67,-.4,.76,.51,.58,0,.34,.42,0,.56,-.01,.67,.53,-.17,.01,.52,-.15,.58,.47,.12,.06,.54,.05,.03,.12,.48,-.06,-.02,.75,.45,-.19,.38,.71,.47,.02,.46,.55,.4,.01,.27,.04,.18,.8,-.15,.42,.45,.11,.2,.41,.19,-.1,.35,.72,-.05,.2,-.18,.19,.65,.32,.57,.62,-.16,.14,.58,.57,.62,.64,.2,.49,.71,.56,.62,.07,.21,.69,-.13,.79,.34,.86,.53,.01,.19,.88,.24,.66,.6,.08,-.16,.5,.61,.69,.09,.49,.08,.42,-.02,.64,.5,.71,.88,.06,.37,.13,-.16,.58,.43,-.28,-.06,.56,.64,.5,.25,.24,.31,.5,.57,.77,.11,-.14,.14,.29,.14,.66,.09,.13,.57,.15,.58,.79,.41,.7,.51,-.18,.36,.4,.39,.41,.48,-.08,.12,.68,.36,.49,.81,.42,.81,.03,.83,-.19,.52,.08,.19,0,-.03,.12,.7,.53,.24,.63,0,.39,-.09,.02,.59,.7,.78,.7,.91,.25,.2,-.14,.12,.37,-.12,-.15,.92,.39,.83,.2,.41,.2,-.01,.32,.05,.73,.07,.08,.63,.63,.56,.59,-.23,.5,.42,.59,.38,-.35,.74,.31,-.37,.85,-.07,.64,.02,.48,.65,-.08,.85,-.04,.05,.31,.1,.28,.3,.26,-.02,-.02,.16,.29,-.15,0,.69,.59,.36,-.05,.8,.33,.34,.74,.96,.77,0,-.05,.26,.9,-.14,-.32,-.05,.02,.06,.1,.62,.53,.27,-.05,.62,.4,-.15,.61,.15,.8,.34,.14,-.28,-.11,.01,-.17,.24,.32,.47,.52,.27,-.06,.42,.14,.78,.01,.22,-.22,.03,.54,-.26,.5,.45,.6,.55,.03,.58,.32,.83,-.25,.19,-.03,.69,-.52,-.12,.14,-.44,-.05,-.25,.03,.01,-.15,.03,.68,.59,-.04,.75,.6,-.07,.43,-.24,-.29,-.4,.06,.72,.64,.79,.49,-.15,.61,.44,.62,.56,.57,.39,.74,.66,.68,.45,.46,.37,-.15,.58,.8,.6,.1,-.15,.22,.26,.8,.15,.53,-.01,.66,.61,.71,.47,.59,.68,.66,-.06,.67,-.01,-.19,.44,.11,-.12,.16,.67,.51,.78,.63,.22,.6,.36,.53,.07,-.1,.1,.04,.01,-.05,.31,-.32,-.05,-.16,.79,-.06,.58,-.22,-.12,.33,.07,-.17,-.1,.66,-.03,.14,.53,.22,.45,.79,-.29,-.34,-.39,.03,.71,-.07,-.06,.72,.57,.23,-.18,.76,.26,.96,0,.67,.08,.52,.45,-.06,.33,.33,-.06,-.13,-.53,-.17,-.1,.79,.82,.7,.43,-.21,.16,.82,.46,.41,.09,-.05,-.04,.96,.55,-.03,.52,.81,.56,.28,.27,.69,.81,-.13,-.04,.45,.4,.59,.07,-.17,.3,.24,-.08,-.06,.59,-.23,-.01,.85,.27,.03,.76,.24,-.06,-.12,.79,-.51,.51,.1,0,-.14,-.01,.5,.26,-.05,-.01,.19,.04,.6,.74,.48,-.17,.42,.53,.74,.89,.82,.07,.11,.44,.86,.18,.1,-.12,-.08,.11,.74,.86,-.24,.67,.03,.24,.62,.22,.33,-.03,.19,-.35,-.2,.15,.06,.7,.64,.57,.59,.34,0,.45,.11,.19,-.03,.13,.01,.72,.66,.25,-.49,-.7,.46,.57,.31,.61,.25,.85,.41,.05,.7,-.74,.83,.74,.72,.05,.8,.09,.72,.48,.18,.56,.46,.84,.35,.67,.86,.51,-.17,.66,.19,.44,-.1,.68,.86,.84,.75,.8,-.14,.76,.47,.11,-.45,.78,.05,.6,-.41,-.03,.78,.54,.78,.77,-.14,-.01,.04,-.14,.67,.25,.51,.46,.92,.17,-.18,.11,-.13,-.11,-.02,.61,.2,.22,.76,.07,.16,.54];export{a as rvalData};
