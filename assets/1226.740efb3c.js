const a=[.07,.69,.07,.96,.02,0,.28,.01,.06,.03,.01,.01,.1,.01,.03,.05,.24,.65,.26,.51,.77,0,.21,0,.1,.2,0,0,.13,0,.05,.01,.19,0,0,.46,.65,0,.01,.11,.33,.04,0,.09,.17,0,.08,.44,0,.01,.29,0,.05,.6,0,.08,.11,0,0,.39,0,0,0,.99,.36,.01,.01,0,.74,.62,.56,.63,0,.06,.06,.91,.04,0,.72,.29,.09,.42,.21,.09,.17,0,.31,.24,.09,.21,0,.3,.12,.15,.41,.57,.05,.55,.04,0,.63,0,0,.22,0,.02,0,0,.31,0,.91,0,.53,.8,.39,.9,.68,.01,.23,.32,.06,0,0,.3,.07,0,.01,.38,.08,.93,0,.02,.75,0,.59,.32,0,.62,.03,.1,0,.01,0,.15,0,.48,.7,0,0,.18,.01,.16,.91,.3,0,0,.48,0,.53,0,0,0,0,.07,.1,0,.29,.04,0,.46,0,.07,0,0,.45,0,.69,0,0,.44,0,.98,.4,.85,0,.64,.94,0,0,.04,.26,0,.08,0,0,.18,0,0,.36,.01,.12,.08,.8,.4,.25,0,.17,0,0,.25,0,.01,.04,.45,0,.27,.88,.01,0,0,0,0,0,.3,.04,.84,0,.02,0,.01,.81,.65,.89,.12,.01,0,.05,0,0,.52,0,0,0,0,.08,.02,.44,.36,.55,.54,0,0,0,.62,0,0,.64,.9,.01,.52,.99,0,.23,0,0,0,.01,.01,.19,.28,.69,.43,.39,.05,.73,.63,0,0,.02,0,0,0,.01,.17,0,.65,0,.72,0,.03,.78,0,.13,.09,.08,0,.03,.79,.06,0,.67,.15,.09,.17,.01,.33,.98,0,0,.01,.03,.5,0,.01,0,0,0,0,.02,.09,.03,.01,.05,.04,0,0,.02,.01,.77,0,0,0,.45,.02,.06,.53,.02,0,.43,0,0,.01,.5,.94,.97,.02,.3,0,0,0,0,0,.01,0,.58,.01,0,.2,0,.4,.27,.59,0,0,.7,.03,0,.57,0,.49,0,.41,.02,0,0,0,.03,.05,.55,0,.72,.86,.42,.52,.99,.71,.31,.8,.1,.03,0,0,.66,.23,.04,.1,0,.15,0,.35,.41,0,.02,.46,0,.37,.14,0,.02,0,.06,.01,.02,0,0,.29,0,.92,0,0,.01,.32,.15,0,.01,.53,.5,.01,0,0,.06,.01,.49,.02,0,.7,.85,.01,.06,0,0,.12,0,.66,0,0,.33,.07,.37,.08,.06,0,.08,.01,.15,.01,0,.26,0,.94,.03,0,.39,0,.44,.45,.16,.64,.53,.5,0,.88,0,.34,0,.53,.04,.61,.1,0,0,.3,0,.23,0,0,0,.17,.61,.06,.67,.01,.05,0,0,.84,0,.01,.23,0,0,.01,0,.66,.03,.34,0,.16,.51,0,0,0,.01,.48,0,0,0,0,0,.36,.39,.01,.19,.72,0,.01,.05,0,.99,0,0,0,1,0,0,0,0,.47,0,.07,.46,0,0,0,.06,.98,0,0,.01,.04,0,.73,.04,.33,.02,.16,0,0,0,.96,.09,0,.02,.2,.56,.18,.6,.16,0,.11,.02,.04,.05,.02,.09,.13,.09,.01,0,.24,.06,0,0,0,0,.09,.23,0,.03,.95,.18,.7,.89,0,.21,.56,.72,.25,0,.08,.24,.13,.01,0,.14,0,0,.79,.07,.13,.25,.65,.68,0,.19,.63,.09,.01,.05,0,.03,.05,0,.45,0,.01,.07,0,0,.26,.06,0,.04,0,.21,0,.43,0,.05,0,0,.38,.01,0,.16,0,0,.09,.02,0,.15,.32,0,.04,.52,.2,.02,.02,.04,.55,.07,0,.17,0,.14,0,.62,0,.12,.17,.39,.05,.35,0,0,0,0,.21,.43,.26,.53,0,.67,.42,0,0,.3,.08,.13,.24,.35,.86,0,0,0,.1,0,.01,.01,.7,.05,.3,.03,.9,.01,.01,.13,.46,.03,0,.14,0,0,.05,.84,.73,.22,.01,.03,.07,.08,0,.79,.14,.83,.23,.06,0,.15,.01,.6,0,.04,.23,0,0,.75,.54,.01,.31,0,.14,0,0,.66,.84,.15,.34,.01,0,.01,.03,.42,0,.73,.65,.23,.8,0,.84,.35,.01,.64,0,.73,.95,.01,.06,0,.01,0,0,.04,0,0,.47,.07,.21,.03,0,.59,.5,.22,0,.09,0,0,0,.33,0,0,0,0,0,.25,.01,.08,0,.43,0,.03,.05,0,0,.33,.23,.04,.22,0,.23,.37,.28,.02,.03,0,0,0,0,.24,.29,.02,.98,.14,.28,.05,.87,.77,0,.06,.55,.05,.84,0,.46,.32,.03,.52,.18,0,0,0,.65,0,0,0,.01,0,.01,0,.27,.99,0,.77,.79,.85,.03,0,0,.04,.24,0,.2,.06,.13,0,0,.03,0,.01,0,.79,.22,.98,0,0,0,.21,.05,.98,0,0,.25,.29,.01,.21,.39,0,.75,0,.02,.02,.02,.01,0,0,.02,.76,.05,.04,.7,.52,.57,.31,.26,.01,.79,.07,0,.08,0,.01,0,0,.01,0,.05,0,0,0,.19,0,.07,.43,.25,0,.02,0,.3,.08,0,0,.03,.65,.08,.03,.05,0,.69,0,.01,.2,.08,0,.46,.03,.01,.38,.24,.32,.29,.02,.39,.01,.79,0,.52,.03,.02,.02,.6,.56,.7,0,.31,0,.44,.32,.26,0,.56,0,0,0,.03,.29,.01,.29,0,0,.05,.08,0,0,.04,.02,.12,0,0,0,0,0,0,0,0,.22,0,.04,.33,.31,.99,.69,.72,.14,.07,.25,.01,.02,.5,.05,0,.08,0,0,0,.01,.09,.02,.03,0,.8,.02,.29,.31,0,.18,.01,.01,.52,0,.06,0,0,.04,0,.66,0,.76,.17,.51,.18,0,.32,0,.33,.19,0,.04,.8,.08,0,0,.05,.01,.01,.07,.97,.63,.02,0,.86,0,0,.09,.05,0,0,.03,.67,.08,.7,0,0,0,.81,.93,.27,.94,0,0,.3,.02,0,.51,.88,0,0,.75,.19,0,.26,.06,.23,0,.01,.17,0,.16,.01,.02,.05,.21,0,0,.29,.82,.92,.15,.68,.01,.36,0,0,0,.18,0,0,.84,.04,0,.63,.04,.01,.93,.11,.01,.11,.44,0,0,.74,0,.01,.13,.02,.77,.01,.22,0,0,.05,.31,.08,.18,.38,0,0,.6,.73,.02,.35,.28,.56,0,.07,.12,0,.01,0,0,0,.23,.49,.01,0,.95,.35,.04,.96,.02,0,0,0,.78,0,0,.45,.34,.9,.16,.35,0,.79,.91,0,.21,.01,.28,.45,.27,.41,.18,.53,.87,.13,.07,.04,.3,.01,0,.06,.08,0,0,.01,0,0,0,.03,.09,0,.02,.25,0,0,.94,0,.23,.05,.07,0,.07,.06,.85,0,0,0,.48,0,0,0,0,0,.04,.1,.03,.29,.3,.19,.01,0,.66,.1,.47,.15,0,.46,.2,.83,.01,0,.16,.63,.02,0,.19,.37,0,0,0,0,.34,.23,.47,0,0,0,0,0,0,0,.93,.16,.01,0,.04,.01,.22,.03,.01,.75,0,0,.41,0,.09,.03,.1,.42,.9,0,0,.04,0,0,0,0,.69,0,.09,0,.87,.12,.59,.41,.6,.01,0,0,.69,.3,0,.14,.17,.03,.2,.02,0,.61,.97,.01,.04,0,.02,.89,0,.24,.89,.01,.01,0,.56,0,0,0,.17,.79,0,.86,.29,0,.02,0,0,.02,.47,.18,0,0,.53,.41,0,0,0,.36,.13,0,0,0,0,0,.03,0,0,.08,0,0,0,0,.13,0,.04,.35,.37,.84,0,.77,.1,0,0,.57,.01,.11,0,.56,.02,.08,.05,.47,0,0,0,.02,0,0,.82,0,0,.34,.11,.02,0,.36,.14,.03,.12,0,.96,0,0,.04,0,.01,0,0,.11,.41,.11,.02,0,.48,.63,.02,.02,.04,.2,.57,.35,.33,0,.28,.68,0,.04,0,.33,.14,.02,0,0,.88,0,.03,0,.03,.07,0,.46,.96,.8,.92,.76,.01,.38,.32,.11,.2,.12,.03,.06,.36,.71,0,.21,0,0,0,.03,.63,.86,.03,0,.96,.19,0,0,.67,0,.03,0,.03,0,.76,.12,.06,0,.37,0,.73,.21,0,0,0,0,.01,0,0,.84,.3,.7,.35,.69,.78,.14,0,.58,0,.35,0,0,.38,.82,.01,.04,0,.17,0,.12,.46,0,0,0,0,0,0,0,.79,0,.08,.23,0,0,.07,.01,.59,0,.58,0,.05,0,.05,.01,0,.01,0,0,.71,0,0,.22,.35,.01,.54,0,0,.02,0,.02,.97,.02,.02,.98,.29,.05,.47,0,0,.03,0,0,.11,.01,.02,.49,.02,0,.18,0,0,0,.01,0,.33,0,.04,0,0,0,.93,.01,.78,0,.05,0,0,.14,0,.5,0,.59,.19,0,.04,0,.13,.84,.05,.57,.29,.24,.17,0,.05,.32,.05,.29,.14,0,0,0,0,.07,.04,.08,0,.01,0,.57,.67,.47,.07,.27,.47,0,.11,0,.41,0,0,.43,0,.29,.04,0,.93,0,0,.01,.66,.08,.01,0,.16,0,.01,0,.06,0,0,0,0,.77,.24,.06,0,0,0,.36,0,0,0,.02,0,.01,0,0,0,0,0,.01,0,.61,.24,.02,.05,.02,0,.04,.04,0,.22,.02,.01,.08,.38,.72,0,.03,.01,0,.01,0,.1,.58,.44,.17,.18,.67,0,.04,1,0,.23,0,0,.03,.15,.03,.57,.25,.83,0,0,1,0,0,.29,.05,.25,0,.29,.3,.01,0,.05,0,.01,0,.01,0,.06,0,.5,.85,.32,0,.53,.1,.36,.04,.03,.52,0,.49,.03,0,.79,.66,.94,.32,.14,.08,0,.04,.09,.03,.67,.45,.08,0,.01,.18,.7,.27,.9,.08,.14,0,0,.16,.06,.16,.05,.65,0,.05,.49,.02,0,0,.21,.09,.13,.09,0,0,.01,.04,.01,.14,0,0,0,0,0,.29,.71,0,.03,.3,.38,0,.08,.37,.95,0,.25,0,.62,.17,.01,0,.14,0,.05,.74,0,0,0,.1,0,.09,.4,.03,.09,.85,0,0,.26,0,.18,.02,.01,.11,.53,.77,0,0,.39,.33,.33,.66,.21,0,.52,0,.01,0,.07,.01,.37,.3,.12,.01,0,0,0,.61,.52,.22,.16,.25,.28,.59,.07,0,0,.56,.2,.29,.01,.04,.82,0,.61,0,.01,0,.01,.69,0,0,0,0,0,.37,.63,.32,.1,.61,.03,.02,.52,0,.07,0,.21,0,0,.24,0,.01,.15,0,.43,0,.17,.28,.12,.02,.02,.02,0,.19,0,.04,.01,.39,.01,.66,.02,0,.36,.01,.61,.11,.9,.05,.31,0,.83,.59,.04,.05,.01,.26,.26,.34,.04,.06,.51,.11,0,.1,0,0,.07,.8,.05,.23,.09,.01,.92,.61,.15,.54,0,.1,0,.15,0,.1,0,.21,.15,.09,.17,.04,0,.34,0,.97,.11,.77,.07,.08,.5,.55,0,.13,.08,0,.92,.53,0,0,.23,0,.57,.26,.7,.23,0,.09,.03,.01,0,0,.18,.05,.33,.07,.15,.18,.53,.09,.66,.09,.66,.01,0,.01,.71,.26,.33,.56,.27,.01,0,.12,0,.12,.97,0,.27,.04,.67,0,0,.28,.01,0,.4,0,0,.02,.01,.05,.01,.09,.03,0,.29,.06,0,.03,.11,.38,.09,.41,0,.44,0];export{a as pvalData};
