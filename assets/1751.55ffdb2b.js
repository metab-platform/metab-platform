const a=[.32,.5,.17,.39,.56,.41,1,.52,.31,.39,.75,.22,.23,.47,.49,.36,.59,.13,.64,.17,.17,.63,.61,.35,.77,.99,.22,.52,.74,.31,.73,.39,.83,.4,.71,.29,.57,.94,.69,.59,.89,.8,.35,.12,.07,.7,.58,.74,.73,.73,.45,.22,.16,.17,.74,.94,.94,.19,.73,.54,.88,.97,.37,.36,.26,.88,.65,.55,.73,.15,.92,.49,.66,.1,.5,.18,.84,.81,.4,.69,.82,.79,.18,1,.54,.87,.95,.39,.73,.69,.38,.79,.94,.16,.84,.11,.27,.27,.25,.95,.17,.25,.58,.22,.87,.72,.31,.5,.57,.08,.05,.67,.86,.68,.84,.78,.12,.97,.73,.68,.61,.3,.06,.55,.56,.61,.26,.94,.89,.89,.47,.93,.81,.84,.4,.93,.48,.45,.61,.7,.79,.26,.87,.75,.17,.16,0,.9,.55,.63,.3,.89,.87,.93,.61,.51,.95,.5,.62,.55,.54,.51,.32,.15,.96,.36,.62,.74,.26,.94,.15,.98,.19,.15,.89,.98,.89,.6,.54,.74,.88,.36,.45,.42,.86,.81,.16,.4,.88,.38,.48,.86,.92,.78,.94,.22,.69,.04,.6,.92,.49,.9,.99,.45,.89,.58,.89,.82,.96,.21,.71,.66,.84,.84,.15,.56,0,.46,.98,.44,.64,.87,.97,.31,.51,.83,.68,.71,.93,.5,.51,.45,.74,.08,.55,.17,.18,.7,.58,.14,.33,.38,.35,.32,.69,.62,.12,.81,.78,.68,.55,.31,.93,.04,.79,.22,.55,.96,.05,.38,.87,.87,.41,.83,.98,.72,.03,.47,.48,.57,.85,.75,.98,.12,.76,.64,.44,.96,.2,.55,.57,.95,.51,.13,.59,.86,.83,.82,.48,.45,.86,.12,.91,.54,.96,.35,.29,.25,.44,.23,.39,.69,.38,.91,.46,.69,.54,.71,.8,.8,.73,.8,.32,.29,.67,.3,.2,.84,.09,.14,.98,.76,.83,.38,.93,.81,.63,.51,.7,1,.7,.67,.51,.64,.83,.89,.77,.58,.4,.39,.96,.52,.28,.47,.38,.16,0,.49,.44,.41,.51,.81,.21,.84,.76,.33,.12,.81,.14,.19,.88,.17,.91,.89,.57,.19,.35,.74,.94,.3,.76,.6,.97,.69,.6,.76,.46,.8,.17,.47,.98,.09,.19,.12,.62,.74,.39,.09,.27,.68,.06,.09,.57,.6,.18,.65,.97,.86,.84,.6,.5,.37,.1,.75,.6,.2,.78,.39,.68,.57,.29,.36,.27,.07,.96,.83,.93,.41,.39,.08,.43,.66,.59,.38,.83,.49,.73,.11,.77,.14,.27,.93,.93,.1,.57,.41,.82,.56,.55,.17,.77,.77,.74,.43,.24,.78,.62,.88,.93,.39,.69,.39,.88,.42,.68,.84,.95,.73,.37,.45,.14,.52,.94,.79,.96,.97,.39,.47,.6,.23,.35,.72,.49,.93,.9,.6,.29,.67,.38,.8,.47,.33,.58,.99,.68,.91,.46,.26,.17,.08,.46,.27,.37,.44,.56,.93,.61,.6,.95,.19,.87,.97,.15,.22,.68,.47,.84,.32,.79,.64,.94,.68,.62,.02,.94,.35,.71,.99,.59,.51,.68,.21,.73,.82,.91,.19,.34,.28,.59,.87,.68,.41,.94,.76,.22,.07,.6,.41,.6,.18,.39,.58,.14,.67,.57,.16,.69,.43,.05,.62,.27,.74,.29,.15,.67,.02,.75,.45,.23,.82,.27,.46,.42,.56,.92,.79,0,.84,.84,.31,.34,.04,.77,.16,.96,.32,.22,.95,.26,.42,.71,.79,.64,.36,.48,.92,.76,.78,.2,.68,.72,0,0,.34,.25,.51,.85,.17,.24,.61,.72,.46,.42,.63,.92,.44,.56,.67,.16,.99,.54,.56,.7,1,.52,.22,.55,.66,.3,.68,.57,.19,.76,.99,.6,.36,.71,.86,.59,.45,.36,.7,.15,.95,.29,.76,.55,.45,.89,.9,.76,.8,.68,.39,.11,.8,.56,.75,.78,.5,.31,.96,.22,.4,.63,.22,.4,.3,.02,.49,.65,.41,.92,.47,.28,.07,.73,.62,.93,.82,.42,.67,.8,.44,.56,.35,.98,.6,.6,.78,.45,.72,.72,.33,.47,.55,.69,.9,.53,.68,0,.21,.99,.11,.31,.59,.26,.44,.11,.92,.82,.4,.6,.95,.84,.35,.57,.03,.29,.26,.93,.11,.11,.82,.16,.8,.63,.33,.01,.26,.78,.69,.41,.19,.92,.45,.2,.77,.19,.38,.53,.76,.81,.95,.75,.7,.75,.48,.5,.41,.87,.69,.44,.39,.93,.76,.83,.58,.67,.24,.26,.89,.14,.71,.62,.21,.57,.44,.7,.93,.05,.85,.68,.06,.74,.15,.62,.3,.07,.22,.49,.88,.44,.15,.84,.69,.61,.37,.62,.58,.94,.63,.88,.99,.11,.6,.51,.72,.92,.36,.76,.81,.4,.49,.98,.74,.16,.64,.2,.84,.7,.31,.23,.43,.33,.76,.89,.43,.45,.33,.62,.31,.62,.76,.71,.11,.35,.4,.31,.96,.66,.92,.31,.96,.66,.72,.62,.28,.85,0,.7,.94,.55,.27,.19,.23,.05,.73,.06,.79,.34,.71,.15,.17,.43,.24,.39,1,.81,.97,.85,.55,.96,.93,.3,.63,.62,.99,.88,.54,.54,.32,.82,.41,.67,.16,.14,.25,.11,.32,.73,.23,.33,.93,.83,.51,.72,.7,.25,.17,.52,.38,0,.6,.63,.9,.88,.77,.73,.54,.71,.56,.22,.96,.74,.73,.24,.04,0,.82,.37,.95,.95,.07,.16,.86,.29,.57,.38,.69,.67,.54,.79,.23,.33,.12,.16,.19,.18,.86,.95,.38,.08,.52,.77,.28,.18,.25,.76,.49,.87,.29,.82,.78,.79,.59,.43,.08,.21,.95,.16,.41,.91,.58,.19,.62,.35,.76,.33,.42,.49,.32,.61,.43,.71,.21,1,.72,.69,.98,.61,.46,.5,.49,.51,.76,.18,.59,.39,.49,.82,.93,.39,.63,.74,.29,.58,.64,.37,.54,.2,.47,.69,.42,.83,.41,.22,.59,.09,.19,.38,.21,.96,.68,.75,.8,.55,.09,.52,0,.63,.09,.57,.95,.44,.2,.5,.61,.94,.68,.2,.7,.81,.59,.45,.26,.81,.96,.77,.99,.94,.94,.17,.98,.52,.44,.59,.74,.47,.56,.21,.68,.23,.8,.97,.92,.92,.38,.7,.63,.35,.34,.89,.15,0,.99,.9,.27,.57,.07,.36,.36,.46,.48,.25,.23,.07,.29,.82,.88,.59,.37,.58,.73,.44,.43,.85,.28,.94,.16,.6,.82,.25,.64,.75,.92,.25,.94,.21,.44,.26,.98,.66,.55,.8,.24,.47,.01,.94,.83,.93,.15,.15,.58,.11,.57,.31,.7,.52,.72,.61,.43,.9,.86,.8,.94,.69,.69,.73,.56,.08,.82,.27,.36,.56,.69,.19,.87,.93,.92,.61,.65,.2,.15,.93,.16,.03,.46,.43,.05,.37,.86,.41,.15,.29,.52,.68,.94,.24,.85,.77,.77,.45,.94,.98,.17,.98,.49,.14,.15,.87,.94,.4,.37,.85,.63,.19,.77,.15,.1,.81,.66,.27,.98,.92,.39,.38,.22,.33,.64,.61,.92,.96,.91,.39,.81,.65,.51,.74,.95,.23,.25,.88,.99,.65,.18,.42,.8,.17,.14,.81,.63,.47,.84,.82,.24,.58,.2,.81,.86,.6,.18,.21,.14,.33,.39,.73,.15,.25,.59,.31,.27,.44,.11,.26,.95,.45,.96,.2,.8,.19,.43,.5,.21,.18,.52,.58,.6,.75,.38,.98,.65,.3,.5,.43,.44,.97,.22,.71,.24,.82,.67,.23,.34,.25,.91,.35,.34,.89,.65,.51,.65,.38,.65,.47,.64,.74,.28,.49,.2,.64,.56,.95,.53,.39,.13,.5,.74,.55,.23,.07,.38,.38,.66,.17,.85,.38,.16,.45,.23,.99,.29,.08,.85,.13,.42,.55,.75,.61,.85,.55,.66,.88,.39,.84,.76,.44,.17,.64,.59,.87,.8,.73,.35,.79,.53,.96,.44,.9,.02,.42,.68,.32,.66,.71,.54,.21,.87,.99,.34,.27,1,.12,.14,.46,.21,.3,.97,.09,.85,.45,.4,.31,.63,.97,.6,.58,.27,.82,.62,.91,.08,.94,.87,.17,.4,.11,.56,.77,.16,.9,.7,.08,.5,.14,.7,.1,.96,.4,.99,.15,.85,.22,.89,.87,.93,.43,.98,.48,.29,.92,.37,.74,.24,.95,.99,.83,.49,.66,.81,.53,.62,.56,.71,.73,.25,.75,.43,.58,.24,.62,.22,.96,.85,.84,.94,.36,.19,.91,.02,.51,.01,.29,.14,.37,.49,.4,.55,.6,.88,.72,.29,.83,.7,.23,.72,.47,.73,.49,.58,.28,.87,.78,.22,.21,.75,.62,.88,.09,.99,.31,.31,.21,.65,.94,.8,.28,.35,.85,.08,.91,.19,.29,1,.52,.84,0,.94,.24,.18,.99,.17,.88,.96,.55,.4,.83,.65,.68,.63,.01,.91,.6,.75,.41,.26,.37,.25,.39,.07,.99,.51,.7,.5,.19,.57,.46,.22,.77,.89,.69,.11,.98,.38,.72,.27,1,.66,.33,.38,.35,.26,.72,.42,1,.79,.16,.8,.53,.14,.87,.51,.82,.97,.43,.52,.27,.73,.42,.5,.45,.6,.28,.87,.24,.01,.99,.85,.24,.6,.87,.35,.83,.04,.02,.01,1,.58,.5,.99,.89,.92,.89,.8,.12,.7,.15,.71,.91,.59,.81,.92,.16,.61,.63,.59,.27,.61,.93,.6,.76,.66,.65,.03,.45,.5,.93,.27,.78,.58,.37,.45,.05,.52,.96,.64,.81,.63,.54,.9,.38,.09,.76,.94,.15,.52,.79,.38,.44,.73,.81,.56,.19,.79,.46,.71,.92,.8,.14,.97,.42,.72,.73,.27,.78,.29,.24,.75,.26,.99,.05,.03,.7,.64,.18,.37,.2,.72,.17,.92,.7,.21,.81,.88,.92,.15,.65,.77,.45,.52,.34,.55,.77,.39,.99,.59,.08,.51,.3,.4,.3,.27,.43,.02,.62,.07,.76,.16,.47,.88,.57,.84,1,.62,.79,.6,.35,.07,.07,.95,.21,.72,.73,.26,.79,.12,.31,.98,.45,.94,0,.57,.48,.51,.73,.32,.2,.85,.39,.86,.92,.74,.19,.28,.63,.72,.25,.8,.18,.84,.46,.97,.48,.54,.75,.53,.5,.91,.92,.28,.79,.52,.68,.2,.45,.63,.59,.43,.6,.27,.57,.52,.91,.62,.76,.22,.48,.11,.85,.15,.02,.56,.52,.27,.53,.55,.11,.07,.89,.78,.26,.74,.91,.31,.85,.46,.9,.48,.9,.51,.05,.37,.42,.13,.6,.24,.63,.39,.92,.8,.19,.2,.07,.21,.16,.4,.2,.44,.32,.42,0,.96,.56,.56,.63,.91,.65,.72,.91,.05,.42,.4,.98,.82,.01,.9,.16,.44,.69,.41,.72,.98,.33,.29,.12,.56,.4,.33,.96,.85,.72,.63,.89,.84,.15,.72,.76,.95,.79,.96,.83,.89,.8,.84,.88,.25,.89,.57,.47,.25,.45,.9,.3,.62,.9,.46,.63,.08,.48,.75,.79,.21,.48,.39,.19,.3,.23,.52,.73,.18,.96,.09,.73,.41,.31,.73,.32,.88,.27,.75,.5,0,.24,.37,.07,.23,.07,.67,.22,.72,.64,.71,.37,.9,.82,.39,.75,.85,.28,.9,.97,.44,.97,.31,.72,.73,.74,.83,.23,.53,.59,.51,.65,.48,.7,.38,.12,.52,.64,.69,.82,.18,.81,.83,.95,.95,.11,.13,.26,.86,0,.74,.25,.52,.23,.37,.51,.4,.99,.32,.46,.94,.44,.27,.63,.84,.71,.37,.34,.21,.99,.72,.94,.28,.52,.87,.67,.22,.44,.86,.56,.91,.7,.78,.15,.04,.77,.44,.38,.3,.77,.74,.31,.57,.82,.21,.09,.29,.24,.32,.63,.12,.86,.67,.11,.35,.49,.79,.24,.43,.52,.51,.34,.67,.12,.19,.83,.93,.82,.2,.42,.66,.98,.86,.95,0,.09,.1,.36,.77,.3,.67,.25,.08,.47,.14,.61,.54,.72,.57,.84,.16,.62,.4,.51,.83,.26,.77,.75,.64,.07,.34,.14,.93,.38,.46,.89,.56,.58,.34,.72,.48,.81,.11,.91,.8,.51,.29,.56,.24,.84,.78,.49,.05,.52,.25,.49,.82,.53,.28,.24,.85,.2,.82,.81,.26,.62,.71,.17,.47,.98,.76,.82,.59,.79,.43,.41,.62,.14,.97,.84,.97,.12,.4,.86,.96,.47,1,.61,.39,.09,.25,.65,.56,.16,.36,.43,.23,.91,.78,.68,.81,.47,.33,.9,.92,.71,.24,.86,.22,.82,.57];export{a as pvalData};
