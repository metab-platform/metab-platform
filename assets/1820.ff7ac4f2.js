const a=[-.26,.27,.82,-.09,.71,.17,.21,.02,.17,.29,.61,.15,-.15,-.68,.7,-.06,.26,-.04,-.33,-.02,-.01,-.32,.12,.42,.51,.61,-.22,.17,.2,-.21,.47,-.18,.78,.19,.31,.17,.74,.47,.19,.62,-.03,.63,.65,-.12,-.01,.29,.02,.02,-.16,.2,.21,-.01,.28,.67,.54,.52,.47,.21,.04,.63,.6,.74,.71,-.09,.03,-.27,.72,.49,-.13,-.11,.01,.44,.4,-.24,.62,.13,-.2,.54,.5,.06,-.47,.45,-.06,.5,-.08,-.23,.57,.1,-.64,.55,.26,.06,.25,-.71,.22,-.06,-.7,-.11,-.13,.5,-.14,.77,.52,-.16,.53,0,-.32,-.27,.75,.56,0,.35,-.01,-.68,.03,.51,.25,-.31,-.14,.49,-.19,-.24,.46,-.28,.04,.49,.61,-.23,-.18,.71,.04,-.22,-.04,.21,.37,-.28,.12,.08,-.2,-.02,.72,.1,.45,.6,.11,-.03,.09,-.13,.75,-.11,.78,.16,.07,.1,-.01,.23,-.24,.1,-.12,.62,.06,.63,-.03,.25,.29,.43,.5,-.18,.12,.61,.07,-.14,.01,-.25,.48,-.19,.04,-.2,.28,.71,-.08,.11,.11,.61,.52,-.1,.21,.22,.22,-.08,-.15,.31,.07,.6,.79,.88,.66,.45,.03,-.18,.25,.64,.71,.06,-.43,.71,-.03,.25,.44,-.21,-.03,.5,.04,.62,.21,.3,.01,.08,-.15,-.38,.44,.4,.44,.77,.38,.73,.08,-.14,.46,.07,-.03,-.17,.35,.8,.11,.16,.46,.16,.01,.05,.32,.5,-.1,-.1,.18,-.03,.22,.12,.13,-.03,.16,-.32,.52,.15,.74,-.08,.14,.51,.11,.62,.07,.03,.59,.72,-.09,.5,-.14,.54,.19,.44,-.02,-.29,.73,.81,.46,-.1,-.05,.39,.89,-.18,.25,-.36,.39,-.61,.2,.68,-.15,.66,.21,-.13,.03,.28,.69,.01,.09,.67,.34,-.12,.13,.37,.16,.75,-.09,-.15,.29,.26,.01,.58,.05,.36,.54,-.09,-.29,.06,.29,.36,.1,.15,.78,.4,.47,.04,.52,.68,-.06,.16,.72,-.29,.14,.17,-.63,.4,.27,-.05,-.39,-.05,-.18,.48,-.06,-.04,.5,.64,-.15,-.16,.7,.87,.17,.23,.61,.02,.75,-.21,.26,.18,-.5,.43,.3,-.04,.84,.67,.31,.12,.09,-.3,.02,-.63,.02,.75,.41,-.08,-.02,-.2,.09,.02,.49,.26,.07,.54,-.06,.2,.04,.11,.05,.09,.01,.39,-.03,.01,.83,.81,.92,-.17,.16,.12,.08,.77,-.43,-.19,-.26,.08,-.09,.01,.86,.32,.24,.14,.47,.84,.57,.45,.75,-.63,-.29,.9,.2,0,.67,.62,.26,-.49,.18,.65,-.2,-.09,.06,.73,.75,-.01,.18,-.24,-.13,-.04,.44,.22,.08,.64,-.08,.76,.77,.79,.65,.47,.47,-.09,.29,.54,.76,.69,-.1,-.48,.52,.37,-.79,0,-.11,.02,-.26,.74,.09,.55,.72,.81,-.64,.39,.02,.21,-.43,.01,-.41,.71,-.19,.73,.62,.1,.16,.81,.82,.3,.87,-.36,.67,.62,.62,.31,.28,0,.47,-.33,.34,.73,.15,.14,-.24,-.26,.81,.68,-.05,-.16,.76,-.08,.17,-.18,.75,.48,.58,-.2,-.01,.87,.68,.49,.78,-.05,.54,.02,.3,-.23,.33,.13,.37,.52,-.06,.82,.15,-.04,.28,.07,.18,.38,.12,.7,.21,-.07,-.15,-.12,.08,.19,.31,.42,-.3,.2,.17,.22,-.22,-.16,0,-.21,.1,-.12,.67,-.15,-.22,.73,.86,.74,.57,-.15,-.39,-.23,-.37,-.17,.6,-.26,-.07,-.01,-.2,-.19,-.06,-.03,.35,-.05,.75,.77,.21,-.29,.58,.78,-.24,-.3,.26,.08,-.01,.3,.61,.08,.62,.54,.8,.52,-.3,.7,-.15,.16,.06,.78,-.04,-.62,.8,.72,.4,.31,.77,.67,.76,.34,.54,-.24,.17,-.13,.15,-.22,0,.64,-.02,.33,-.21,-.04,.79,0,-.15,.13,.04,-.09,.44,-.04,.04,.02,.14,.12,.69,-.18,-.16,-.44,-.26,.33,.44,.51,.82,0,-.03,-.2,.11,.67,-.35,.19,.35,.67,-.37,.54,.03,.6,-.04,-.73,0,.82,.81,.28,.41,-.15,-.32,.04,.76,.67,.7,.26,.26,.2,.07,.01,.48,.56,.29,.14,-.13,-.26,.51,-.11,.67,.66,-.41,.15,-.11,-.28,.52,.66,.09,.26,-.55,.58,.78,-.06,-.04,-.29,-.15,-.29,.03,-.25,.49,.23,.65,-.47,.46,.07,.38,.61,.18,-.06,-.13,.48,.09,-.21,.82,-.07,.28,.44,-.03,-.16,-.11,.22,-.21,-.17,.09,.71,.73,-.05,.58,.41,-.24,-.22,-.18,.63,-.52,.36,.82,.09,.38,.11,.7,-.11,.2,-.08,.44,.72,-.22,-.23,-.11,-.34,.17,.68,-.03,.45,-.04,-.04,-.06,.05,.52,.31,-.04,.16,.68,.1,.4,-.3,.78,.42,.18,.67,.66,-.2,-.17,.07,-.24,-.01,.67,.12,.19,-.28,.25,.03,.7,.28,.79,.04,.11,.59,.8,.69,.37,.45,.18,-.06,-.44,-.06,.67,.42,.7,-.17,.81,.44,-.39,.5,-.17,.22,-.61,.83,.63,.37,.5,-.24,.22,-.07,.02,-.16,.8,-.33,.48,-.09,-.75,-.26,0,.71,.07,.06,-.04,.58,-.09,.71,-.13,.34,-.2,.06,-.12,.7,0,-.09,-.03,-.12,-.07,.26,.26,-.26,.72,.66,-.24,-.12,-.04,.76,-.16,-.19,.43,.03,-.11,-.18,.32,-.09,.02,.23,.25,.13,.26,.01,.62,.76,-.06,-.35,-.19,-.1,-.39,.23,-.18,-.15,-.3,.21,-.21,.19,-.02,.21,.05,.2,-.1,.19,-.23,.79,.09,.7,.62,-.02,.19,.2,.79,-.09,.65,-.6,-.57,.51,.62,-.14,-.35,-.28,.59,.7,.56,-.21,.02,-.07,.06,.68,.06,.18,.11,.06,.01,-.23,-.06,-.2,.71,.29,.16,.03,-.2,-.07,-.02,-.19,-.37,.49,.79,.74,.12,.77,.58,.18,.31,.71,.59,.69,.52,-.82,.39,-.19,.53,.67,.09,.08,.06,.42,-.09,.17,.01,.81,.11,-.06,-.07,.09,-.07,-.04,0,.11,.7,-.07,.63,.4,.73,.25,-.11,-.01,.59,.03,-.09,.28,-.62,-.23,-.34,-.23,.55,-.73,.44,.07,-.12,.16,.27,.86,.75,-.07,-.47,.06,.45,-.05,-.25,.16,.18,.39,.46,-.07,.17,-.04,-.14,.07,-.01,.04,.03,.22,-.11,-.1,.11,.08,.13,.16,-.05,.18,-.23,.08,-.12,.61,.29,-.24,.07,-.14,.51,-.27,-.27,-.01,.55,.1,.37,.51,.08,.03,.86,0,.2,-.13,-.04,-.13,.32,.19,-.04,.58,.67,.08,.31,-.08,.06,.8,-.37,-.28,0,.16,.08,-.24,-.17,.53,.24,.73,.33,.32,.18,.05,-.3,-.06,.04,.71,-.23,.05,.12,.43,.29,.15,-.16,.37,.72,-.16,.2,.21,.45,.75,-.04,.45,.76,-.07,.55,.7,.12,-.14,.06,-.13,.51,-.21,.06,-.33,-.31,.5,-.17,-.37,.77,-.15,.71,.58,-.04,-.01,.82,.74,-.13,-.38,-.23,.26,.72,.28,.62,.08,.75,0,-.27,.33,.45,-.11,-.25,-.25,-.24,.46,.19,.67,-.13,.56,-.12,.19,-.26,.01,-.11,.38,.16,-.12,-.17,.74,.76,-.36,.14,.68,.76,-.13,.13,-.2,.65,.18,.02,.43,.67,.08,.62,.42,.81,-.3,.13,-.26,.31,.65,.12,.1,.06,0,.24,.09,.43,.59,-.14,.2,.72,.36,.74,.62,.68,.53,.03,.33,-.66,.18,.61,.06,.66,.06,.32,-.14,-.06,-.13,.14,-.22,-.41,.21,.69,.69,-.19,.77,-.16,.07,-.29,.06,.84,.13,-.2,.8,.78,-.43,0,.63,.19,.86,.19,.71,-.17,.77,.46,.08,.88,.06,-.32,-.24,.59,.03,-.19,.51,.45,.14,-.03,.54,.57,.06,.12,.28,-.05,-.36,.16,.14,-.36,-.3,.82,.11,.7,.76,.42,.08,-.06,.09,.69,.58,.84,-.15,.09,-.04,.05,.2,.63,.11,.68,-.08,-.19,.22,.22,-.1,.44,-.46,-.12,.78,-.61,.77,-.07,-.12,-.23,.37,-.27,-.22,.35,.08,.66,-.16,.71,.21,.35,-.12,.51,-.16,-.14,-.16,.51,.09,.63,.05,.1,.04,.8,.05,.02,.11,-.15,.58,.72,.59,-.19,.15,-.01,.81,.45,.61,.71,.49,-.06,.04,.07,.54,.44,-.1,.75,-.06,.29,.76,-.72,.31,-.11,.16,.28,.66,.69,.1,.16,-.07,-.4,-.34,.08,-.12,.66,.66,.73,-.37,-.15,.87,-.17,.24,-.24,.09,-.17,-.03,-.01,.82,.44,-.33,-.4,.26,.48,0,.06,.68,-.07,-.22,.48,.27,.74,.47,0,.32,.04,.32,.14,.17,.68,.6,-.15,.07,-.26,.17,.7,.22,.02,-.14,-.36,.38,.41,.67,.12,.1,-.15,-.23,.29,-.22,-.12,-.03,.04,-.1,.2,.69,.12,-.06,.55,.73,.17,.71,.11,.47,.71,.37,-.07,.07,.74,-.36,.1,-.13,.16,.79,.52,.52,-.06,.35,-.48,-.14,.84,.75,.29,.08,-.09,.67,.11,-.1,.38,-.04,.42,.08,-.07,.22,-.01,.04,.63,-.22,-.09,.59,-.03,.12,.76,.29,.6,.6,.04,-.06,.43,.04,.38,.52,-.21,.6,.1,.03,-.06,-.19,-.08,.6,-.42,-.23,.2,.47,.68,.61,.66,-.06,-.03,.03,-.04,.04,.41,-.12,.51,.71,.33,-.26,.49,.66,.26,-.3,-.28,-.21,.75,0,.74,.72,.5,-.2,.17,.56,-.12,.3,-.02,.59,.42,.17,-.03,.46,-.2,.86,.39,.03,.03,.3,-.01,0,.11,.67,.03,.25,.65,.22,-.52,.65,.74,.26,.07,.45,.52,.1,-.1,.5,-.21,.08,.61,-.21,.48,.45,.14,.3,.31,.46,.01,.16,.74,.01,.15,-.19,-.16,.7,.22,.21,.77,-.04,.18,.79,.45,.8,.82,.23,.83,.76,.83,.16,-.15,.11,.34,.21,.39,-.09,.65,.74,.1,.22,.57,.41,.69,.3,.14,-.2,.68,.32,.26,.15,.51,.35,.53,.12,.77,.8,.34,.62,.12,.81,.15,-.36,.65,.54,-.24,.14,.9,.49,.65,.3,.5,.18,.85,.68,.71,-.08,-.26,.22,.08,-.09,.66,.16,.19,.65,-.31,.22,.2,.39,.69,.81,-.15,-.4,.77,.29,.38,.8,-.21,-.15,.46,.49,.35,.56,.37,.73,.16,.72,-.28,.61,-.11,.02,-.06,.22,-.01,.05,.77,.2,.59,.18,.51,-.09,.08,.86,.69,.6,.7,.55,-.14,.03,.06,.36,.47,-.03,-.25,.54,.68,.53,.03,.63,-.15,-.17,.47,.27,.49,-.05,.17,.71,.73,.84,.79,.13,.69,.53,.7,.42,-.45,.55,.11,-.3,.58,-.2,.75,-.14,.81,.73,.13,.64,-.31,.23,.45,.36,.05,.39,.26,-.02,-.12,.13,.34,-.07,-.07,.75,.87,.52,.03,.59,.6,.62,.57,.49,.72,-.03,-.11,-.18,.55,.12,-.52,-.08,.33,.35,.12,.81,.77,.5,-.25,.62,.55,-.18,.33,-.01,.62,.78,.5,-.29,0,-.06,-.15,.22,.23,.8,.43,.89,-.11,.37,.34,.73,.09,.05,-.22,-.06,.91,-.04,.78,.46,.79,.75,.14,.56,.79,.72,-.25,.12,-.11,.29,-.41,-.25,-.05,-.76,-.12,-.32,-.08,.03,-.21,.09,.6,.62,-.18,.56,.78,-.4,.76,-.09,-.34,-.59,-.14,.82,.76,.73,.37,.07,.56,.37,.49,.5,.3,.03,.81,.77,.57,.53,.42,.31,.08,.57,.52,.83,.11,-.2,-.18,.07,.65,.43,.58,.14,.56,.81,.68,.78,.8,.69,.78,-.02,.68,-.06,-.31,1,.21,-.21,.1,.79,.86,.74,.29,.17,.54,.42,.79,.25,.04,.08,-.12,.09,.09,.78,-.31,.45,.15,.75,-.24,.33,-.02,.01,-.27,-.11,-.23,-.2,.64,.05,.16,.47,.19,.14,.52,-.05,-.34,.06,0,.72,-.1,-.01,.66,.6,.56,.13,.66,-.14,.58,-.05,.73,.23,.44,.38,.02,.37,.07,.41,.05,-.64,-.34,-.22,.64,.69,.7,.62,-.29,-.18,.54,.4,.21,.17,-.21,0,.58,.72,-.07,.61,.59,.15,.33,.19,.78,.67,-.28,-.13,.35,.55,.55,-.01,-.36,.47,.19,-.13,-.02,.78,-.2,.11,.58,.21,-.11,.61,.01,.15,-.16,.76,-.32,.5,.12,-.04,-.16,.1,.6,.36,-.01,.12,.25,-.06,.75,.77,.72,.02,.74,.74,.65,.47,.7,-.03,.11,.4,.56,.08,.29,.12,-.25,.15,.72,.62,-.22,.55,-.01,.61,.73,-.06,.15,.14,.04,-.49,-.1,-.15,-.02,.53,.77,.36,.85,.51,.03,.39,.48,.23,.29,-.22,.34,.59,.67,.11,.02,-.61,.37,.6,.33,.84,.37,.69,.21,0,.71,-.57,.61,.76,.76,.21,.61,.33,.72,.4,.06,.29,.75,.59,.63,.74,.63,.67,.04,.74,.32,.35,-.19,.73,.63,.63,.62,.66,-.2,.73,.63,.31,-.65,.61,.12,.78,-.18,.02,.7,.33,.68,.77,-.17,.06,-.03,-.02,.81,0,.7,.43,.5,-.33,-.35,.15,-.01,-.07,.13,.28,.07,.05,.69,.15,-.03,.53];export{a as rvalData};
