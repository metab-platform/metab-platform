const a=[0,0,0,.57,0,.43,.01,.05,.48,0,0,.49,.65,0,0,.83,0,.58,.06,.22,.75,.1,.55,0,0,0,.24,.21,0,.22,0,.01,0,.06,.79,.5,0,0,0,0,.28,0,0,.38,.35,.04,.64,.01,.34,.21,.02,.85,0,0,0,0,.01,.38,0,0,.01,0,0,.56,.33,.67,0,0,.36,.78,.6,0,.03,.32,0,.52,.04,.01,0,.94,0,0,.12,0,.53,.03,0,.46,0,0,.03,.32,.81,0,.32,.15,0,.08,.13,0,.51,0,0,.06,0,.86,.28,.4,0,0,.67,.07,.84,0,.17,0,.05,.08,0,0,.34,.57,0,.06,.61,0,0,.02,.57,0,.01,0,.13,.61,0,.15,.41,.13,.2,.84,0,.21,0,0,.94,.12,.96,.53,0,.03,0,.26,.87,.38,.02,.28,.62,.96,.03,0,.8,0,.67,.41,.34,.03,0,.1,.34,0,.86,.54,.15,0,0,.13,.42,.61,.15,0,.44,.97,.53,0,0,.59,.35,.13,.12,.25,.24,.9,.33,0,0,0,0,0,.75,.01,.05,0,0,.8,0,0,.73,.05,.23,.51,.01,0,.48,0,.43,.09,.95,.18,.13,0,0,0,0,0,0,0,.06,.11,.02,.02,.45,.17,0,0,0,.53,0,.37,.88,.62,.14,0,0,.01,.81,0,.16,.29,.06,.85,1,.12,0,1,0,.34,.08,.01,.3,0,.7,.32,0,0,.19,0,.2,0,.34,0,.59,0,0,0,0,.81,.53,.12,0,.26,.4,0,0,0,.41,0,.21,0,.16,.1,.06,.07,0,.01,.58,0,.25,0,.9,.03,.92,0,.14,.21,.17,.01,.07,0,.62,.1,0,.19,.1,.98,0,.04,.23,.15,0,0,0,.44,0,0,.65,.38,0,.25,.95,.25,0,0,.82,.23,.13,.85,.98,.02,0,0,0,0,.1,.35,0,0,.05,.19,0,.61,0,0,.57,.45,0,0,.02,.91,0,0,.01,.23,.52,.15,.3,0,.28,0,0,.79,.09,.06,.43,.05,.01,.21,0,0,.7,.1,.91,.94,.59,.19,.39,.02,.55,.98,0,0,0,.76,.15,.67,.46,0,0,.06,.62,.37,.89,.77,0,.02,.17,.56,0,0,0,0,0,0,0,0,.45,.97,0,0,.32,0,.77,0,.34,.74,.02,0,0,.82,.09,0,0,.01,0,.45,.66,0,.03,0,0,0,0,0,0,.58,.01,0,0,0,.34,0,.11,0,0,.21,.13,.64,.02,0,.86,0,0,0,0,.03,.79,.63,0,.97,0,0,.76,0,0,.37,.22,0,0,.83,0,.01,0,0,0,.15,.02,.43,0,0,0,0,.63,.49,0,.02,0,0,.72,.23,0,0,.55,.81,0,0,0,.01,.33,0,0,0,0,.16,0,.43,.02,.02,.11,.11,.15,0,.93,0,.47,.15,0,.92,.35,0,.42,0,.73,.88,.09,0,.64,.68,.06,0,.01,.19,.12,.02,.42,.97,.18,.07,.45,.86,0,.7,.09,0,0,0,0,.47,0,.01,0,.14,0,.34,.66,0,.29,.08,.35,.59,.07,.93,0,0,.19,0,0,0,.1,0,.08,.05,.17,.07,0,1,0,0,0,0,.12,0,.19,.52,.54,0,0,0,0,0,0,.91,0,0,0,.21,0,.17,.92,0,.15,.86,.55,0,.82,.97,.14,.86,0,0,.78,.94,.39,.05,.18,.18,.56,.32,.04,.29,0,0,.57,0,0,.23,0,0,0,.02,0,.03,.71,0,0,.37,0,0,0,0,.74,0,.71,0,.51,0,0,.54,0,.54,.04,.43,0,0,0,.08,.07,.81,.5,.7,0,0,.02,.53,.45,.11,0,.02,0,0,0,.33,.35,.03,0,0,.6,.12,0,0,0,0,.55,.01,.47,.05,.6,0,0,.21,0,0,0,.27,0,0,.49,.84,.22,0,.56,.41,0,0,.1,.59,.55,.36,.08,.5,.02,.04,.15,0,0,.7,0,0,0,.01,.01,0,0,.2,0,.5,.03,.44,0,.41,.09,.17,.01,0,0,.77,.45,0,.05,0,.66,0,.1,.05,.79,.05,0,.11,.04,0,0,.36,0,.04,0,0,0,0,0,.19,.18,.87,.05,.89,0,.47,.12,0,.31,.01,0,.01,0,.39,.48,0,0,0,.02,.15,.58,.06,0,.25,0,0,0,.12,0,0,0,0,.01,0,0,0,0,0,.11,.01,.02,.78,.69,.01,0,.03,0,.02,0,.11,.55,0,.9,.59,0,0,.99,0,.06,.03,.16,.84,.51,0,.83,.27,.59,.22,.73,.85,.03,0,0,0,.32,0,.02,0,.92,.1,0,.83,.03,.26,0,.58,.8,.2,.04,.07,.98,.09,0,0,.02,0,.07,.74,0,.91,.31,0,0,.94,.94,.15,.42,.03,.07,.5,.13,.56,.44,0,.79,0,0,.56,.62,.13,0,.01,0,0,0,0,0,.98,0,.13,0,0,.35,.19,.93,.51,.89,0,.09,.97,.55,.3,.95,.66,.03,.3,0,.3,.72,.12,0,.79,.23,.64,0,0,0,0,.7,0,0,.03,.89,0,0,0,0,0,.08,.97,0,0,.88,.5,.72,0,.02,.31,.01,0,.43,.38,0,.57,.38,.03,.43,.04,0,.17,0,.99,0,.27,.04,.39,0,.28,.83,.86,0,.1,.63,.01,0,0,0,.08,.2,.11,.48,0,0,.01,0,.18,.84,0,0,.75,.88,0,.01,0,.71,0,.32,.94,.7,1,.45,.12,.93,.57,.05,.75,.36,.11,.32,.04,.31,.68,.18,0,.7,.18,.16,.18,.03,0,.02,.63,0,.56,0,0,.09,.19,0,.25,.27,.99,.06,.16,.03,.3,.69,0,0,.03,0,.42,0,0,.06,.17,.17,.23,.6,0,.39,0,.88,0,0,.96,.02,.04,.02,.54,.82,0,.09,.57,.85,0,.01,.08,.24,.12,0,.64,.08,.16,0,0,.29,0,0,.01,0,0,.89,.01,.54,.58,.07,.89,.46,0,.1,0,.66,0,0,.03,0,0,0,.81,0,0,0,0,0,.05,0,.06,0,.83,0,.22,.38,.01,.01,.65,.01,.12,.13,0,.36,0,.04,0,.06,.24,0,.47,.22,0,.18,.33,.06,0,0,.01,.94,0,0,.32,.63,.01,0,.54,.45,0,0,.9,0,0,0,0,.35,.01,.05,0,.46,.44,.92,.14,.19,.98,0,0,.21,.42,0,.05,0,0,0,0,.99,.11,0,.3,0,.11,0,.73,0,.57,0,.04,.67,.22,0,.54,0,0,.62,0,.64,0,0,.29,0,.45,.18,0,0,0,.19,0,.91,0,.19,0,0,0,0,.08,0,.15,.03,0,0,.56,.2,0,0,.82,.14,0,.02,.87,.88,.02,.72,.02,.03,.13,.85,.12,0,.19,0,0,0,.95,.59,.91,0,0,0,.16,.94,.57,.81,.06,0,.73,0,.32,.39,.07,.36,.43,0,0,0,0,0,0,.48,0,.61,0,.17,.07,.12,.86,0,.42,0,.07,0,0,0,.01,0,.21,0,.16,0,.9,.49,.66,0,.48,.81,.93,.56,0,0,0,.26,.79,.02,0,0,0,0,0,.56,.74,.45,0,.05,.33,0,.74,0,0,0,0,.11,.29,.02,0,0,.25,.17,.09,.01,0,.99,.32,0,0,0,.01,.71,0,.03,.15,.92,.25,0,.85,.39,0,.28,.01,.05,.01,.15,.79,.39,0,.21,.15,.08,.67,0,0,.7,.66,.41,.15,.94,.18,0,0,.6,0,0,.03,0,.19,.51,.07,0,.7,.84,0,.2,0,0,0,.02,0,.24,0,.01,.83,.3,0,.11,.27,0,0,.64,0,.17,0,0,.23,0,.16,0,0,.3,.32,.04,0,0,0,.7,.06,0,.15,0,0,.2,.94,.86,0,.81,.32,.07,.87,.01,.83,.14,.28,.05,.81,0,.19,.08,0,.07,.38,0,0,0,0,.9,.02,.03,.55,0,0,0,0,.83,0,.84,.43,.59,.01,0,0,.19,0,0,0,0,.93,.48,.96,.3,.25,.02,.16,0,0,.05,.16,0,0,.14,.03,0,.82,0,.06,0,0,0,.12,.81,0,.44,0,.02,0,0,.11,.12,0,0,0,0,.79,.46,0,.46,.52,.21,0,.91,.66,0,.04,0,0,0,.07,.09,0,0,.01,.78,.03,.15,.33,0,.04,0,0,.06,.01,.01,0,.69,.11,0,.36,.08,.26,.48,0,.64,.31,0,.27,.05,0,0,0,0,.35,0,0,0,.21,.48,.56,0,.02,0,.15,0,0,.4,.02,0,0,0,0,.19,.31,0,0,0,.81,0,0,0,.35,0,0,0,0,.78,0,.97,.18,0,0,0,.36,0,0,0,.1,.08,0,0,0,0,.09,.02,.96,.48,.05,0,.83,.23,0,.17,0,0,.27,0,0,.09,.74,0,.26,.01,0,.07,.18,0,.04,0,0,.03,0,.49,0,.03,0,.7,.45,.82,.29,.67,.05,0,.32,0,.05,0,.37,.74,0,0,0,0,0,.66,.67,.09,.08,.01,.96,.01,0,0,0,.17,0,.61,.59,0,.67,0,.28,.04,0,0,0,0,.79,0,.01,0,.03,0,0,.02,0,0,.32,0,.69,0,0,.79,0,.19,.98,.21,.07,.42,0,.36,0,.59,.26,.17,.94,.84,0,0,0,.64,0,0,0,0,0,0,.63,.02,.75,0,.47,0,.07,.01,0,.44,0,0,0,.04,0,0,.21,.03,.84,0,0,.12,0,.29,.52,.22,.57,.2,0,0,0,0,0,.16,0,.81,.58,.01,.99,0,.2,0,0,0,0,.28,0,0,0,.39,.01,.32,.01,0,.11,.19,0,.71,0,.65,.48,0,.88,0,0,.07,0,0,0,0,0,.15,0,.55,0,0,0,0,.95,0,0,0,0,0,0,0,0,0,0,.03,0,.56,0,0,0,.22,.12,.81,.3,0,.82,0,.92,0,0,0,0,0,0,0,.86,0,.43,.06,0,.32,.07,.59,0,0,0,0,.02,0,0,0,.02,.67,.36,.3,.81,.64,0,0,.64,.03,0,.12,0,0,.65,.48,.83,.12,.04,0,.85,.42,0,.01,.03,0,0,0,0,.65,0,.09,.36,0,0,0,.06,0,.19,0,.81,0,.73,0,.01,.88,0,.67,.04,.95,0,.04,.09,0,0,0,0,.02,.63,0,.01,0,.29,.23,.03,0,0,.86,0,0,0,0,.12,0,0,.36,.01,.22,0,0,.81,0,0,.12,.29,.57,0,.01,.97,0,.39,.88,0,.06,.87,.09,0,0,0,.24,.92,.08,.45,0,0,.54,.52,.01,.63,0,0,0,.49,0,0,0,0,0,.75,.15,0,0,.6,.31,.76,.18,.06,0,0,0,0,.3,0,0,.29,.84,.09,.32,0,.01,.68,.58,0,0,0,0,.01,.9,.01,.03,.01,.9,.05,.07,0,0,.84,.02,0,.01,0,0,0,0,0,.13,.28,0,0,0,0,0,.13,0,.01,0,0,.14,0,0,0,0,0,0,0,.55,0,0,0,.3,0,0,0,0,0,0,0,0,.8,0,0,.83,0,0,.44,0,0,0,0,.55,.98,.74,.04,0,.17,0,0,0,.22,.21,.55,.35,.33,.46,.02,.55,.35,0,.73,.67,0];export{a as pvalData};
