const a=[.28,.45,.38,.12,.37,.56,.2,.31,.38,.37,.23,0,.26,.44,.41,.32,.59,.8,.19,.6,.72,.13,.77,.51,.31,.22,.01,.68,.35,.02,.55,.01,.29,.58,.9,.75,.56,.71,.23,.68,.45,.24,.6,.7,.06,.86,.01,.35,.94,.96,.08,.69,.06,.58,.96,.72,.9,.51,.53,.09,.45,.79,.35,.2,.81,.27,.3,.82,.96,.92,.7,.34,.24,.85,.31,.94,.44,.16,.86,.78,.07,.04,.3,.18,0,.26,.16,.15,.24,.21,.49,.93,.45,.43,.13,.63,.51,.29,0,.05,.01,.65,.29,.04,.73,.48,.45,.74,.45,.71,.17,.12,.24,.98,0,.6,.36,.27,.52,.14,.55,.73,.25,.41,.6,.52,.64,.57,.54,.46,.87,.15,.21,.42,.59,.74,.83,.04,.03,.49,.25,.77,.09,.12,.87,.84,.71,.42,.24,.01,.48,.5,.89,.03,.57,.55,.65,.02,.6,.49,.62,.28,.01,.1,.24,.03,.53,.08,.29,.03,.54,.57,.76,.41,.17,.57,.79,.2,.07,.35,0,.35,.23,.68,.23,.21,.68,.17,.9,0,.19,.24,.05,.04,.08,.92,.25,.56,.71,0,.95,.29,.37,.47,.83,.68,.8,.3,.53,.62,.76,.7,.08,.64,.51,.32,.18,.26,.33,.03,.29,1,.92,.44,1,.31,.88,.07,.19,.08,.99,.09,.88,.83,.25,.93,.87,.96,.46,.22,.89,.72,.94,.88,.58,.74,.15,.07,.42,1,.62,.7,.8,.57,.39,.78,.55,.05,.51,.57,.98,.38,.17,.17,.88,.98,.28,.4,.27,.22,0,.58,.35,.98,.48,.06,.26,.19,.87,.77,.3,.09,.15,.67,.72,.88,0,.48,.38,.01,.52,.22,.24,.23,.52,.36,.82,.17,.23,.87,.01,.61,0,.35,0,.26,.14,.83,.95,.58,.09,.89,.67,.93,.1,.9,.55,.14,.89,.73,.14,0,.98,.45,.28,.59,.46,.56,.92,.69,.82,.54,.34,.03,.1,.7,.93,.4,.64,.04,.8,.36,.05,.33,.86,.94,.75,.14,.53,.92,.23,.96,.75,.87,.4,.44,.44,.66,.94,.48,.18,.01,.4,.58,.16,.15,.77,.56,.25,.02,.95,.79,.33,.65,.16,.03,.46,.04,.7,.97,.84,.05,.09,.53,.74,.68,.7,.61,.58,.99,.88,.21,.17,.31,.53,.75,.04,.34,.59,.93,0,.88,.67,.17,.11,.61,.55,.78,.46,.97,.91,.44,.77,1,.04,.34,.44,.76,.28,.09,.61,.66,.18,.24,.07,.41,.44,.5,.21,.41,.68,.65,.12,.3,.89,.5,.85,.47,.45,.34,.23,.08,.09,.91,.53,.72,.22,.33,.59,.02,.89,.1,.34,.5,.95,.31,.25,.46,.55,.14,.35,.92,.99,.12,.92,.51,.12,.52,.11,.75,.39,.38,.71,.9,.67,.46,.97,.58,.93,.02,.08,.78,.36,.15,.97,.3,.41,.99,.62,.47,.72,0,1,.96,.35,.27,.31,.93,.51,.25,.75,.33,.76,.33,.51,.39,.89,.73,.75,.37,.1,.54,.13,.33,.44,.95,.85,.96,.16,.05,.61,.63,.9,.08,.58,.74,.15,.49,.28,.74,.34,.37,.18,.64,.23,.77,.47,.29,.34,0,.09,.49,.27,.02,.79,.26,.54,.06,.57,.67,.08,.42,.8,.95,.25,.75,.75,.38,.97,.86,.66,.91,.9,.42,.71,.36,.11,.81,.95,.4,.95,.68,.46,.66,.08,.6,.03,.22,.25,.35,.66,.07,.08,.58,.92,.64,.35,.21,.63,.64,.32,.89,.22,.27,.36,.42,.19,.44,.41,.61,.57,.2,.35,.29,.8,.24,.38,.14,.73,.42,.42,.49,.59,.29,.48,.16,.57,.69,.94,.28,.52,.83,.79,.29,.48,0,.6,.62,.12,.69,.63,.27,.42,.27,.31,.3,.52,.79,.54,.02,.07,.09,.05,.45,.15,.41,.32,.29,.47,.95,.56,.39,.79,.65,.37,.09,.85,.19,.26,.17,.66,.42,.62,.57,.76,.04,.31,.56,.22,.12,.25,.63,.52,.03,.04,.25,.33,.3,.96,.38,.53,.44,.33,.25,.5,.88,.12,.2,.44,.47,.13,.2,.6,.6,.96,.33,.62,.39,.61,.18,.28,.18,.09,.1,.66,.56,.34,.3,.34,.15,.15,.4,.62,.59,.01,.03,.26,0,.77,.2,.31,.54,.7,.83,.18,.18,.07,.99,.29,.71,.1,0,.8,.17,.18,.83,.51,.24,.18,.76,.92,.86,.04,.05,.28,.39,.14,.72,.25,.08,.09,.24,0,.26,.53,.08,.5,.5,.97,.03,.91,.06,.25,.67,1,.76,.69,.77,.56,.88,.88,.9,.61,.8,.74,.61,.95,.4,.81,.74,.44,.17,.23,.43,.75,.31,.28,.14,.38,.04,.69,.7,.23,.67,.22,.14,.68,.16,.5,.43,.31,.97,.25,.25,.5,.87,.83,.98,.74,.49,.96,.44,.95,.86,.19,.46,.88,.95,.62,.46,.23,.74,.5,.72,.87,.32,.88,.21,.5,.6,.45,.28,.74,0,.16,0,.45,.89,.87,.25,.78,.2,.7,.66,.74,.37,.34,.14,.3,.11,.46,.35,.13,.48,.53,.86,.76,.18,.44,.43,.14,.45,.96,.78,.82,.74,.61,.33,.78,.94,.48,.8,1,.73,.2,.5,.63,.08,0,.65,.02,.87,.32,.37,.92,.56,.2,.77,.4,.65,.37,.72,.52,.28,.58,.04,.03,.34,.63,.43,.81,.04,.99,.04,.68,.84,.59,.9,.09,.64,.88,.05,.58,.64,.21,.49,.02,.93,.77,.21,.32,.72,.5,.57,.22,.45,.37,.36,.19,.3,.29,.94,.45,.37,.52,.98,.56,.73,.76,.23,.4,.13,.37,.08,.97,.6,.37,.85,.21,.22,.8,0,1,.24,.82,.82,.23,.45,.27,.64,.45,.32,.46,.29,.09,.6,.93,.88,.63,1,.78,.89,.43,.63,.04,.76,.98,1,.2,.39,.4,.85,.42,.42,.54,.75,.47,.5,.28,.97,.28,.55,.64,.46,.45,.21,0,.43,0,.79,.95,.78,.96,.44,.24,.45,.16,.75,.23,.31,.05,.11,.78,.04,.97,.55,.67,.11,.67,.34,.14,.69,.1,.79,.91,.22,.67,.26,.19,.4,.96,.01,.86,.61,.54,.58,.47,.65,.31,.69,.44,.38,.47,.25,.24,.94,.08,.33,.74,.56,.26,.53,0,.91,.04,.04,.01,.81,.29,.19,.04,.23,.18,.23,.18,.15,.22,.72,.9,.03,.58,.12,.5,.9,.1,.41,.9,.11,.25,.43,.91,.09,.73,.18,.32,.83,.26,.78,.37,.13,.2,.43,.1,.32,.51,.08,.55,.86,.29,.39,.37,.95,.78,.22,.17,.14,.47,.46,.87,.2,.11,.44,.04,.54,.76,.89,.02,.15,.04,.17,.35,.86,.13,.52,.73,.43,.37,.59,.47,.52,.38,.97,.48,.54,.05,.24,.16,.24,.92,.36,.24,.5,.6,.48,.22,.9,.34,.25,.28,.88,.67,.54,.35,.14,.88,.85,.94,.65,.86,.71,.11,.13,.84,.16,.67,.79,.37,.33,.27,.98,.8,.65,.07,.9,.71,.05,.53,.18,.02,.23,.72,.61,.49,.69,.8,.44,.63,.54,.74,.88,.81,.53,.76,.57,.53,.32,.03,.12,.53,.94,.75,.26,.54,.75,.74,.27,.59,.93,.45,.62,.76,.46,.75,.94,.36,.45,.97,.17,.3,.77,.57,.24,.47,.98,.93,.31,.18,.13,.57,.44,.45,.21,.39,.96,.24,.18,.15,.78,.21,.99,.67,.39,.77,.95,.96,.9,.81,.63,.37,.71,.19,.71,.54,.2,.79,.53,.77,.32,.93,.21,.22,.22,.58,.32,.63,.72,.01,.11,.42,.14,.84,.53,.41,.58,.49,.72,.67,.02,.19,.02,.1,.29,.69,.29,.62,.78,.54,.87,.92,.42,.16,.23,.3,.25,.77,.39,.28,.14,.23,.27,.17,.04,.11,.29,.06,.96,.06,.52,.56,.01,.52,.71,.36,.17,.81,.76,.1,.48,.95,.52,.07,.68,.44,.56,.71,.28,.37,.24,.77,.02,.49,.88,.69,.72,.62,.24,.86,.42,.01,.65,.89,.05,.54,.9,.99,.06,.03,.23,.62,.87,.25,.45,.74,.62,.24,.68,.77,.58,.57,.85,.21,.08,.09,.33,.52,.36,.69,.77,.73,.22,.38,.56,.91,.29,.64,.65,.49,.31,.22,.57,.41,.5,.37,.98,.98,.42,.34,.11,.25,.59,.55,1,.83,.4,.53,.81,.66,.99,.32,.13,.43,.88,.84,.7,.73,.61,.39,.75,.54,1,.79,.47,.26,.59,.85,.7,.9,.9,.66,.16,.52,.27,.16,0,.68,.31,.74,.64,.22,.53,.71,.34,.45,.94,.1,.11,.09,.06,.19,.69,.52,.85,.76,.05,.85,.57,.31,.58,.62,.96,.47,.34,.03,.16,.28,.31,.49,.06,.19,.51,.37,.22,.33,.92,.35,.49,.95,.25,.45,.36,.37,.38,.25,.45,.25,.09,.31,.9,.89,.67,.45,.69,.81,.77,.18,.5,.85,.16,.17,.62,.46,.2,.37,.1,.4,.31,.83,.31,.94,.06,.5,.09,.1,.05,.84,.99,.39,.68,.43,.49,.57,.12,.21,.72,.07,.01,.15,.1,.27,.15,.98,.73,.97,.45,.05,.1,.69,.65,.72,.71,.66,.13,.89,.88,.62,.55,.53,.83,.11,.58,.81,.87,.81,.47,.99,.39,.41,.47,.74,.98,.57,.17,.31,.75,.74,.73,.31,.59,.61,.4,.09,.75,.24,.12,.19,.85,.31,.38,.85,.85,.84,.71,.11,.39,.97,.54,.91,.97,.49,.94,.71,.15,.86,.02,.74,.29,1,.53,.49,.99,.32,.72,.59,.88,.36,.74,.55,.85,.83,.26,.49,.03,.16,.51,.62,.58,.18,.72,.87,.17,.9,.77,.5,.44,.12,.98,.04,.3,.67,.31,.42,.25,.57,.85,.57,.73,.56,.23,.57,.18,.3,.31,.77,.05,.77,.39,.65,.7,.41,.15,.33,.15,1,.7,.61,.69,.01,.16,.51,.21,.89,.06,.76,.94,.71,.11,.77,.41,.31,.96,.96,.51,.49,.73,.82,.03,.99,.71,.64,.76,.48,.24,.61,.3,.32,.52,.16,.43,.63,.34,.38,.11,.65,.13,.77,.7,.65,.93,.64,.61,.53,.6,.1,.55,.09,.94,.59,.69,.8,.5,.59,.94,.3,.1,.26,.55,0,.52,.24,.14,.11,0,.2,.17,.75,.44,.39,.63,.1,.36,.83,.87,.33,.63,.23,.53,.76,.08,.8,.68,.76,.34,.3,.97,.03,.92,.44,.44,.97,.43,.91,.6,.02,.55,.61,.64,.54,.32,.66,.71,.52,.05,.61,.18,.08,.67,.3,.31,.1,.01,.33,.04,.15,.42,.04,0,.03,.61,.67,.15,.68,.25,.59,.63,.85,.57,.08,.58,.22,.4,.5,.35,.31,.84,.85,0,.58,.4,.18,.05,.16,.47,.93,.11,.68,.05,.19,0,.46,.31,.26,.32,.47,.45,.12,.71,.81,.32,.14,.55,.25,.4,.66,.52,.32,.34,.26,.02,.95,.81,.74,.01,.06,.4,.46,.19,.09,.71,.05,.19,.67,.94,.71,.22,.02,.79,.61,.46,.6,.66,.19,.38,.43,.52,.37,.53,.71,.64,.07,.65,.36,.97,.77,.1,.84,.47,.32,.52,.27,.79,.31,.55,.43,.63,.17,.29,.25,.3,.18,.13,.1,.46,.3,.64,.06,.22,.29,.69,.94,.8,.05,.8,.79,.4,.26,.25,.16,.93,.68,.88,.08,.09,.95,.92,.26,.31,.1,.38,.3,.23,.51,.05,.59,.55,.41,.2,.1,.49,.41,.1,.29,.16,.66,.13,.46,.29,.71,.58,.57,.74,.05,.26,.46,.13,.44,.24,.32,.29,.71,.81,.42,.35,.31,.47,.45,.73,.98,.39,.93,.33,.4,.31,.55,.57,.67,.86,.41,.17,.39,.61,.07,.35,.13,.36,.59,.11,.04,.33,.31,.13,.66,.3,.02,.17,.5,.32,.66,.3,.88,.7,.2,.41,.99,.19,.11,.21,.52,.6,.86,.85,.86,.87,.07,.17,.28,.14,.43,.73,.42,.55,.49,.97,.63,.43,.83,.18,.24,.93,.39,.39,.25,.2,.42,.05,.22,.16,.58,.89,.32,.34,.87,.11,.61,.28,.18,.6,.69,.33,.36,.7,.37,.28,.17,.17,.26,.25,.49,.26,.56,.23,.86,.35,.8,.7,.25,.71,.11,.93,.42,.38,.67,.17,.2,.48,.14,.49,.8,.84,.07,.78,.17,.92,.94,.39,.37,.3,.57,.29,.31,.74,.51,.53];export{a as pvalData};
