const a=[-.26,.47,.66,-.04,.75,-.03,.17,-.09,.33,.17,.32,-.01,-.1,-.73,.55,.03,.35,-.07,-.23,-.05,.01,-.12,.01,.43,.65,.77,-.15,-.11,-.07,-.04,.46,-.26,.65,.08,.21,.11,.82,.69,.27,.48,-.05,.75,.18,.06,.13,.58,.08,-.2,-.02,.19,.34,.09,.33,.84,.26,.39,.3,.03,.36,.57,.12,.63,.73,-.11,.02,-.02,.78,.63,.04,.01,-.07,.46,.21,-.22,.81,-.01,-.05,.09,.75,-.24,-.39,.5,.03,.7,-.18,-.24,.61,.01,-.7,.69,-.07,-.01,.1,-.57,.09,-.21,-.63,.03,-.28,.19,-.05,.8,.45,-.13,.48,-.02,-.03,.09,.6,.58,.09,.23,.03,-.52,-.15,.8,.1,-.11,-.47,.61,-.04,-.13,.25,-.12,-.21,.41,.74,-.2,-.12,.8,-.25,-.46,-.09,.11,.32,.04,-.12,.23,-.06,-.03,.69,.09,.59,.61,.02,-.04,-.02,-.22,.55,-.12,.77,0,.01,.08,-.21,-.13,-.15,.09,-.13,.53,-.18,.66,0,.16,.13,.07,.36,-.24,-.18,.68,.07,-.2,-.15,-.32,.38,-.03,.03,.05,.15,.74,.03,-.03,.01,.69,.36,-.11,.23,.22,-.01,-.23,-.11,.01,.04,.49,.58,.72,.57,.36,.09,-.3,.45,.42,.82,.13,-.45,.28,-.26,.25,.09,-.17,-.19,.69,-.05,.77,.04,.06,.02,-.11,-.08,-.06,.45,.34,.37,.77,.42,.8,-.14,-.13,.2,.07,-.09,-.06,.57,.63,.08,.08,.55,.26,-.04,.14,.23,.69,-.27,-.3,.02,-.21,.09,.2,.1,-.08,0,-.34,.23,-.02,.71,-.14,.05,.42,.15,.73,.16,-.13,.35,.71,-.18,.44,-.21,.67,.17,.5,.02,-.05,.8,.67,.93,-.1,.11,.14,.56,-.03,-.03,-.02,.58,-.5,.14,.34,.02,.79,.12,-.11,-.13,.03,.57,-.17,.03,.2,.18,-.26,.19,.12,-.03,.69,-.21,-.06,.02,.23,0,.59,-.09,.18,.64,-.14,-.12,.03,.28,.11,.26,-.11,.65,.21,.67,-.12,.61,.78,.05,.14,.6,-.21,-.05,.2,-.54,.46,-.08,.01,-.22,.09,-.13,.17,-.24,-.25,.3,.22,-.28,-.01,.83,.6,.05,.11,.1,.09,.63,-.33,.17,.12,-.32,.62,.29,-.02,.62,.75,.43,.13,.05,-.01,-.13,-.52,.24,.8,.1,.09,.13,-.36,.31,-.2,.07,.07,.07,.63,.04,.1,.11,-.03,.15,.05,.07,.17,-.1,.02,.57,.63,.63,-.14,.05,-.13,-.15,.68,-.3,-.12,-.14,-.22,-.21,-.04,.63,.4,.02,.04,.56,.61,.71,.63,.64,-.41,-.23,.66,.03,.18,.73,.53,-.01,-.43,.06,.72,.04,-.11,.27,.75,.7,.04,.02,-.5,-.33,-.21,.61,.08,-.02,.81,-.34,.63,.71,.5,.62,.64,.58,.07,.24,.22,.66,.52,.05,-.29,.16,.44,-.74,-.16,-.05,-.19,-.11,.83,-.02,.41,.75,.52,-.56,.13,.02,.21,-.36,-.19,-.46,.84,.1,.81,.46,.22,.04,.54,.37,.1,.74,-.06,.58,.76,.75,.19,.26,-.06,.33,-.31,.17,.57,.08,.01,-.13,-.35,.68,.75,.19,-.02,.47,-.29,.03,-.13,.66,.44,.75,-.21,-.25,.5,.61,.16,.69,0,.64,-.1,.3,-.14,.05,-.03,.05,.71,-.14,.7,-.1,-.05,.35,.07,.18,.25,.09,.43,.08,.16,-.19,-.15,-.01,.05,.09,.15,-.36,.07,.08,-.06,-.18,.16,-.27,-.24,-.06,.19,.71,-.18,-.03,.8,.64,.7,.46,-.19,-.4,-.39,-.17,-.07,.88,.06,.14,-.15,.04,-.16,-.17,.08,.06,-.11,.59,.66,.28,-.34,.78,.7,-.09,-.49,.08,.19,-.26,.22,.65,-.01,.45,.69,.68,.61,0,.82,-.1,.02,-.01,.62,-.15,-.61,.48,.66,.27,0,.47,.83,.69,.21,.48,-.14,-.17,-.35,.22,-.19,.11,.8,-.03,.04,-.24,.11,.67,-.21,.07,.03,-.21,-.23,-.15,-.03,-.12,-.08,.05,.03,.66,-.23,-.12,-.33,-.31,.07,.28,.43,.55,-.2,-.2,-.25,.15,.55,-.35,-.11,.28,.74,-.32,.73,.09,.43,.04,-.64,-.12,.7,.55,-.03,.77,-.05,-.19,-.02,.69,.2,.83,-.04,.29,.22,.09,-.01,.54,.63,.38,.01,-.08,-.06,.32,-.43,.62,.81,-.41,.01,.04,-.32,.29,.59,-.12,.25,-.45,.73,.65,-.18,-.12,-.29,-.24,-.22,-.02,-.13,.32,.37,.61,-.49,.71,-.04,.27,.51,-.07,-.17,-.22,.42,-.03,-.13,.69,-.25,.19,-.12,-.19,-.11,-.06,.02,-.17,-.12,-.05,.64,.81,-.08,.49,.38,-.27,-.32,-.05,.63,-.5,.18,.63,.06,.27,-.16,.79,-.18,-.06,-.18,.52,.34,-.36,.12,.01,-.28,.44,.8,-.01,.38,.03,-.03,-.16,.13,1,-.02,-.05,.35,.44,-.02,.11,-.14,.59,.31,.33,.65,.72,-.27,-.07,.1,-.3,-.04,.74,.11,.06,-.23,.26,-.08,.73,.01,.63,-.18,0,.73,.63,.58,.22,.04,.04,-.18,-.26,-.17,.55,.6,.7,-.24,.73,.58,-.59,.25,-.13,.26,-.19,.69,.72,.48,.16,-.18,.03,-.04,-.01,-.25,.61,-.2,.49,-.17,-.56,-.14,.06,.69,.14,.16,-.18,.56,-.1,.82,-.03,.25,-.15,-.14,-.05,.81,.11,-.23,-.15,-.04,-.04,.05,.31,-.25,.26,.57,-.14,-.27,-.17,.79,.14,-.09,.3,.01,-.04,-.1,.46,-.07,.05,-.02,-.02,-.09,.09,-.09,.52,.76,-.12,-.42,-.34,-.18,-.38,.13,-.12,-.31,-.42,.08,-.08,.07,-.28,-.05,-.13,.02,-.07,.08,-.06,.37,.1,.73,.74,.05,-.02,.22,.67,-.24,.74,-.63,-.48,.22,.62,.01,-.41,-.28,.39,.73,.01,.02,.06,-.08,-.01,.4,.18,-.11,.17,-.21,-.03,.09,-.07,-.33,.56,.1,-.01,-.17,-.33,.07,-.27,-.1,-.4,.5,.67,.7,.09,.69,.78,-.03,.03,.7,.66,.65,.57,-.68,.19,.01,.59,.79,.17,.09,.01,.54,-.1,-.16,-.1,.75,.13,.04,-.22,-.06,-.05,-.07,-.1,.23,.76,-.18,.67,-.15,.58,.07,-.21,.02,.6,.1,.02,.07,-.58,-.08,.04,-.23,.52,-.61,.67,-.09,.15,.1,.08,.46,.74,-.29,-.19,-.06,-.1,-.28,-.42,.19,.13,.32,.23,-.25,.08,-.25,-.05,-.07,.02,.11,.07,.05,.03,-.07,.19,-.03,.13,.15,.02,.12,-.12,.06,.02,.36,-.12,.1,-.17,-.37,.21,-.33,-.35,.24,.67,-.22,.34,.24,.09,-.02,.62,.01,.21,-.14,-.25,-.02,.11,.17,-.08,.39,.74,-.21,.32,-.01,-.24,.68,-.08,-.08,.02,.03,.12,-.28,-.19,.38,-.12,.31,.21,-.07,.21,-.13,-.19,.01,-.28,.55,.07,.03,-.1,.68,.1,.26,-.23,.34,.6,-.11,.18,.19,.21,.7,.02,.26,.82,-.11,.44,.8,.11,-.26,.01,.04,.07,.18,.13,-.35,-.13,.55,-.1,-.43,.6,-.25,.56,.62,-.18,-.02,.66,.5,-.18,-.28,-.34,.27,.61,.4,.38,.07,.45,.08,-.17,.23,.17,-.07,-.17,-.17,-.23,.7,.16,.73,-.27,.71,.01,.29,-.34,.06,.02,.75,-.06,-.03,-.18,.6,.75,-.28,.09,.75,.63,-.33,.08,-.19,.7,.1,0,.23,.75,.01,.65,.45,.47,-.06,.09,-.17,.18,.62,.09,-.01,.02,-.01,.07,-.02,.61,.37,0,.04,.49,.12,.73,.59,.75,.26,.14,.17,-.52,.12,.5,.14,.79,.09,.48,.05,-.3,-.24,.02,-.07,-.26,.15,.77,.77,-.08,.66,-.17,-.25,-.49,-.01,.67,-.06,-.19,.68,.68,-.43,-.27,.44,0,.72,.08,.66,-.28,.69,.67,-.13,.67,.19,-.12,-.24,.59,.11,-.04,.69,.63,-.17,-.3,.64,.47,.02,.04,.04,-.07,-.01,.07,-.06,.03,-.14,.65,.11,.72,.4,.6,.03,.08,0,.77,.78,.63,-.13,.04,-.08,.09,.13,.4,.04,.76,-.1,.06,0,.17,.1,.34,-.31,-.28,.6,-.55,.61,.03,-.18,.11,.34,-.18,-.19,.11,.13,.82,-.03,.77,.17,.23,-.27,.11,-.25,-.25,-.13,.5,-.02,.44,-.07,.13,0,.67,.25,.1,.2,.1,.65,.71,.56,-.22,.07,-.07,.63,.45,.64,.57,.34,.02,.04,.09,.72,.09,-.39,.79,.1,.54,.62,-.75,.27,-.21,-.16,.18,.49,.79,.07,.11,-.23,-.33,-.3,-.01,-.12,.67,.71,.46,-.07,-.01,.62,-.32,.2,-.22,.02,-.35,.05,-.01,.56,.11,-.32,-.02,.49,.23,-.03,.12,.38,.04,-.22,.24,.2,.48,.53,-.07,.24,.17,.22,-.23,.02,.48,.62,-.2,-.23,-.45,-.17,.57,.19,.21,-.12,-.38,-.04,.07,.56,.09,-.26,-.37,-.41,.22,-.44,0,-.29,-.22,-.03,-.08,.22,.19,.01,.45,.66,.03,.43,.12,.33,.81,.28,-.25,.18,.64,-.32,-.17,-.15,.11,.63,.51,.59,.13,.19,-.39,-.14,.59,.63,.17,-.19,-.1,.76,0,-.12,.12,-.02,.16,.16,0,.05,-.14,.16,.59,-.06,-.07,.72,-.08,.02,.76,.09,.74,.62,-.03,-.11,.22,-.06,.11,.74,-.33,.7,.11,-.2,-.03,-.2,.1,.38,-.22,-.37,.11,.6,.81,.55,.53,.06,-.01,-.07,-.06,.01,.23,-.1,.29,.66,.13,-.07,.33,.4,.03,-.07,-.49,.02,.64,-.06,.56,.43,.39,-.14,-.14,.58,-.11,.38,-.11,.51,.23,-.08,-.07,.32,-.3,.65,.23,.18,-.08,.23,.16,-.12,.06,.56,-.21,-.08,.79,.1,-.44,.3,.74,.18,-.16,.34,.64,.16,-.01,.24,-.05,0,.73,-.26,.45,.47,-.08,-.01,.29,.32,-.04,.2,.66,-.09,.19,-.18,-.25,.49,.2,.35,.65,-.05,.01,.52,.43,.67,.62,0,.65,.68,.58,.33,-.2,.13,.55,.04,.57,-.05,.68,.67,.09,-.01,.63,.41,.6,.56,.24,-.03,.57,.45,.33,.01,.47,.33,.64,-.1,.6,.65,.58,.65,.07,.38,.04,-.1,.48,.7,-.23,.05,.61,.55,.59,.13,.18,.3,.61,.64,.75,-.15,-.05,.11,.15,-.1,.66,.1,.23,.6,.15,.45,.47,.26,.83,.66,-.09,.05,.7,.16,.28,.61,-.2,-.02,.49,.26,.23,.61,.39,.69,.25,.79,-.19,.4,.02,.25,-.08,.06,.16,.37,.72,.12,.55,.18,.29,-.14,.16,.66,.5,.57,.5,.71,-.19,.14,-.08,.2,.36,-.06,-.27,.58,.53,.69,-.2,.63,-.19,-.03,.4,0,.47,-.03,.11,.68,.67,.6,.59,.01,.68,.32,.54,.45,-.49,.44,.27,-.45,.67,-.12,.68,-.01,.69,.54,.04,.77,-.13,.02,.22,.21,.24,.43,.13,-.17,-.07,.24,-.06,-.13,.08,.64,.72,.61,-.19,.66,.49,.51,.78,.65,.69,0,-.17,-.23,.56,-.08,-.35,-.05,.23,.26,.29,.69,.73,.47,-.18,.74,.53,-.23,.27,.13,.75,.41,.17,-.19,-.03,.05,-.13,-.08,.19,.71,.58,.3,-.19,.35,.23,.62,.07,0,-.3,-.05,.65,-.2,.64,.33,.63,.58,.05,.6,.38,.8,-.07,.24,-.02,.38,-.6,-.12,-.12,-.55,-.08,-.33,-.1,-.02,-.05,.14,.56,.57,-.17,.79,.69,-.34,.61,-.36,-.16,-.39,.06,.63,.7,.74,.43,.16,.51,.26,.42,.51,.4,.14,.72,.73,.54,.43,.42,.11,-.06,.56,.75,.72,-.07,-.02,.11,-.11,.72,-.11,.36,-.01,.39,.73,.61,.65,.71,.75,.67,.09,.57,0,-.12,.52,-.12,-.16,-.14,.51,.63,.62,.39,-.05,.43,.16,.65,.1,-.05,.13,-.04,.03,.04,.51,-.37,-.08,-.18,.62,-.21,.58,-.15,-.19,.15,.06,-.17,-.23,.81,0,-.11,.37,-.02,0,.67,-.27,-.43,-.09,.15,.57,-.29,-.09,.63,.31,.43,-.12,.84,-.23,.72,-.04,.82,.02,.21,.17,.12,.44,.16,.05,.06,-.69,-.33,-.05,.68,.76,.62,.51,-.25,.09,.6,.23,.18,.16,.04,-.06,.72,.64,-.07,.62,.76,.21,.15,.07,.68,.79,.01,-.21,.29,.41,.46,.08,-.27,.37,.19,-.15,.04,.69,-.25,.19,.68,-.11,0,.61,.01,.18,-.13,.8,-.25,.72,-.05,.11,-.19,-.06,.66,.09,-.07,.02,.01,-.06,.81,.72,.73,-.09,.71,.76,.74,.66,.63,-.17,.09,.35,.74,-.18,.26,.07,-.09,.21,.81,.69,-.32,.61,.01,.42,.67,.15,.13,.18,-.01,-.34,-.11,.05,.06,.61,.67,.48,.66,.29,.21,.26,.31,.28,.11,-.08,.17,.49,.72,.03,-.16,-.58,.11,.73,.27,.71,.1,.77,.2,-.11,.5,-.54,.73,.68,.72,.26,.75,.2,.64,.58,-.1,.39,.74,.62,.53,.79,.77,.82,-.19,.8,.34,.18,-.01,.75,.78,.75,.78,.77,-.22,.61,.75,-.09,-.52,.82,.07,.69,-.47,.04,.65,.47,.8,.78,-.09,.09,.1,-.18,.7,.04,.42,.51,.71,-.29,-.03,.05,.05,-.33,.2,.28,.22,.01,.68,.08,.11,.59];export{a as rvalData};
